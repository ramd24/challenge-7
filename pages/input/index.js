import React, { useRef } from 'react'
import Layout from '../../components/Layout';
import axios from 'axios'
import { useDropzone } from 'react-dropzone'

const index = () => {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));

    const inputFirstName = useRef()
    const inputLastName = useRef()
    const inputLocation = useRef()
    const inputImg = useRef()

    const formSubmitHandler = async (event) => {
        event.preventDefault()
        const data ={
            firstname: inputFirstName.current.value,
            lastname: inputLastName.current.value,
            location: inputLocation.current.value,
        }
        const formData = new FormData();
        formData.append('data', JSON.stringify(data))
        acceptedFiles.forEach( file => {
            formData.append('files.photo', file, file.path)
        } )

        const res = await axios.post('https://fejs-c7-api.herokuapp.com/api/students/', formData)
        console.log(res.data)
    
    }

  return (
    <>
        <Layout>
            <div className='container'>
                <div className="d-flex justify-content-center align-items-center mt-5 input-all-text">
                    <form onSubmit={formSubmitHandler} >
                        <div className='card-body-input'>
                            <div className="input-group">
                                <div className='row'>
                                    <div className='col-6'>
                                        <label className='form-label'>First Name</label>
                                        <input className='form-control' type="text" name="firstname" id="firstname" ref={inputFirstName} />
                                    </div>
                                    <div className='col-6'>
                                        <label className='form-label'>Last Name</label>
                                        <input className='form-control'  type="text" name="lastname" id="lastname" ref={inputLastName} />
                                    </div>
                                    <div className='col-12'>
                                        <label className='form-label mt-3'>Location</label>
                                        <input className='form-control' type="text" name="location" id="location" ref={inputLocation} />
                                    </div>
                                    <div className='col-12'>
                                        <label className='form-label mt-3'>Photo</label>
                                        <div {...getRootProps({className: 'dropzone'})}>
                                            <input {...getInputProps()} />
                                            <p>Drag and drop some files here or click to select files</p>
                                        </div>
                                        <ul>{files}</ul>
                                    </div>
                                    <div className='col-12'>
                                        <input type="submit" value="SUBMIT FORM" className='btn btn-dark'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default index