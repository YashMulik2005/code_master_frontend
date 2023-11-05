import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import themehook from '../components/CodeContext'
import axios from 'axios'
import photo from '../assets/course.png'
import { BarLoader } from 'react-spinners'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { AiFillCaretRight } from 'react-icons/ai'
import { toast, Toaster } from 'react-hot-toast'

function Coursetopic() {
    const { id } = useParams()
    console.log(id);
    const { contextusername, logedin, settopic_id, setcourse_id, setnavbar, theme, index, setindex } = themehook()
    const navigate = useNavigate()
    const [data, setdata] = useState([])
    const [track, settrack] = useState({})
    const [topic, settopic] = useState()
    const [topictrack, settopictrack] = useState({})
    const [loader, setloader] = useState(false)
    const [enroll, setenroll] = useState()
    const url = import.meta.env.VITE_BACKEND;


    const getdata = async () => {
        setloader(true)
        // console.log('function');
        const data = {
            "c_id": id,
            "username": contextusername
        }
        const result = await axios.post(`${url}/course/topic`, { data: data })
        console.log(result.data.data.course_data);
        setdata(result.data.data.course_data.c_data);
        settrack(result.data.data.course_data.track)
        setloader(false)
    }
    const gettopicdata = async () => {
        setloader(true)
        // console.log('function');
        const data = {
            "c_id": id,
            "username": contextusername
        }
        const result = await axios.post(`${url}/course/t`, { data: data })
        console.log(result.data.data);
        settopic(result.data.data.course_data.c_data);
        settopictrack(result.data.data.course_data.track)
        setloader(false)
    }

    const handleenroll = async () => {
        if (!logedin) {
            toast.error("Login first to enroll in course.");
        }
        else {
            // console.log("enroll");
            const data = {
                "username": contextusername,
                "c_id": id
            }
            const result = await axios.post(`${url}/course/enroll`, { data: data });
            console.log(result)
            if (result.data.data.success) {
                setenroll(true)
            }
            else {
                toast.error("Something went wrong try again.");
            }
        }
    }

    // const handletopic = (id) => {
    //     console.log("topic");
    //     if (data[0].id != track[data[0].id]) {
    //         toast.warn("First enroll to the course.", {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //     }
    //     else {
    //         settopic_id(id)
    //         navigate("/course/topic")
    //     }
    // }
    const handlenav = () => {
        setnavbar(false)
    }

    useEffect(() => {

        getdata()
        gettopicdata()
    }, [enroll, contextusername])

    return (
        <div onClick={handlenav} className=' min-h-[95vh]'>
            {(loader ? <section className=" flex justify-center h-[75vh] items-center" ><BarLoader size={50} color='green' /></section> :
                <div className="">
                    <div className={` ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} flex p-2 min-[760px]:h-[32vh] justify-center items-center shadow-lg`}>
                        <div className=' hidden  sm:flex w-[25%] h-[100%] pt-3'>
                            <img src={photo} alt="" className=' w-[100%] h-[100%] ' />
                        </div>


                        <div className='w-[100%] sm:w-[75%] sm:p-2' >
                            <h1 className='text-xl sm:text-3xl text-green-600 font-bold'>{data.name}</h1>
                            <p className=' text-md font-semibold'>{data.description}</p>
                            <h1 className=' font-bold'>modules:{data.modules}</h1>
                            {

                                (Object.keys(topictrack).length == data.modules ? <button className={`${theme == "light" ? "bg-[#ffffff]" : "bg-[#1c232b]"} m-2 ml-0 px-4 py-[6px] rounded-md font-semibold`}>Complete</button> :
                                    (
                                        (data?._id == track[data._id] ? <button className={`  py-[4px] px-3 bg-green-600 rounded-3xl text-white font-semibold m-2 ml-0`}>continue</button> : <button onClick={handleenroll} className={` border-[1px] py-[6px] px-5 rounded-3xl hover:bg-green-600 hover:text-white hover:border-none font-semibold m-2 ml-0 `} >Enroll for free</button>)
                                    )
                                )
                            }
                        </div>

                    </div>
                    <div className='py-3 sm:p-6 flex justify-center'>
                        <table className='border-collapse w-[90%] '>
                            <thead>
                                <tr className=' bg-green-700'>
                                    <th className='p-3 py-3 text-left text-white text-lg'>Index</th>
                                    <th className='p-3 text-left py-3 text-white text-lg'>Name</th>
                                    <th className='p-3 text-left py-3 text-white text-lg'>Duration</th>
                                    <th className='p-3 text-left py-3 text-white text-lg'>Status</th>
                                </tr>
                            </thead>
                            {
                                topic?.map((item, index) => {
                                    return <tr className={` ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"}  hover:border-b-0 border-b border-slate-500`} key={index}>
                                        <td className=' p-3 font-semibold text-left text-sm sm:text-md'>{index + 1}</td>
                                        <td className=' p-3 font-semibold text-left text-green-600  text-sm sm:text-md'>{item.name1}</td>
                                        <td className=' p-3 font-semibold text-left  text-sm sm:text-md'>{item.name2}</td>
                                        <td className=' p-3 font-semibold text-left'>{(item._id == topictrack[item._id] ? <section className=" flex items-center"><buttton className=" font-bold">Complete</buttton> <IoMdCheckmarkCircle size={20} className=' mx-1 text-green-600' /> </section>
                                            : <section className=" flex items-center" onClick={() => {
                                                console.log("topic");
                                                if (data._id != track[data._id]) {
                                                    toast.error("First enroll to the course");
                                                }
                                                else {
                                                    settopic_id(item._id)
                                                    setcourse_id(id)
                                                    setindex(index)
                                                    navigate(`/course/topic/${id}`)
                                                }
                                            }}><buttton className=" font-bold">Start</buttton> <AiFillCaretRight size={20} className=' mx-1 text-green-600' /> </section>)}</td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>

                </div>
            )}
            <Toaster />
        </div>
    )
}

export default Coursetopic