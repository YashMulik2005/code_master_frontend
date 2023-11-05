import React from 'react'
import { GrCloudComputer } from 'react-icons/gr'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { FaLocationDot, FaFreeCodeCamp } from 'react-icons/fa6'
import themehook from './CodeContext'
import { Link, useNavigate } from 'react-router-dom'

function Footer() {
    const { theme, setnavbar } = themehook()

    const navigate = useNavigate()
    return (
        <div className={` ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"}  p-2`}>
            <div className=" flex max-[666px]:flex-col flex-row items-center max-[666px]:justify-center justify-between px-4 py-2 my-2">
                <section>
                    <section className=' flex items-center justify-center'>
                        <h1 className={` ${theme == "dark" ? "text-white" : ""} font-bold text-lg `}>Code</h1>
                        <section>
                            <FaFreeCodeCamp size={35} className={` ${theme == "light" ? "text-green-700" : "text-green-500"} mx-[2px] font-bold  `} />
                        </section>
                        <h1 className={` ${theme == "dark" ? "text-white" : ""} font-bold text-lg `}>Master</h1>
                    </section>
                    <section className=' flex  items-center justify-center mt-[-7px]'>
                        <hr className={` ${theme == "light" ? "border-black" : "border-white"} w-8 border-t-2  `} />
                        <h1 className={` ${theme == "light" ? "text-green-700" : "text-green-500"} text-[12px] mx-[2px] font-semibold`}>learn with fun</h1>
                        <hr className={` ${theme == "light" ? "border-black" : "border-white"} w-8 border-t-2  `} />
                    </section>
                </section>
                <ul className=' max-[666px]:my-2'>
                    <li className=' inline font-bold hover:border-b-2  border-green-500 m-2 my-3' onClick={() => {
                        setnavbar(false)
                        navigate("/")
                    }}>Home</li>
                    <li className=' inline font-bold hover:border-b-2  border-green-500 m-2 my-3' onClick={() => {
                        setnavbar(false)
                        navigate("/About")
                    }}>About</li>
                    <li className=' inline font-bold hover:border-b-2 border-green-500 m-2 my-3' onClick={() => {
                        setnavbar(false)
                        navigate("/contact")
                    }}>Contact</li>
                    <li className=' inline font-bold hover:border-b-2 border-green-500 m-2 my-3' onClick={() => {
                        setnavbar(false)
                        navigate("/feedback")
                    }}>FeedBack</li>
                </ul>
                <section className=' flex items-center max-[666px]:my-2'>
                    <section className={`${theme == "light" ? "bg-white" : " bg-[#1c232b] text-white"} p-2 rounded-full mx-2`}>
                        <BiSolidPhoneCall size={25} />
                    </section>
                    <h1 className=' mx-1 font-semibold'>4949495959</h1>

                </section>

            </div>
            <div className=" flex max-[666px]:flex-col-reverse flex-row max-[666px]:justify-center items-center justify-between px-4 py-2">
                <section className=' flex items-center max-[666px]:mt-2'>
                    <section className={`${theme == "light" ? "bg-white" : " bg-[#1c232b] text-white"} p-2 rounded-full mx-2`}>
                        <a href='https://www.instagram.com/' target='black'><AiFillInstagram size={25} className=' ' /></a>
                    </section>
                    <section className={`${theme == "light" ? "bg-white" : " bg-[#1c232b] text-white"} p-2 rounded-full mx-2`}>
                        <a href='https://github.com/' target='black'><BsGithub size={25} className=' ' /></a>
                    </section>
                    <section className={`${theme == "light" ? "bg-white" : " bg-[#1c232b] text-white"} p-2 rounded-full mx-2`}>
                        <a href='https://www.linkedin.com/' target='black'><BsLinkedin size={25} className=' ' /></a>
                    </section>
                </section>
                <section className=' max-[666px]:my-2'>
                    <h1 className='text-center font-semibold max-[666px]:text-lg text-sm '>code-master @{new Date().getFullYear()}</h1>
                    <h1 className='text-center font-semibold max-[666px]:text-md text-sm '>All rights are reserved</h1>
                </section>

                <section className=' flex max-[666px]:my-2'>
                    <section className={`${theme == "light" ? "bg-white" : " bg-[#1c232b] text-white"} p-2 rounded-full mx-2 h-10`}>
                        <FaLocationDot size={25} className='' />
                    </section>
                    <section className=' font-semibold'>
                        <h1 className=''>shop 400, ganesh road</h1>
                        <h1>mumbai ,400102</h1>
                    </section>
                </section>

            </div>
        </div>
    )
}

export default Footer