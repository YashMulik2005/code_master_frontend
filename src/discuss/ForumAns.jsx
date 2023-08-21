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
                        <textarea cols={10} rows={5} className={`w-full border-2 p-2 my-2 rounded-lg ${theme == 'dark' ? " focus:outline-none border-none " : "focus:outline-none"}`} value={desc} placeholder='description'
                            onChange={(e) => {
                                setdesc(e.target.value)
                            }}></textarea>
                        <textarea cols={10} rows={5} className={` w-full border-2 p-2 my-2 rounded-lg ${theme == 'dark' ? " focus:outline-none border-none " : "focus:outline-none"}`} value={code} placeholder='code'
                            onChange={(e) => {
                                setcode(e.target.value)
                            }}></textarea>
                        <button className=' bg-green-600 text-white py-1 px-6 font-bold rounded-full' onClick={handleaddans}>Submit</button>
                    </div>
                </form>
            </dialog>


            <div className=' shadow-lg py-5 px-2 sm:p-3 flex justify-between sm:justify-between items-center'>
                <section className=' flex items-center'>
                    <GrCloudComputer size={30} />
                    <h1 className=' font-bold text-[#40513b] mx-2'><u>CODE MASTER</u></h1>
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


            <div className=' flex '>
                <div className=' w-[100%] sm:w-[75%] overflow-y-auto h-[90vh]'>
                    {loading ? <AnsSkeleton /> :
                        qdata?.map((item, index) => {
                            return <div className={`p-5 border-[1px] shadow-xl m-4 rounded-lg ${theme == "dark" ? "bg-gray-950 border-none shadow-black shadow-sm" : "shadow-lg"}`}>
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

                    <h1 className=' font-bold m-3'>Your Answer</h1>
                    <div>
                        {
                            (log ? <div className={` p-5 border-[1px] rounded-xl shadow-lg flex justify-center items-center ${theme == 'dark' ? "border-none bg-gray-950 shadow-black shadow-md" : "shadow-lg"}`}><h1 className=' font-bold text-green-600'>login to see post</h1></div> :
                                (loading2 ? <div><UserQuestionSkeleton /><UserQuestionSkeleton /><UserQuestionSkeleton /></div>
                                    : userans?.map((item, index) => {
                                        return <UserQuestionCard key={index} id={item._id} time={item.timestamp} desc={item.description} />
                                    })))
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ForumAns