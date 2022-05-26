import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col text-center justify-content-center'>
                <div className='container-navbar pt-5'>
                    <Link href='/'>
                        <a className='me-5 text-navbar'>Home</a>
                    </Link>
                    <Link href='/'>
                        <a className='me-5 text-navbar'>Diagram</a>
                    </Link>
                    <Link href='/'>
                        <a className='me-5 text-navbar'>Input Box</a>
                    </Link>
                    <Link href='/'>
                        <a className='me-5 text-navbar'>Download</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar