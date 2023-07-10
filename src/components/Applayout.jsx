import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Applayout() {
    return (
        <div>
            {/* <Navbar />
            <Outlet />
            <Footer /> */}
            <section className=''>
                <Navbar />
            </section>
            <section className=' min-h-[75vh]'>
                <Outlet />
            </section>
            <section className=''>
                <Footer />
            </section>
        </div>
    )
}

export default Applayout