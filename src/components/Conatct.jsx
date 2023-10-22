import React, { useState } from 'react'
import photo from '../assets/conatct.jpeg'
import { useNavigate } from 'react-router-dom'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { FaFreeCodeCamp } from 'react-icons/fa6'
import themehook from '../components/CodeContext'
import { CgProfile } from 'react-icons/cg'
import toast, { Toaster } from 'react-hot-toast'

function Conatct() {

    const { theme, settheme, logedin, setlogedin, contextusername, setcontextusername, setnavbar } = themehook();
    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [msg, setmsg] = useState("")

    const hadlesubmit = (e) => {
        e.preventDefault();

        if (logedin) {
            toast.success("message send sucessfully....")

        }
        else {
            toast.error("login first to send message")
        }

        setemail("")
        setmsg("")
    }
    return (
        <div className=' sm:min-h-[92vh]'>
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

            <div className={` flex flex-col sm:flex-row m-auto w-[95%] rounded-md sm:w-[90%] md:w-[80%] my-10 ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"}`}>
                <div className='w-[100%] sm:w-[35%] '>
                    <img src={photo} alt="" className=' w-[100%] h-[100%]' />
                </div>
                <div className=' w-[100%] sm:w-[65%] p-2 sm:p-4 flex flex-col justify-center items-center '>
                    <h1 className=' font-bold text-xl text-center'>Contact Us</h1>
                    <section className=' my-3 w-[80%]'>
                        <p className=' font-semibold text-lg '>Contact through email</p>
                        <button className=' bg-green-700 text-white px-5 py-[2px] rounded-3xl font-bold'><a href="mailto:yashmulik95@gmail.com">email</a></button>
                    </section>
                    <section className=' w-[80%]'>
                        <p className=' font-semibold text-lg my-1'>Sent Message</p>
                        <form onSubmit={hadlesubmit}>
                            <label className='font-bold'>Email</label><br />
                            <input type="text" value={email} className='w-[100%] outline-none px-4 py-2 rounded-md my-2 ' onChange={(e) => {
                                setemail(e.target.value)
                            }} /><br />
                            <label className=' font-bold'>Message</label><br />
                            <textarea rows={5} cols={5} className=' outline-none w-[100%] px-4 py-2 rounded-md my-2' value={msg} onChange={(e) => {
                                setmsg(e.target.value)
                            }}></textarea><br />
                            <button className=' border-[1px] border-gray-500 font-bold px-4 py-[3px] rounded-3xl hover:border-green-600 hover:bg-green-600 hover:text-white'>Submit</button>
                        </form>
                    </section>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Conatct