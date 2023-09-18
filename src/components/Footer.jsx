import React from 'react'
import { GrCloudComputer } from 'react-icons/gr'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { BiSolidPhoneCall } from 'react-icons/bi'
import themehook from './CodeContext'
import { Link } from 'react-router-dom'

function Footer() {
    const { theme } = themehook()
    return (
        <div className={` ${theme == "light" ? "bg-[#f5f1f1]" : "bg-gray-950"}  p-2`}>
            <div className=" flex max-[666px]:flex-col flex-row items-center justify-between px-4 py-2 my-4">
                <section className=' flex items-center'>
                    <section className=''>
                        <GrCloudComputer size={30} />
                    </section>
                    <h1 className=' font-bold text-green-600 mx-2 text-lg'><u>CODE MASTER</u></h1>
                </section>
                <ul className=' max-[666px]:my-2'>
                    <li className=' inline font-bold hover:border-b-2  border-green-500 m-2 my-3'><Link to="/">Home</Link></li>
                    <li className=' inline font-bold hover:border-b-2  border-green-500 m-2 my-3'><Link to="/">About</Link></li>
                    <li className=' inline font-bold hover:border-b-2 border-green-500 m-2 my-3'><Link to="/">Contact</Link></li>
                    <li className=' inline font-bold hover:border-b-2 border-green-500 m-2 my-3'><Link to="/">Help</Link></li>
                </ul>
                <section className=' flex max-[666px]:my-2'>
                    <section className=' bg-white p-2 rounded-full mx-2 '>
                        <BiSolidPhoneCall size={25} />
                    </section>
                    <h1 className=' mx-2'>4949495959</h1>

                </section>

            </div>
            <div className=" flex max-[666px]:flex-col-reverse flex-row items-center justify-between px-4 py-2">
                <section className=' flex items-center '>
                    <section className=' bg-white p-2 rounded-full mx-2'>
                        <BsInstagram size={25} className=' ' />
                    </section>
                    <section className=' bg-white p-2 rounded-full mx-2'>
                        <BsGithub size={25} className=' ' />
                    </section>
                    <section className=' bg-white p-2 rounded-full mx-2'>
                        <BsLinkedin size={25} className=' ' />
                    </section>
                </section>
                <section className=' max-[666px]:my-2'>
                    <h1 className='text-center font-semibold max-[666px]:text-lg text-sm '>code-master @{new Date().getFullYear()}</h1>
                    <h1 className='text-center font-semibold max-[666px]:text-md text-sm '>All rights are reserved</h1>
                </section>

                <section className=' flex max-[666px]:my-2'>
                    <section className=' bg-white p-2 rounded-full mx-2 '>
                        <BiSolidPhoneCall size={25} className='' />
                    </section>
                    <section className=' font-semibold'>
                        <h1 className=''>shop no: 400, ganesh road</h1>
                        <h1>mumbai ,400102</h1>
                    </section>
                </section>

            </div>
        </div>
    )
}

export default Footer