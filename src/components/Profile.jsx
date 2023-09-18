import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import themehook from './CodeContext'
import { BiCodeAlt } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import photo from '../assets/no_data.png'
import moment from 'moment'


function Profile() {
    const navigate = useNavigate()
    const { logedin, setlogedin, setcontextusername, contextusername, setnavbar, theme } = themehook()
    const url = import.meta.env.VITE_BACKEND;
    const [user, setuser] = useState()
    const [fque, setfque] = useState()
    const [fans, setfans] = useState()
    const [que, setque] = useState()
    const [quecount, setquecount] = useState()

    const handlelogout = async () => {
        localStorage.removeItem("username");
        setlogedin(false)
        setcontextusername("")
        navigate("/")
    }

    const handlenav = () => {
        setnavbar(false)
    }

    const handlesearch = () => {

    }

    const getdata = async () => {
        const result = await axios.post(`${url}/user/profile`, { username: contextusername })
        // setfans(result.data.fans)
        console.log(result);
        setfans(result.data.data.fans);
        setfque(result.data.data.fque);
        setquecount(result.data.data.quecount)
        setque(result.data.data.que);
        setuser(result.data.data.user);
    }
    useEffect(() => {
        getdata()
    }, [])

    return (
        <div onClick={handlenav} className=' h-[95vh]'>
            <div className=' flex items-center justify-between p-3 sm:p-5'>
                <h1 className=' font-bold sm:mx-12 sm:text-xl'>USER PROFILE</h1>
                <section className=' flex w-[65%] sm:w-[50%] justify-center items-center '>
                    <form action="" onSubmit={handlesearch} className=' w-[100%]'>
                        <input type="text" required className={`${theme == "dark" ? "border-none focus:outline-none" : "border-2"}  px-4 py-1 w-[100%] rounded-full focus:outline-none `} placeholder='search here' />
                    </form>
                    <div className=' rounded-full bg-[#39A84B] group-hover:bg-[#C5E7CB] p-1 mx-5'>
                        <BiCodeAlt size={27} className=' text-white group-hover:text-[#39A84B]' />
                    </div>
                </section>
            </div>
            {user?.map((item, index) => {
                return <div className=' flex flex-col min-[950px]:flex-row min-[950px]:h-[87vh] p-4 sm:p-5 justify-center'>

                    <div className={`${theme == "light" ? "bg-[#f5f1f1] " : "bg-black"}  h-[100%] w-[100%] min-[950px]:w-[30%] rounded-xl flex items-center p-5 mb-4 min-[950px]:mb-0 flex-col`}>
                        <div className=' rounded-full bg-black w-24 h-24 flex justify-center items-center '>
                            <CgProfile className='w-[90%] h-[90%]' color='white' />

                        </div>
                        <h1 className={`${theme == "light" ? " " : "text-white"} font-bold text-xl `}>yash02</h1>
                        <button className=' w-[80%] px-3 py-1 bg-green-600 text-white rounded-3xl font-bold text-lg my-3' onClick={handlelogout}>Logout</button>
                        <section className={` ${theme == "dark" ? "bg-[#323232]" : "bg-white"} w-[95%] rounded-3xl pl-4 py-[7px]  my-1`}>
                            <h1 className='text-sm text-[#a19999] font-semibold'>Name:</h1>
                            <h1 className={`text-lg font-bold ${theme == 'dark' ? 'text-white' : ''}`}>{item.fname}</h1>
                        </section>
                        <section className={` ${theme == 'dark' ? "bg-[#323232]" : "bg-white"} w-[95%] rounded-3xl pl-4 py-[7px]  my-1`}>
                            <h1 className='text-sm text-[#a19999] font-semibold'>Email:</h1>
                            <h1 className={`text-lg font-bold ${theme == 'dark' ? 'text-white' : ''}`}>{item.email}</h1>
                        </section>
                        <section className={` ${theme == 'dark' ? "bg-[#323232]" : "bg-white"} w-[95%] rounded-3xl pl-4 py-[7px]  my-1`}>
                            <h1 className='text-sm text-[#a19999] font-semibold'>Mobile No. :</h1>
                            <h1 className={`text-lg font-bold ${theme == 'dark' ? 'text-white' : ''}`}>9359515989</h1>
                        </section>
                        <section className={` ${theme == 'dark' ? "bg-[#323232]" : "bg-white"} w-[95%] rounded-3xl pl-4 py-[7px]  my-1`}>
                            <h1 className='text-sm text-[#a19999] font-semibold'>Mobile No. :</h1>
                            <h1 className={`text-lg font-bold ${theme == 'dark' ? 'text-white' : ''}`}>{item.lname}</h1>
                        </section>
                    </div>
                    <div className=' w-[100%] min-[950px]:w-[70%] h-[100%] '>
                        <div className='w-[100%] flex min-[950px]:h-[27%] overflow-x-auto'>
                            <div className={`${theme == 'dark' ? " bg-black" : ""} w-[100%] min-[950px]:w-[40%] h-32 bg-[#f5f1f1] rounded-lg mx-3 flex`}>
                                <section className=' w-[60%] flex flex-col justify-center items-start p-3'>
                                    <h1 className=' text-3xl font-bold text-green-600'>{quecount}</h1>
                                    <h1 className={`${theme == "dark" ? "text-white" : ""} font-bold sm:text-lg `}>Problems Solved</h1>
                                    <h1 className='text-[#a19999] font-semibold'>80.00%</h1>
                                </section>
                                <section className='w-[40%] flex justify-center items-center'>
                                    <div className="radial-progress bg-green-600  border-4 border-green-600 text-white" style={{ "--value": 70 }}>70%</div>
                                </section>
                            </div>
                            <div className={`${theme == 'dark' ? " bg-black" : ""} w-[100%] min-[950px]:w-[40%] h-32 bg-[#f5f1f1] rounded-lg mr-3 flex`}>
                                <section className=' w-[60%] flex flex-col justify-center items-start p-3'>
                                    <h1 className=' text-3xl font-bold text-green-600'>{fque}</h1>
                                    <h1 className={`${theme == "dark" ? "text-white" : ""} font-bold sm:text-lg`}>Questions asked</h1>
                                    <h1 className='text-[#a19999] font-semibold'>80.00%</h1>
                                </section>
                                <section className='w-[40%] flex justify-center items-center'>
                                    <div className="radial-progress bg-green-600  border-4 border-green-600 text-white" style={{ "--value": 70 }}>70%</div>
                                </section>
                            </div>
                            <div className={`${theme == 'dark' ? " bg-black" : ""} w-[100%] min-[950px]:w-[40%] h-32 bg-[#f5f1f1] rounded-lg mr-3 flex`}>
                                <section className=' w-[60%] flex flex-col justify-center items-start p-3'>
                                    <h1 className=' text-3xl font-bold text-green-600'>{fans}</h1>
                                    <h1 className={`${theme == "dark" ? "text-white" : ""} font-bold sm:text-lg`}>Answres given</h1>
                                    <h1 className='text-[#a19999] font-semibold'>80.00%</h1>
                                </section>
                                <section className='w-[40%] flex justify-center items-center'>
                                    <div className="radial-progress bg-green-600  border-4 border-green-600 text-white" style={{ "--value": 70 }}>70%</div>
                                </section>
                            </div>
                        </div>

                        <div className={` ${theme == "dark" ? "bg-black" : "bg-[#f5f1f1]"}  w-[100%] sm:w-[96%] sm:h-[70%]  sm:mx-5 rounded-lg my-5 p-2 sm:p-5 overflow-y-auto `}>
                            <h1 className={` font-semibold ${theme == "dark" ? "text-white" : ""} `}>Latest ask questions of users</h1>
                            <div className=' flex flex-col items-center my-2 '>
                                {que?.map((item, index) => {
                                    return <section className={` ${theme == "dark" ? " bg-[#323232]" : "bg-white"} w-[90%] rounded-3xl py-[7px] my-[7px] `}>
                                        <section className=' flex justify-between px-4'>
                                            <h1 className={` ${theme == "dark" ? "text-white" : ""} font-bold `}>{item.heading}</h1>
                                            <h1 className={` ${theme == "dark" ? "text-white" : ""} font-semibold `}>{moment(item.timestamp).fromNow()}</h1>
                                        </section>
                                        <h1 className='px-4 text-[#a19999]'>{item.description}</h1>
                                    </section>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            })}


        </div>
    )
}

export default Profile