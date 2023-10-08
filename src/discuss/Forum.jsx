import React, { useEffect, useState } from 'react'
import { GrCloudComputer } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import QuestionCard from './QuestionCard'
import UserQuestionCard from './UserQuestionCard'
import themehook from '../components/CodeContext'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import QuestionSkeleton from './QuestionSkeleton'
import UserQuestionSkeleton from './UserQuestionSkeleton'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom"
import image from '../assets/no_data.png'
import { FaFreeCodeCamp } from 'react-icons/fa6'

function Forum() {

    const { theme, settheme, logedin, contextusername } = themehook()
    const [data, setdata] = useState();
    const [userque, setuserque] = useState();
    const [log, setlog] = useState();
    const [loading, setloading] = useState(false)
    const [loading2, setloading2] = useState(false)
    const [heading, setheading] = useState("")
    const [desc, setdesc] = useState("")
    const [code, setcode] = useState("")
    const [search, setsearch] = useState("")
    const [suggetion, setsuggetion] = useState()

    const navigate = useNavigate()

    const url = import.meta.env.VITE_BACKEND;

    const handletheme = () => {
        if (theme == "light") {
            settheme("dark")
        }
        else {
            settheme("light")
        }
    }

    const handlesearch = async (e) => {
        e.preventDefault()
        setloading(true)
        const data = {
            "search": search
        }

        const result = await axios.post(`${url}/discuss/search`, { data: data });
        console.log(result);
        if (result.data.data.msg) {
            setdata(result.data.data.result)
        }
        else {
            setdata(result.data.data.result)
        }
        setloading(false)
    }

    const handlesearchchange = async (e) => {
        setsearch(e.target.value)
        const data = {
            "search": search
        }
        const result = await axios.post(`${url}/discuss/search`, { data: data });
        console.log(result);
        if (result.data.data.msg) {

        }
        else {
            setsuggetion(result.data.data.result)
        }
    }

    const handleaskques = async () => {
        const data = {
            "heading": heading,
            "description": desc,
            "code": code,
            "user": contextusername
        }

        const result = await axios.post(`${url}/discuss/add`, { data: data });
        console.log(result);
        if (result.data.data.success) {
            toast.warn("question posted sucessfully !!!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            getdata()
        }
        else {
            toast.warn("Something went wrong.. try again!!!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const getdata = async () => {
        setloading(true)
        setloading2(true)
        const result = await axios.get(`${url}/discuss/`);
        console.log(result.data.data.result);
        setdata(result.data.data.result)
        setloading(false)
    }

    const getuserque = async () => {
        const data = {
            "username": contextusername
        }
        const result = await axios.post(`${url}/discuss/userpost`, { data: data });
        console.log(result);
        if (result.data.data.Notlogin) {
            setlog(true)
        }
        else {
            setuserque(result.data.data.result)
        }
        setloading2(false)
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localtheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute("data-theme", localtheme)

        getdata()
        getuserque()
    }, [theme])

    return (
        <div className=' w-full'>
            <div className=' sm:hidden bg-green-700 p-2  rounded-xl right-2 bottom-4 fixed' onClick={() => {
                if (logedin) {
                    window.my_modal_3.showModal()
                } else {
                    toast.warn("Login first to ask a question", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }}>
                <h1 className=' text-white font-bold'>Ask Question</h1>
            </div>

            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h1 className=' font-bold text-green-600 text-xl'>Ask new question</h1>
                    <div>
                        <input type='text' className={` w-full border-2 p-2 my-2 rounded-lg ${theme == 'dark' ? "bg-[#0c131d]  focus:outline-none border-none" : "bg-[#f5f1f0]"}`} value={heading} placeholder='heading'
                            onChange={(e) => {
                                setheading(e.target.value)
                            }} />
                        <textarea cols={10} rows={5} className={`w-full border-2 p-2 my-2 rounded-lg ${theme == 'dark' ? "bg-[#0c131d] focus:outline-none border-none" : "bg-[#f5f1f0]"}`} value={desc} placeholder='description'
                            onChange={(e) => {
                                setdesc(e.target.value)
                            }}></textarea>
                        <textarea cols={10} rows={5} className={` w-full border-2 p-2 my-2 rounded-lg ${theme == 'dark' ? "bg-[#0c131d] focus:outline-none border-none" : "bg-[#f5f1f0]"}`} value={code} placeholder='code'
                            onChange={(e) => {
                                setcode(e.target.value)
                            }}></textarea>
                        <button className=' font-bold rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white' onClick={handleaskques}>Ask</button>
                    </div>
                </form>
            </dialog>


            <div className=' shadow-lg py-5 px-2 sm:p-5 flex justify-between sm:justify-between items-center'>
                <section>
                    <section className=' flex items-center justify-center'>
                        <h1 className={` ${theme == "dark" ? "text-white" : ""} font-bold text-lg `}>Code</h1>
                        <section>
                            <FaFreeCodeCamp size={35} className={` ${theme == "light" ? "text-green-700" : "text-green-500"} mx-[2px] font-bold  `} />
                        </section>
                        <h1 className={` ${theme == "dark" ? "text-white" : ""} font-bold text-lg `}>Master</h1>
                    </section>
                    {/* <section className=' flex  items-center justify-center mt-[-7px]'>
                        <hr className={` ${theme == "light" ? "border-black" : "border-white"} w-8 border-t-2  `} />
                        <h1 className={` ${theme == "light" ? "text-green-700" : "text-green-500"} text-[12px] mx-[2px] font-semibold`}>learn with fun</h1>
                        <hr className={` ${theme == "light" ? "border-black" : "border-white"} w-8 border-t-2  `} />
                    </section> */}
                </section>
                <section className='hidden sm:w-[50%] sm:flex justify-center relative'>
                    <div className="w-[100%]">
                        <form action="" onSubmit={handlesearch} className=' w-[80%]'>
                            <input type="text" value={search} onChange={handlesearchchange} required className={`${theme == "dark" ? "border-none focus:outline-none" : " bg-[#f5f1f0]"}  px-4 py-[6px] w-[100%] rounded-full focus:outline-none `} placeholder='search here' />
                        </form>
                        <div className=' hidden absolute max-h-32 border-2 w-[80%] my-3 rounded-lg shadow-lg bg-white overflow-y-auto'>
                            {suggetion?.map((item, index) => {
                                return <div className=' p-3'>
                                    <p>{item.heading}</p>
                                </div>
                            })
                            }
                        </div>
                    </div>
                </section>
                <section className=' '>
                    {logedin ? <Link to={'/profile'}><section className={` ${theme == "light" ? "text-black" : "text-white"} font-bold flex justify-center items-center `} >
                        <CgProfile size={33} className='' />
                        <h1 className="">{contextusername}</h1>
                    </section></Link> : <section>
                        {/* {
                            contextusername
                        } */}
                        <button className='  font-bold rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-[#e9ffed] hover:text-white'><Link to={'/auth/login'}>Login</Link></button>
                        <button className='  mx-2 font-bold rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-[#e9ffed] hover:text-white'><Link to={'/auth/signup'}>Sign up</Link></button>
                    </section>}

                </section>
            </div>


            <section className='sm:hidden m-4'>
                <form action="" onSubmit={handlesearch} className=' w-[100%] flex justify-center'>
                    <input type="text" onChange={handlesearchchange} className={` ${theme == "dark" ? "border-none focus:outline-none" : "border-2"} border-2 px-4 py-1 w-[80%] rounded-full `} placeholder="search here" />
                </form>
            </section>

            <div className=' flex w-full p-2 sm:p-8'>
                <div className=' w-[100%] sm:w-[72%] '>
                    <div className=' flex justify-between items-center'>
                        <section className={` w-28 py-1 px-3  rounded-lg  ${theme == "dark" ? " bg-[#0c131d] border-none shadow-[#0c131d] shadow-md" : "bg-[#f5f1f0]"}`} >
                            <p className={`${theme == "light" ? "text-black" : "text-white"} font-semibold`}>Latest First</p>
                        </section>
                        {theme == "light" ? <MdDarkMode size={33} onClick={handletheme} /> : <MdOutlineLightMode size={33} onClick={handletheme} />}
                    </div>
                    <div className='h-[82vh] overflow-y-auto m-1'>
                        {
                            (loading ? <div><QuestionSkeleton /><QuestionSkeleton /> <QuestionSkeleton /> <QuestionSkeleton /></div>
                                : (data?.length == 0 ? <div className=' flex justify-center'><img src={image} alt="" className=' w-[45%] h-[45%]' /></div> : data?.map((item, index) => {
                                    return <QuestionCard key={index} id={item._id} username={item.username} heading={item.heading} desc={item.description} code={item.code} time={item.timestamp} />
                                })))
                        }
                    </div>
                </div>


                <div className='hidden sm:block w-[30%] p-5 overflow-y-auto h-[90vh] '>
                    <div className='flex flex-col items-center'>
                        <section onClick={() => {
                            if (logedin) {
                                window.my_modal_3.showModal()
                            } else {
                                toast.warn("Login first to ask a question", {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });
                            }
                        }} className={` flex justify-center bg-green-600 shadow-lg ${theme == 'dark' ? "" : "shadow-green-200"} text-white py-1 px-3 w-[70%] font-bold rounded-lg`}>
                            <p>Ask new question</p>
                        </section>
                    </div>
                    <h1 className={`${theme == "light" ? "text-black" : "text-white"} font-bold m-3`}>Your Questions</h1>
                    <div>
                        {
                            (log ? <div className={` p-5 border-[1px] rounded-xl  flex justify-center items-center ${theme == 'dark' ? "border-none bg-[#0c151d] shadow-md" : "bg-[#f5f1f0] shadow-md"}`}><h1 className=' font-bold text-green-600'>login to see questions you posted.</h1></div> :
                                (loading2 ? <div><UserQuestionSkeleton /><UserQuestionSkeleton /><UserQuestionSkeleton /></div>
                                    : (userque?.length == 0 ? <div className={`${theme == "light" ? "bg-[#f5f1f0] border-[1px]" : "bg-[#0c131d]"} p-3 rounded-lg flex justify-center`}><h1 className=' font-semibold'>You hasn't post any question yet.</h1></div> : userque?.map((item, index) => {
                                        return <UserQuestionCard key={index} id={item._id} time={item.timestamp} heading={item.heading} />
                                    }))))
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Forum