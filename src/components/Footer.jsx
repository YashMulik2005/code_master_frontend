import React from 'react'
import { GrCloudComputer } from 'react-icons/gr'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import themehook from './CodeContext'
import { Link } from 'react-router-dom'

function Footer() {
    const { theme } = themehook()
    return (
        <div className={` ${theme == "light" ? "bg-[#edf1d6]" : "bg-gray-950"}  p-2`}>
            <div className=" flex items-center justify-between px-4 py-2">
                <section className=' flex items-center'>
                    <section className=''>
                        <GrCloudComputer size={30} />
                    </section>
                    <h1 className=' font-bold text-green-600 mx-2 text-lg'><u>CODE MASTER</u></h1>
                </section>
                <section className=' flex items-center '>
                    <BsInstagram size={25} className=' mx-2' />
                    <BsGithub size={25} className=' mx-2' />
                    <BsLinkedin size={25} className=' mx-2' />
                </section>
            </div>
            <section className=' flex justify-center items-center'>
                <ul>
                    <li className=' inline font-semibold hover:border-b-2  border-green-500 m-2 my-3'><Link to="/">Home</Link></li>
                    <li className=' inline font-semibold hover:border-b-2  border-green-500 m-2 my-3'><Link to="/">About</Link></li>
                    <li className=' inline font-semibold hover:border-b-2 border-green-500 m-2 my-3'><Link to="/">Contact</Link></li>
                    <li className=' inline font-semibold hover:border-b-2 border-green-500 m-2 my-3'><Link to="/">Help</Link></li>
                </ul>
            </section>
            <h1 className=' text-center font-semibold text-sm text-green-600'>code-master @{new Date().getFullYear()}</h1>
        </div>
    )
}

export default Footer