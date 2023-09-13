import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import themehook from './CodeContext'
import { BiCodeAlt } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import photo from '../assets/no_data.png'


function Profile() {
    const navigate = useNavigate()
    const { logedin, setlogedin, setcontextusername, setnavbar, theme } = themehook()
    const url = import.meta.env.VITE_BACKEND;

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

    return (
        <div onClick={handlenav} className=' h-[90vh]'>
            <div className=' flex items-center justify-between p-3 sm:p-5'>
                <h1 className=' font-bold sm:mx-12 sm:text-xl'>USER PROFILE</h1>
                <section className=' flex w-[50%] justify-center items-center '>
                    <form action="" onSubmit={handlesearch} className=' w-[100%]'>
                        <input type="text" required className={`${theme == "dark" ? "border-none focus:outline-none" : "border-2"}  px-4 py-1 w-[100%] rounded-full focus:outline-none `} placeholder='search here' />
                    </form>
                    <div className=' rounded-full bg-[#39A84B] group-hover:bg-[#C5E7CB] p-1 mx-5'>
                        <BiCodeAlt size={27} className=' text-white group-hover:text-[#39A84B]' />
                    </div>
                </section>
            </div>
            <div className=' flex flex-col sm:flex-row sm:h-[80vh] p-4 sm:p-5 justify-center'>
                <div className=' bg-[#f5f1f1] h-[100%] w-[100%] sm:w-[30%] rounded-xl flex items-center p-5 mb-4 sm:mb-0 flex-col'>
                    <div className=' rounded-full bg-black w-24 h-24 flex justify-center items-center '>
                        <CgProfile className='w-[90%] h-[90%]' color='white' />

                    </div>
                    <h1 className=' font-bold text-xl '>yash02</h1>
                    <button className=' w-[80%] px-3 py-1 bg-green-600 text-white rounded-3xl font-bold text-lg my-3'>Logout</button>
                    <section className=' w-[95%] rounded-3xl pl-4 py-[7px] bg-white my-1'>
                        <h1 className='text-sm text-[#a19999]'>Name:</h1>
                        <h1 className=' text-lg font-bold'>Yash Mulik</h1>
                    </section>
                    <section className=' w-[95%] rounded-3xl pl-4 py-[7px] bg-white my-1'>
                        <h1 className='text-sm text-[#a19999]'>Email:</h1>
                        <h1 className=' text-lg font-bold'>yashmulik95gmail.com</h1>
                    </section>
                    <section className=' w-[95%] rounded-3xl pl-4 py-[7px] bg-white my-1'>
                        <h1 className='text-sm text-[#a19999]'>Mobile No. :</h1>
                        <h1 className=' text-lg font-bold'>9359515989</h1>
                    </section>
                    <section className=' w-[95%] rounded-3xl pl-4 py-[7px] bg-white my-1'>
                        <h1 className='text-sm text-[#a19999]'>Mobile No. :</h1>
                        <h1 className=' text-lg font-bold'>9359515989</h1>
                    </section>
                </div>
                <div className=' w-[100%] sm:w-[70%] h-[100%] '>
                    <div className='w-[100%] flex sm:h-[27%] overflow-x-auto'>
                        <div className=' w-[100%] sm:w-[40%] h-32 bg-[#f5f1f1] rounded-lg sm:mx-3 flex'>
                            <section className=' w-[60%] flex flex-col justify-center items-start p-3'>
                                <h1 className=' text-3xl font-bold text-green-600'>104</h1>
                                <h1 className=' font-bold text-lg'>Problems Solved</h1>
                                <h1 className='text-[#a19999] '>80.00%</h1>
                            </section>
                            <section className='w-[40%] flex justify-center items-center'>
                                <div className="radial-progress bg-green-600  border-4 border-green-600 text-white" style={{ "--value": 70 }}>70%</div>
                            </section>
                        </div>
                        <div className=' w-[100%] sm:w-[40%] h-32 bg-[#f5f1f1] rounded-lg mx-3 flex'>
                            <section className=' w-[60%] flex flex-col justify-center items-start p-3'>
                                <h1 className=' text-3xl font-bold text-green-600'>104</h1>
                                <h1 className=' font-bold text-lg'>Problems Solved</h1>
                                <h1 className='text-[#a19999] '>80.00%</h1>
                            </section>
                            <section className='w-[40%] flex justify-center items-center'>
                                <div className="radial-progress bg-green-600  border-4 border-green-600 text-white" style={{ "--value": 70 }}>70%</div>
                            </section>
                        </div>
                        <div className=' w-[100%] sm:w-[40%] h-32 bg-[#f5f1f1] rounded-lg mx-3 flex'>
                            <section className=' w-[60%] flex flex-col justify-center items-start p-3'>
                                <h1 className=' text-3xl font-bold text-green-600'>104</h1>
                                <h1 className=' font-bold text-lg'>Problems Solved</h1>
                                <h1 className='text-[#a19999] '>80.00%</h1>
                            </section>
                            <section className='w-[40%] flex justify-center items-center'>
                                <div className="radial-progress bg-green-600  border-4 border-green-600 text-white" style={{ "--value": 70 }}>70%</div>
                            </section>
                        </div>
                    </div>

                    <div className=' bg-[#f5f1f1] w-[100%] sm:w-[96%] sm:h-[70%]  sm:mx-5 rounded-lg my-5 p-2 sm:p-5 overflow-y-auto'>
                        <h1 className=' font-semibold'>Latest ask questions of users</h1>
                        <div className=' flex flex-col items-center my-2 '>
                            <section className=' w-[90%] rounded-3xl py-[7px] bg-white my-[7px]'>
                                <section className=' flex justify-between px-4'>
                                    <h1 className=' font-bold'>Title of question</h1>
                                    <h1 className='font-semibold'>4 minutes ago</h1>
                                </section>
                                <h1 className='px-4 text-[#a19999]'>tgvdtr sxvtfx 7sfxtsfx fx6sfx6 sfx6sfx sx65sfx fxtsfx tsfx6tsx fxsfx fxfs65x  sfx6sfx6tsft fx65dx6asxt dr6xd6 d6xsx6d 7 vt6ftv6 ygys v7s 7yfx7s x76 tx7tsfx</h1>
                            </section>
                            <section className=' w-[90%] rounded-3xl py-[7px] bg-white my-[7px]'>
                                <section className=' flex justify-between px-4'>
                                    <h1 className=' font-bold'>Title of question</h1>
                                    <h1 className='font-semibold'>4 minutes ago</h1>
                                </section>
                                <h1 className='px-4 text-[#a19999]'>tgvdtr sxvtfx 7sfxtsfx fx6sfx6 sfx6sfx sx65sfx fxtsfx tsfx6tsx fxsfx fxfs65x  sfx6sfx6tsft fx65dx6asxt dr6xd6 d6xsx6d 7 vt6ftv6 ygys v7s 7yfx7s x76 tx7tsfx</h1>
                            </section>
                            <section className=' w-[90%] rounded-3xl py-[7px] bg-white my-[7px]'>
                                <section className=' flex justify-between px-4'>
                                    <h1 className=' font-bold'>Title of question</h1>
                                    <h1 className='font-semibold'>4 minutes ago</h1>
                                </section>
                                <h1 className='px-4 text-[#a19999]'>tgvdtr sxvtfx 7sfxtsfx fx6sfx6 sfx6sfx sx65sfx fxtsfx tsfx6tsx fxsfx fxfs65x  sfx6sfx6tsft fx65dx6asxt dr6xd6 d6xsx6d 7 vt6ftv6 ygys v7s 7yfx7s x76 tx7tsfx</h1>
                            </section>
                            <section className=' w-[90%] rounded-3xl py-[7px] bg-white my-[7px]'>
                                <section className=' flex justify-between px-4'>
                                    <h1 className=' font-bold'>Title of question</h1>
                                    <h1 className='font-semibold'>4 minutes ago</h1>
                                </section>
                                <h1 className='px-4 text-[#a19999]'>tgvdtr sxvtfx 7sfxtsfx fx6sfx6 sfx6sfx sx65sfx fxtsfx tsfx6tsx fxsfx fxfs65x  sfx6sfx6tsft fx65dx6asxt dr6xd6 d6xsx6d 7 vt6ftv6 ygys v7s 7yfx7s x76 tx7tsfx</h1>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile