import React, {  useState, useEffect } from 'react'
import axios from 'axios'
import Zoom from 'react-medium-image-zoom'
import { useRouter } from 'next/router'

const CardData = () => {

    const [students, setStudents] = useState([])

    var imageSize ={
      width:"300px", height:"400px"
    }

    useEffect(() => {
        axios.get(
          'https://fejs-c7-api.herokuapp.com/api/students/?populate=*'
        ).then( res => {
          console.log(res);
          setStudents([...res.data.data])
        })
      }, []);

      const router = useRouter()
    
  return (
    <>
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
        
    </>
  )
}

export default CardData