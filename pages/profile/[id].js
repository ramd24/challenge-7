import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Zoom  from 'react-medium-image-zoom'
import axios from 'axios'
import Layout from '../../components/Layout'

const Student = () => {

    const router = useRouter()

    const [students, setStudents] = useState([])

    useEffect( () => {
      axios.get(` https://fejs-c7-api.herokuapp.com/api/students/${router.query.id}?populate=*`)
    .then( res => {
      setStudents([res.data.data])
    })
    })

    var imageSize ={
        width:"300px", height:"400px"
      }

  return (
    <Layout>
        <div className='container'>
            <div className='card-body-cardlist'>
                <div className='wrapper'>
                    {students.map((student) => {
                        return(
                            <div key={student.id} >
                                <div className="card" style={{width:'18rem'}}>
                                <Zoom>
                                    {student.attributes.photo.data === null && (
                                    <img src="/images/ORFEZ80.jpg" alt="student" style={imageSize} />
                                    )}
                                    {student.attributes.photo.data !== null && (
                                    <img
                                        src={student.attributes.photo.data.attributes.url}
                                        alt="student"
                                        style={imageSize}
                                    />
                                    )}
                                </Zoom>
                                    <div className="card-body">
                                        <p className="card-text">First Name: {student.attributes.firstname}</p>
                                        <p className="card-text">Last Name: {student.attributes.lastname}</p>
                                        <p className="card-text">Location: {student.attributes.location}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        })}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Student