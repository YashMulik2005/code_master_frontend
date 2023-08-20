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
    }, [theme,])

    return (
        <div className=' w-full'>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h1 className=' font-bold text-green-600 text-xl'>Ask new question</h1>
                    <div>
                        <input type='text' className={` w-full border-2 p-2 my-2 rounded-lg ${theme == 'dark' ? " focus:outline-none border-none" : ""}`} value={heading} placeholder='heading'
                            onChange={(e) => {
                                setheading(e.target.value)
                            }} />
                        <textarea cols={10} rows={5} className={`w-full border-2 p-2 my-2 rounded-lg ${theme == 'dark' ? " focus:outline-none border-none" : ""}`} value={desc} placeholder='description'
                            onChange={(e) => {
                                setdesc(e.target.value)
                            }}></textarea>
                        <textarea cols={10} rows={5} className={` w-full border-2 p-2 my-2 rounded-lg ${theme == 'dark' ? " focus:outline-none border-none" : ""}`} value={code} placeholder='code'
                            onChange={(e) => {
                                setcode(e.target.value)
                            }}></textarea>
                        <button className=' bg-green-600 text-white py-1 px-6 font-bold rounded-full' onClick={handleaskques}>Ask</button>
                    </div>
                </form>
            </dialog>
            <div className=' shadow-lg py-5 px-2 sm:p-5 flex justify-between sm:justify-between items-center'>
                <section className=' flex items-center'>
                    <GrCloudComputer size={30} />
                    <h1 className=' font-bold text-[#40513b] mx-2'><u>CODE MASTER</u></h1>
                </section>
                <section className='hidden sm:w-[50%] sm:flex justify-center'>
                    <input type="text" className={`${theme == "dark" ? "border-none focus:outline-none" : "border-2"}  px-4 py-1 w-[80%] rounded-full focus:outline-none `} placeholder='search here' />
                </section>
                <section className=' '>
                    {logedin ? <Link to={'/profile'}><section className=' flex justify-center items-center'>
                        <CgProfile size={33} className='' />
                        <h1 className=' font-bold'>{contextusername}</h1>
                    </section></Link> : <section>
                        {/* {
                            contextusername
                        } */}
                        <button className=' bg-green-600 text-white px-5 p-1 mx-1sm:mx-2 font-bold rounded-full'><Link to={'/auth/login'}>Login</Link></button>
                        <button className=' bg-green-600 text-white px-5 p-1 mx-1 sm:mx-2 font-bold rounded-full'><Link to={'/auth/signup'}>Sign up</Link></button>
                    </section>}

                </section>
            </div>
            <section className='sm:hidden flex justify-center m-4'>
                <input type="text" className=' border-2 px-4 py-1 w-[80%] rounded-full' placeholder="search here" />
            </section>

            <div className=' flex w-full p-2 sm:p-8'>
                <div className=' w-[100%] sm:w-[72%] '>
                    <div className=' flex justify-between items-center'>
                        <section className={` w-28 py-1 px-3 border-[1px] rounded-lg  ${theme == "dark" ? "bg-gray-950 border-none shadow-black shadow-md" : "shadow-lg"}`} >
                            <p className=' font-bold'>Latest First</p>
                        </section>
                        {theme == "light" ? <MdDarkMode size={33} onClick={handletheme} /> : <MdOutlineLightMode size={33} onClick={handletheme} />}
                    </div>
                    <div className='h-[80vh] overflow-y-auto m-1'>
                        {
                            (loading ? <div><QuestionSkeleton /><QuestionSkeleton /> <QuestionSkeleton /> <QuestionSkeleton /></div>
                                : data?.map((item, index) => {
                                    return <QuestionCard key={index} id={item._id} username={item.username} heading={item.heading} desc={item.description} code={item.code} time={item.timestamp} />
                                }))
                        }
                    </div>
                </div>
                <div className='hidden sm:block w-[30%] p-5 '>
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
                    <h1 className=' font-bold m-3'>Your Questions</h1>
                    <div>
                        {
                            (log ? <div className={` p-5 border-[1px] rounded-xl shadow-lg flex justify-center items-center ${theme == 'dark' ? "border-none bg-gray-950 shadow-black shadow-md" : "shadow-lg"}`}><h1 className=' font-bold text-green-600'>login to see post</h1></div> :
                                (loading2 ? <div><UserQuestionSkeleton /><UserQuestionSkeleton /><UserQuestionSkeleton /></div>
                                    : userque?.map((item, index) => {
                                        return <UserQuestionCard key={index} id={item._id} time={item.timestamp} heading={item.heading} />
                                    })))
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Forum