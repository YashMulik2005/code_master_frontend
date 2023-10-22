import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { FaFreeCodeCamp } from 'react-icons/fa6'
import themehook from '../components/CodeContext'
import { CgProfile } from 'react-icons/cg'
import photo from '../assets/home_cover.png'

function About() {
    const { theme, settheme, logedin, setlogedin, contextusername, setcontextusername, setnavbar } = themehook();
    const navigate = useNavigate()
    return (
        <div className=' sm:min-h-[94vh]'>
            <div className='max-[666px]:hidden p-1 px-6 flex justify-between items-center '>
                <section onClick={() => {
                    navigate("/")
                }} className=' cursor-pointer'>
                    <section className=' flex items-center justify-center'>
                        <h1 className={`  font-bold text-md `}>Code</h1>
                        <section>
                            <FaFreeCodeCamp size={30} className={` text-green-700 mx-[2px] font-bold  `} />
                        </section>
                        <h1 className={` font-bold text-md `}>Master</h1>
                    </section>
                    {/* <section className=' flex  items-center justify-center mt-[-7px]'>
                            <hr className={` border-black w-8 border-t-2  `} />
                            <h1 className={` text-green-700 text-[12px] mx-[2px] font-semibold`}>learn with fun</h1>
                            <hr className={` border-black w-8 border-t-2  `} />
                        </section> */}
                </section>
                <ul className=" p-3 flex cursor-pointer ">
                    <li className={`inline mx-2 font-semibold border-b-2 ${theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"}  hover:border-green-600`} onClick={() => {
                        setnavbar(false)
                        navigate("/")
                    }}>Home</li>
                    <li className={`inline mx-2 font-semibold border-b-2 ${theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"}  hover:border-green-600`} onClick={() => {
                        setnavbar(false)
                        navigate("/About")
                    }}>About</li>
                    <li className={`inline mx-2 font-semibold border-b-2 ${theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"}  hover:border-green-600`} onClick={() => {
                        setnavbar(false)
                        navigate("/contact")
                    }}>Contact</li>
                    <li className={`inline mx-2 font-semibold border-b-2 ${theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"}  hover:border-green-600`} onClick={() => {
                        setnavbar(false)
                        navigate("/feedback")
                    }}>Feedback</li>
                </ul>
                {
                    logedin ?
                        <section className=' flex items-center m-2 cursor-pointer'>
                            <CgProfile size={33} className=' ' />
                            <h1 className=' text-lg' onClick={() => {
                                setnavbar(false)
                                navigate("/profile")
                            }}>{contextusername}</h1>
                        </section>
                        :
                        <section className=' cursor-pointer'>
                            <button className=' text-black font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-[#e9ffed] hover:text-white' onClick={() => {
                                setnavbar(false)
                                navigate("/auth/login")
                            }}>Login</button>
                            <button className=' text-black mx-2 font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-[#e9ffed] hover:text-white' onClick={() => {
                                setnavbar(false)
                                navigate('/auth/signup')
                            }}>Signup</button>
                        </section>

                }
            </div>

            <div className={` flex sm:flex-row flex-col w-[80%] m-auto my-5 ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} rounded-md sm:p-5`}>
                <div className='w-[100%] sm:w-[40%] flex justify-center items-center p-3'>
                    <img src={photo} alt="" />
                </div>
                <div className='w-[100%] sm:w-[60%] flex flex-col justify-center items-center p-3'>
                    <h1 className=' font-bold text-xl sm:text-3xl text-center'>About</h1>
                    <p className=' text-center'>Lorem ipsum dolor sit amet consectetu elit.esciunt! Assumenda  facere incidunt eveniet mollitia nemo, praesentium quod nulla maxime consectetur eum non illum odio atque adipisci tempore beatae perspiciatis aut dolor. Obcaecati repellendus ullam tempore suscipit fugiat impedit dignissimos molestias molestiae libero magni aperiam autem earum nobis laboriosam.</p>
                </div>
            </div>

            <div className={`${theme == "light" ? "bg-[#f5f1f0]" : " bg-[#0c131d]"} flex flex-col sm:flex-row my-5 p-5 `}>
                <div className='w[100%] sm:w-[25%]  p-3 sm:border-r-2'>
                    <h1 className=' text-center font-bold text-xl'>Our Team</h1>
                    <p className=' text-center'>moh cvc hvgvcygwvg vdygewvxgwe dgvwgx </p>
                </div>
                <div className=' w-[100%]  sm:w-[75%]  flex flex-col sm:flex-row justify-center items-center'>
                    <section className={`${theme == "light" ? "bg-[#ffffff]" : "bg-[#1c232b]"} hover:bg-green-600 hover:text-white inline-block p-3 px-5 rounded-md m-2`}>
                        <h1 className=' font-bold text-xl'>Atharv Tambat</h1>
                        <p className=' text-sm'>Web Developer</p>
                    </section>
                    <section className={`${theme == "light" ? "bg-[#ffffff]" : "bg-[#1c232b]"} hover:bg-green-600 hover:text-white inline-block p-3 px-5 rounded-md m-2`}>
                        <h1 className=' font-bold text-xl'>Shyam Kolge</h1>
                        <p className=' text-sm'>Web Developer</p>
                    </section>
                    <section className={`${theme == "light" ? "bg-[#ffffff]" : "bg-[#1c232b]"} hover:bg-green-600 hover:text-white inline-block p-3 px-5 rounded-md m-2`}>
                        <h1 className=' font-bold text-xl'>Chaitanya</h1>
                        <p className=' text-sm'>Web Developer</p>
                    </section>
                    <section className={`${theme == "light" ? "bg-[#ffffff]" : "bg-[#1c232b]"} hover:bg-green-600 hover:text-white inline-block p-3 px-5 rounded-md m-2`}>
                        <h1 className=' font-bold text-xl'>Yash Mulik</h1>
                        <p className=' text-sm'>Web Developer</p>
                    </section>
                </div>
            </div>
            <div className={` flex w-[80%] m-auto my-5 ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} rounded-md p-5`}>
                <div className=' flex flex-col justify-center items-center p-3'>
                    <h1 className=' font-bold text-xl sm:text-3xl text-center'>Why choose us ?</h1>
                    <p className=' text-center'>Lorem ipsum dolor sit amet consectetu elit.esciunt! Assumenda  facere incidunt eveniet mollitia nemo, praesentium quod nulla maxime consectetur eum non illum odio atque adipisci tempore beatae perspiciatis aut dolor. Obcaecati repellendus ullam tempore suscipit fugiat impedit dignissimos molestias molestiae libero magni aperiam autem earum nobis laboriosam.</p>
                </div>
            </div>
        </div>
    )
}

export default About