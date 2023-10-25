import React, { useEffect, useState } from 'react'
import themehook from '../components/CodeContext'
import axios from 'axios'
import { Link, useParams, useNavigate } from "react-router-dom"
import { FaFreeCodeCamp } from 'react-icons/fa6'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { IoMdCheckmarkCircle, IoMdTennisball } from 'react-icons/io'
import { BarLoader } from 'react-spinners'

function Topicdata() {
    const { topic_id, theme, course_id, contextusername, setnavbar, settheme, index, setindex } = themehook()
    const { id } = useParams();
    // console.log(topic_id)
    const [data, setdata] = useState([])
    const [topicdata, settopicdata] = useState([])
    const [question1, setquestion1] = useState("")
    const [question2, setquestion2] = useState("")
    const [ansstatus, setansstatus] = useState(false)
    const [border1, setborder1] = useState(false)
    const [border2, setborder2] = useState(false)
    const [title, settitle] = useState("")
    const [note, setnote] = useState("")
    const [topictrack, settopictrack] = useState({})
    const [selectedtopic, setselectedtopic] = useState(topic_id)
    const [loading, setloading] = useState(false)
    const url = import.meta.env.VITE_BACKEND;

    const navigate = useNavigate()
    const handlenav = () => {
        setnavbar(false)
    }

    const handletheme = () => {
        if (theme == "light") {
            settheme("dark")
        }
        else {
            settheme("light")
        }
    }

    const getdata = async () => {
        setloading(true)
        if (topic_id == undefined) {
            console.log("login and enroll to course to see course modules");
        } else {
            const data = {
                "t_id": selectedtopic
            }
            const result = await axios.post(`${url}/course/singletopic`, { data: data })
            console.log(result);
            setdata(result.data.data.result)
        }
    }

    const gettopicdata = async () => {
        const data = {
            "c_id": id,
            "username": contextusername
        }
        const result = await axios.post(`${url}/course/t`, { data: data })
        console.log(result.data.data);
        settopicdata(result.data.data.course_data.c_data);
        settopictrack(result.data.data.course_data.track);
        setloading(false)
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        if (question1 == data?.ans1 && question2 == data?.ans2) {
            setansstatus(true)
            setborder1(false)
            setborder2(false)
            const data = {
                "u_id": contextusername,
                "t_id": selectedtopic,
                "c_id": course_id
            }
            const result = await axios.post(`${url}/course/topiccomplete`, { data: data })
            if (result.data.data.success) {
                settitle("Right!!!!")
                setnote("Both answers are right and module is complete.")
                window.my_modal_3.showModal()
            }
            else {
                settitle("Error!!!!")
                setnote("Something went wrong try again.")
                window.my_modal_3.showModal()
            }
        }
        else {
            if (question1 != data?.ans1 && question2 == data?.ans2) {
                setansstatus(false)
                setborder1(true)
                setborder2(false)
                console.log("q1 r");
            }
            else if (question1 == data?.ans1 && question2 != data?.ans2) {
                setansstatus(false)
                setborder1(false)
                setborder2(true)
                console.log("q2 r");
            }
            else {
                setansstatus(false)
                setborder1(true)
                setborder2(true)
                console.log("both w");
            }
        }
        setquestion1("")
        setquestion2("")
    }

    const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = 'If you reload the page will become non-functional.'; // This is required for Chrome to show a custom message
    };

    useEffect(() => {
        getdata()
        gettopicdata()
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [selectedtopic])

    return (
        <div className=" " onClick={handlenav}>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-2xl text-green-600">{title}</h3>
                    <p className="py-4 text-xl">{note}</p>
                    <button className={` ${ansstatus ? "" : "hidden"} bg-green-600 py-1 px-4 rounded-xl text-white font-semibold `} onClick={() => {
                        if (index + 1 == topicdata.length) {
                            navigate(`/course/${id}`)
                        }
                        else {
                            setindex(index + 1)
                            console.log(topicdata[index]._id);
                            setselectedtopic(topicdata[index + 1]._id)
                        }
                    }}>Next Module</button>
                </form>
            </dialog>
            <div className='max-[666px]:hidden  p-2 px-4 flex justify-between items-center shadow-md'>
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
                <section className=' cursor-pointer' onClick={handletheme}>{theme == 'light' ? <MdDarkMode size={27} /> : <MdOutlineLightMode size={27} />}
                </section>
            </div>

            <div className='flex max-[730px]:flex-col flex-row '>

                <div className='w-[100%] min-[730px]:w-[25%] min-[730px]:h-[92vh] p-3 flex flex-col max-[730px]:flex-row'>
                    <h1 className={` font-bold text-xl ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} inline-block min-[720px]:inline max-[730px]:w-32 max-[730px]:h-16 p-[6px] rounded-lg`}>Topic list</h1>
                    <ul className=' flex flex-col max-[730px]:flex-row'>
                        {
                            topicdata?.map((item, index) => {
                                return <li key={index} className={`${item._id == selectedtopic ? `font-bold ${theme == "light" ? "text-black" : "text-white"}` : ""} ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"} py-[5px] px-[6px] my-2 rounded-md flex items-center justify-between`} onClick={() => {
                                    setselectedtopic(item._id)
                                    setindex(index)
                                }}>{item.name1} <span className={`${item._id == topictrack[item._id] ? "" : " hidden"} font-bold text-green-600`}><IoMdCheckmarkCircle size={25} /></span></li>
                            })
                        }
                    </ul>
                </div>
                {
                    loading ? <div className=' flex justify-center items-center w-[100%] '><BarLoader color='green' /></div> :
                        <div className='p-3 sm:p-5 w-[100%] min-[730px]:w-[75%] min-[720px]:h-[92vh] overflow-y-auto '>
                            <h1 className='text-xl sm:text-3xl font-bold text-green-600 my-2'>{data.name1}</h1>
                            <p className=' text-md sm:text-lg'>{data.description1}</p>
                            <h1 className=' text-xl sm:text-3xl font-bold text-green-600 my-2'>{data.name2}</h1>
                            <p className=' text-md sm:text-lg'>{data.description2}</p>
                            <div >
                                {/* {("kayword variable_name = value;" == item.syntax ? console.log("yes") : console.log("no"))} */}
                                <h1 className=' text-lg text-green-600 font-bold my-2'>Syntex</h1>
                                <pre className={` ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} p-4  my-3 rounded-md overflow-x-auto`}>{data.syntax}</pre>
                            </div>
                            <div className=' relative'>
                                <button className=' absolute right-4 top-2'>copy</button>
                                <h1 className=' text-lg text-green-600 font-bold my-2'>Example</h1>
                                <pre className={` ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} p-4 my-3 rounded-md overflow-x-auto`}>{data.example}</pre>
                            </div>
                            <div className={` ${theme == "light" ? "bg-[#f5f1f0]" : " bg-[#0c131d]"} text-lg font-semibold my-5 rounded-md p-5`}>
                                <h1 className=' text-center text-2xl my-4 text-green-600'>Answers following questions to complete module.</h1>
                                <form className=' p-3'>
                                    <label className=' my-2 text-md'>Question 1: {data.question1}</label><br />
                                    <input type='text' className={` ${border1 ? "border-2 border-red-800" : "border-0"} w-[100%] p-2 px-4 rounded outline-none my-3`} value={question1} onChange={(e) => {
                                        setquestion1(e.target.value)
                                        setborder1(false)
                                    }}></input><br />
                                    <label className=' my-2 text-md'>Question 2: {data.question2}</label><br />
                                    <input type='text' className={` ${border2 ? "border-2 border-red-800" : "border-0"} w-[100%] p-2 px-4 rounded outline-none my-3`} value={question2} onChange={(e) => {
                                        setquestion2(e.target.value)
                                        setborder2(false)
                                    }}></input>
                                    <input type='submit' className=' border-[1px] border-gray-400 py-[2px] px-5 rounded-3xl text-md hover:bg-green-600 hover:text-white hover:border-none' onClick={handlesubmit} />
                                </form>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Topicdata