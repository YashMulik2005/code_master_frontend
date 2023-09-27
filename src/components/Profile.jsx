import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import themehook from './CodeContext'
import { BiCodeAlt } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import photo from '../assets/no_data.png'
import psprofile from '../assets/psprofile.png'
import qpprofile from '../assets/qpprofile.png'
import approfile from '../assets/approfile.png'
import moment from 'moment'
import Profileskeleton from './Profileskeleton'
import { MdCancel } from 'react-icons/md'
import { BiSolidUserCircle } from 'react-icons/bi'
import { ClipLoader } from 'react-spinners'


function Profile() {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate()
    const { logedin, setlogedin, setcontextusername, contextusername, setnavbar, theme } = themehook()
    const url = import.meta.env.VITE_BACKEND;
    const [user, setuser] = useState()
    const [fque, setfque] = useState()
    const [fans, setfans] = useState()
    const [que, setque] = useState()
    const [quecount, setquecount] = useState()
    const [loading, setloading] = useState(false)
    const [search, setsearch] = useState()
    const [searchdata, setsearchdata] = useState()
    const [searchloader, setsearchloader] = useState(false)
    const [searchbox, setsearchbox] = useState(false)

    const handlelogout = async () => {
        localStorage.removeItem("username");
        setlogedin(false)
        setcontextusername("")
        navigate("/")
    }

    const handlenav = () => {
        setnavbar(false)
    }

    const handlesearch = async (e) => {
        e.preventDefault()
        setsearchloader(true)
        setsearchbox(true)
        const result = await axios.post(`${url}/user/search`, { search: search })
        console.log(result.data.data.result)
        setsearchdata(result.data.data.result)
        setsearchloader(false)
    }

    const getdata = async () => {
        setsearchbox(false)
        setloading(true)
        setsearch("")
        if (id == undefined) {
            const result = await axios.post(`${url}/user/profile`, { username: contextusername })
            // setfans(result.data.fans)
            console.log(result);
            setfans(result.data.data.fans);
            setfque(result.data.data.fque);
            setquecount(result.data.data.quecount)
            setque(result.data.data.que);
            setuser(result.data.data.user);
        }
        else {
            const result = await axios.post(`${url}/user/profile`, { username: id })
            // setfans(result.data.fans)
            console.log(result);
            setfans(result.data.data.fans);
            setfque(result.data.data.fque);
            setquecount(result.data.data.quecount)
            setque(result.data.data.que);
            setuser(result.data.data.user);
        }
        setloading(false)
    }
    useEffect(() => {
        getdata()
    }, [id])

    return (
        <div onClick={handlenav} className=' h-[95vh]'>
            <div className=' flex flex-col sm:flex-row items-center justify-between p-3 sm:p-5'>
                <h1 className=' font-bold sm:mx-12 sm:text-xl'>USER PROFILE</h1>
                <section className=' flex my-2 sm:my-0  w-[100%] sm:w-[50%] justify-center items-center '>
                    <section className=' relative w-[100%]'>
                        <form action="" onSubmit={handlesearch} className=' w-[100%]'>
                            <input type="text" required onChange={(e) => {
                                setsearch(e.target.value)
                            }} value={search} className={`${theme == "dark" ? "border-none focus:outline-none bg-[#0c131d]" : "border-2"}  px-4 py-[6px] w-[100%] rounded-full focus:outline-none `} placeholder='search username' />
                        </form>
                        <section className={` overflow-y-auto p-3 ${searchbox == true ? "block" : "hidden"} z-10 ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} absolute max-h-48 w-[100%] top-12 rounded-md`}>
                            <section className='flex justify-between'>
                                <h1>result</h1>
                                <MdCancel size={20} onClick={() => {
                                    setsearchbox(false)
                                }} />
                            </section>
                            {
                                searchloader ? <section className=' flex justify-center items-center'><ClipLoader size={30} color='green' /></section> :
                                    searchdata?.length == 0 ? <section><h1 className=' font-bold text-center m-2'>No such user found</h1></section> :
                                        searchdata?.map((item, index) => {
                                            return <section key={index} className={` flex ${theme == "light" ? "bg-[#ffffff]" : "bg-[#1c232b]"} rounded-md py-1 px-3 my-2`}>
                                                <Link to={`/profile/${item.username}`} className='flex'>
                                                    <BiSolidUserCircle size={30} />
                                                    <h1 className=' ml-2'>{item.username}</h1>
                                                </Link>
                                            </section>
                                        })
                            }

                        </section >
                    </section>
                    <div className=' hidden sm:block rounded-full bg-[#39A84B] group-hover:bg-[#090909] p-1 mx-5'>
                        <BiCodeAlt size={27} className=' text-white group-hover:text-[#39A84B]' />
                    </div>
                </section>
            </div>

            {(loading ? <Profileskeleton /> :
                user?.map((item, index) => {
                    return <div className=' relative flex flex-col min-[950px]:flex-row min-[950px]:h-[87vh] p-4 sm:p-5 justify-center'>

                        <div className={`${theme == "light" ? "bg-[#f5f1f0] " : "bg-[#0c131d]"}  h-[100%] w-[100%] min-[950px]:w-[30%] rounded-xl flex items-center p-5 mb-4 min-[950px]:mb-0 flex-col`}>
                            <div className=' rounded-full bg-black w-24 h-24 flex justify-center items-center '>
                                <CgProfile className='w-[90%] h-[90%]' color='white' />

                            </div>
                            <h1 className={`${theme == "light" ? " " : "text-white"} font-bold text-xl `}>{item.username}</h1>
                            <button className={` ${contextusername == item.username ? "block" : "hidden"} w-[80%] px-3 py-1 bg-green-600 text-white rounded-3xl font-bold text-lg my-3 `} onClick={handlelogout}>Logout</button>
                            <section className={` ${theme == "dark" ? "bg-[#1c232b]" : "bg-white"} w-[95%] rounded-3xl pl-4 py-[7px]  my-1`}>
                                <h1 className='text-sm text-[#a19999] font-semibold'>First Name:</h1>
                                <h1 className={`text-lg font-bold ${theme == 'dark' ? 'text-white' : ''}`}>{item.fname}</h1>
                            </section>
                            <section className={` ${theme == 'dark' ? "bg-[#1c232b]" : "bg-white"} w-[95%] rounded-3xl pl-4 py-[7px]  my-1`}>
                                <h1 className='text-sm text-[#a19999] font-semibold'>Last Name:</h1>
                                <h1 className={`text-lg font-bold ${theme == 'dark' ? 'text-white' : ''}`}>{item.lname}</h1>
                            </section>
                            <section className={` ${theme == 'dark' ? "bg-[#1c232b]" : "bg-white"} w-[95%] rounded-3xl pl-4 py-[7px]  my-1`}>
                                <h1 className='text-sm text-[#a19999] font-semibold'>Email:</h1>
                                <h1 className={`text-lg font-bold ${theme == 'dark' ? 'text-white' : ''}`}>{item.email}</h1>
                            </section>
                            <section className={` ${theme == 'dark' ? "bg-[#1c232b]" : "bg-white"} w-[95%] rounded-3xl pl-4 py-[7px]  my-1`}>
                                <h1 className='text-sm text-[#a19999] font-semibold'>Mobile No. :</h1>
                                <h1 className={`text-lg font-bold ${theme == 'dark' ? 'text-white' : ''}`}>9359515989</h1>
                            </section>

                        </div>
                        <div className=' w-[100%] min-[950px]:w-[70%] h-[100%] '>
                            <div className='w-[100%] flex min-[950px]:flex-row flex-col min-[950px]:h-[27%] min-[950px]:ml-4'>
                                <div className={`${theme == 'dark' ? " bg-[#0c131d]" : "bg-[#f5f1f0]"} w-[100%] min-[950px]:w-[40%] h-32 min-[950px]:my-0 my-4 rounded-lg mr-3 flex`}>
                                    <section className=' w-[50%] flex flex-col justify-center items-start p-3'>
                                        <h1 className=' text-3xl font-bold text-green-600'>{quecount}</h1>
                                        <h1 className={`${theme == "dark" ? "text-white" : ""} font-bold sm:text-lg `}>Problems Solved</h1>
                                        <h1 className='text-[#a19999] font-semibold'>80.00%</h1>
                                    </section>
                                    <section className='w-[50%] flex justify-center items-center '>
                                        <img src={psprofile} alt="" className=' w-full h-full' />
                                    </section>
                                </div>
                                <div className={`${theme == 'dark' ? " bg-[#0c131d]" : "bg-[#f5f1f0]"} w-[100%] min-[950px]:w-[40%] h-32 min-[950px]:my-0 my-4 rounded-lg mr-3 flex`}>
                                    <section className=' w-[50%] flex flex-col justify-center items-start p-3'>
                                        <h1 className=' text-3xl font-bold text-green-600'>{fque}</h1>
                                        <h1 className={`${theme == "dark" ? "text-white" : ""} font-bold sm:text-lg`}>Questions Posted</h1>
                                        <h1 className='text-[#a19999] font-semibold'>80.00%</h1>
                                    </section>
                                    <section className='w-[50%] flex justify-center items-center'>
                                        <img src={qpprofile} alt="" className=' w-full h-full' />
                                    </section>
                                </div>
                                <div className={`${theme == 'dark' ? " bg-[#0c131d]" : "bg-[#f5f1f0]"} w-[100%] min-[950px]:w-[40%] h-32 min-[950px]:my-0 my-4  rounded-lg mr-3 flex`}>
                                    <section className=' w-[50%] flex flex-col justify-center items-start p-3'>
                                        <h1 className=' text-3xl font-bold text-green-600'>{fans}</h1>
                                        <h1 className={`${theme == "dark" ? "text-white" : ""} font-bold sm:text-lg`}>Answers Posted</h1>
                                        <h1 className='text-[#a19999] font-semibold'>80.00%</h1>
                                    </section>
                                    <section className='w-[50%] flex justify-center items-center'>
                                        <img src={approfile} alt="" className=' w-full h-full' />
                                    </section>
                                </div>
                            </div>

                            <div className={` ${theme == "dark" ? "bg-[#0c131d]" : "bg-[#f5f1f0]"}  w-[100%] sm:w-[96%] sm:h-[70%]  sm:mx-5 rounded-lg my-5 p-2 sm:p-5 overflow-y-auto `}>
                                <h1 className={` font-semibold ${theme == "dark" ? "text-white" : ""} `}>Latest ask questions of users</h1>
                                <div className=' flex flex-col items-center my-2 '>
                                    {
                                        que.length == 0 ? <div className={` ${theme == "dark" ? " bg-[#1c232b]" : "bg-white"} w-[90%] rounded-xl p-[10px] my-[7px] text-center `}>
                                            <h1 className=' text-md font-bold'>You hasn't post any question.</h1>
                                        </div> :
                                            que?.map((item, index) => {
                                                return <section className={` ${theme == "dark" ? " bg-[#1c232b]" : "bg-white"} w-[90%] rounded-3xl py-[7px] my-[7px] `}>
                                                    <section className=' flex justify-between px-4'>
                                                        <h1 className={` ${theme == "dark" ? "text-white" : ""} font-bold `}>{item.heading}</h1>
                                                        <h1 className={` ${theme == "dark" ? "text-white" : ""} font-semibold `}>{moment(item.timestamp).fromNow()}</h1>
                                                    </section>
                                                    <h1 className='px-4 text-[#a19999]'>{item.description}</h1>
                                                </section>
                                            })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={` ${searchbox == true ? "block" : "hidden"} absolute m-0 left-0 top-0 h-[100%] min-[950px]:h-[90vh] w-[100%] ${theme == "light" ? " bg-gray-400/30" : " bg-black/70"} backdrop:md  `}></div>

                    </div>

                }))}


        </div>
    )
}

export default Profile