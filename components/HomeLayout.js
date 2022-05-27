import React from 'react'

const HomeLayout = () => {
  return (
      <>
        <div className='container' >
            <div className='row'>
                <div className='col-4 my-auto'>
                    <p className='home-text text-uppercase'>Ini adalah home</p>
                    <p className='home-text-body'>Yuhuuuuu!!!</p>
                </div>
                <div className='col-8'>
                    <div className='img-box'>
                        <img src='/images/ORFEZ80.jpg' className='rounded dolphin float-end'/>
                    </div>
                </div>
            </div>
        </div>  
      </>
    
  )
}

export default HomeLayout