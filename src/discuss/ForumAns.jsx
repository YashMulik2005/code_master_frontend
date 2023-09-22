import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import themehook from '../components/CodeContext'
import { GrCloudComputer } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import moment from 'moment'
import UserQuestionCard from './UserQuestionCard'
import QuestionSkeleton from './QuestionSkeleton'
import AnsSkeleton from './AnsSkeleton'
import { ToastContainer, toast } from 'react-toastify'
import AnsCard from './AnsCard'
import UserQuestionSkeleton from './UserQuestionSkeleton'
import image from '../assets/no_data.png'
import { FaFreeCodeCamp } from 'react-icons/fa6'


function ForumAns() {
    const { id } = useParams()
    console.log(id);

    const { theme, contextusername, logedin } = themehook()
    const [qdata, setqdata] = useState()
    const [desc, setdesc] = useState("")
    const [code, setcode] = useState("")
    const [loading, setloading] = useState(false)
    const [loading2, setloading2] = useState(false)
    const [ans, setans] = useState()
    const [log, setlog] = useState();
    const [userans, setuserans] = useState()

    const url = import.meta.env.VITE_BACKEND;

    const handleaddans = async () => {
        const data = {
            q_id: id,
            description: desc,
            code: code,
            user: contextusername
        }

        const result = await axios.post(`${url}/discuss/addans`, { data: data })
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
            getans()
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

    const getans = async () => {
        const data = {
            "q_id": id
        }

        const result = await axios.post(`${url}/discuss/getans`, { data: data })
        console.log(result);
        setans(result.data.data.result)
        setloading2(false)
    }

    const getuserans = async () => {
        const data = {
            "username": contextusername
        }
        const result = await axios.post(`${url}/discuss/userans`, { data: data });
        console.log(result);
        if (result.data.data.Notlogin) {
            setlog(true)
        }
        else {
            setuserans(result.data.data.result)
        }
    }

    const getques = async () => {
        setloading(true)
        setloading2(true)
        const data = {
            "id": id
        }
        const result = await axios.post(`${url}/discuss/fullque`, { data: data })
        console.log(result);
        setqdata(result.data.data.result)
        setloading(false)
    }

    useEffect(() => {
        getques()
        getans()
        getuserans()
    }, [])

    return (
        <div>
            <div className=' sm:hidden bg-green-700 p-2 rounded-xl right-2 bottom-4 fixed' onClick={() => {
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
                <h1 className=' text-white font-bold'>Post ANS</h1>
            </div>

            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h1 className=' font-bold text-green-600 text-xl'>Ask new question</h1>
                    <div>
                        <textarea cols={10} rows={5} className={`w-full border-2 p-2 my-2 rounded-lg ${theme == 'dark' ? " bg-[#0c131d] focus:outline-none border-none " : "bg-[#f5f1f0] focus:outline-none"}`} value={desc} placeholder='description'
                            onChange={(e) => {
                                setdesc(e.target.value)
                            }}></textarea>
                        <textarea cols={10} rows={5} className={` w-full border-2 p-2 my-2 rounded-lg ${theme == 'dark' ? "bg-[#0c131d] focus:outline-none border-none " : "bg-[#f5f1f0] focus:outline-none"}`} value={code} placeholder='code'
                            onChange={(e) => {
                                setcode(e.target.value)
                            }}></textarea>
                        <button className='font-bold rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white' onClick={handleaddans}>Submit</button>
                    </div>
                </form>
            </dialog>


            <div className=' shadow-lg py-5 px-2 sm:p-3 flex justify-between sm:justify-between items-center'>
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
                <section className=' '>
                    {logedin ? <Link to={'/profile'}><section className=' flex justify-center items-center'>
                        <CgProfile size={33} className='' />
                        <h1 className=' font-bold'>{contextusername}</h1>
                    </section></Link> : <section>
                        {/* {
                            contextusername
                        } */}
                        <button className='   font-bold rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white'><Link to={'/auth/login'}>Login</Link></button>
                        <button className='  mx-2 font-bold rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white'><Link to={'/auth/signup'}>Sign up</Link></button>
                    </section>}
                </section>
            </div>


            <div className=' flex '>
                <div className=' w-[100%] sm:w-[75%] overflow-y-auto h-[90vh]'>
                    {loading ? <AnsSkeleton /> :
                        qdata?.map((item, index) => {
                            return <div className={`p-5 border-[1px]  m-4 rounded-lg ${theme == "dark" ? "bg-[#0c131d] border-none shadow-md shadow-[#090c10] " : " bg-[#f5f1f0] shadow-md"}`}>
                                <section>
                                    <section className=' flex items-center justify-center'>
                                        <section>
                                            <CgProfile size={44} />
                                        </section>
                                        <section className='flex flex-col w-[100%] '>
                                            <h1 className='mx-3 text-lg font-bold'>{contextusername}</h1>
                                            <h1 className='mx-3 text-sm'>{moment(item.timestamp).fromNow()}</h1>
                                            <hr className=' w-[100%] h-3 my-1' />
                                        </section>
                                    </section>

                                </section>
                                <section>
                                    <h1 className=' text-lg font-bold text-green-700'>{item.heading}</h1>
                                    <h1 className=' my-2'>{item.description}</h1>
                                    <pre><span className=' font-bold'>{item.code ? "code:-" : ""}</span>
                                        {item.code}</pre>
                                </section>
                            </div>
                        })}


                    <section className=' px-5 py-2'>
                        <h1 className=' font-bold'>Answers</h1>
                        <hr className=' w-[100%] h-3 my-1 font-bold' />
                    </section>

                    <div className='px-5'>
                        {(loading2 ? <div><QuestionSkeleton /> <QuestionSkeleton /> <QuestionSkeleton /></div> :
                            (ans?.length == 0 ? <div className=' flex justify-center'><img src={image} alt="" className=' w-[45%] h-[45%]' /></div> : ans?.map((item, index) => {
                                return <AnsCard key={index} id={item._id} username={item.username} desc={item.description} code={item.code} time={item.timestamp} />
                            }))
                        )}

                    </div>

                </div>


                <div className=' hidden sm:block w-[30%] p-5 overflow-y-auto h-[90vh] '>
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

                    <h1 className={`${theme == "light" ? "text-black" : "text-white"} font-bold m-3`}>Your Answer</h1>
                    <div>
                        {
                            (log ? <div className={` p-5 border-[1px] rounded-xl  flex justify-center items-center ${theme == 'dark' ? "border-none bg-[#0c151d] shadow-md" : "bg-[#f5f1f0] shadow-md"}`}><h1 className=' font-bold text-green-600'>login to see answers you posted.</h1></div> :
                                (loading2 ? <div><UserQuestionSkeleton /><UserQuestionSkeleton /><UserQuestionSkeleton /></div>
                                    : (userans?.length == 0 ? <div className={`${theme == "light" ? "bg-[#f5f1f0] border-[1px]" : "bg-[#0c131d]"} p-3 rounded-lg flex justify-center`}><h1 className=' font-semibold'>You hasn't post any answer yet.</h1></div> : userans?.map((item, index) => {
                                        return <UserQuestionCard key={index} id={item._id} time={item.timestamp} desc={item.description} />
                                    }))))
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ForumAns