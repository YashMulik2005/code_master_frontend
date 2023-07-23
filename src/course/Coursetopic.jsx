import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import themehook from '../components/CodeContext'
import axios from 'axios'
import photo from '../assets/react.svg'
import { BarLoader } from 'react-spinners'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { AiFillCaretRight } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Coursetopic() {
    const { id } = useParams()
    console.log(id);
    const { contextusername, logedin, settopic_id, setcourse_id, setnavbar } = themehook()
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
            toast.warn("Login first to enroll in course.", {
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
                toast.warn("Something went wrong try again.", {
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
        <div onClick={handlenav}>
            {(loader ? <section className=" flex justify-center h-[75vh] items-center" ><BarLoader size={50} color='green' /></section> :
                <div>
                    <div className=' flex p-2 min-[760px]:h-[28vh] justify-center shadow-lg'>
                        <div className=' hidden  sm:block w-1/3'>
                            <img src={photo} alt="" className=' w-[100%] h-[100%] ' />
                        </div>


                        <div className='w-[100%] sm:w-[65%] sm:p-2' >
                            <h1 className='text-xl sm:text-3xl text-green-600 font-bold'>{data.name}</h1>
                            <p className=' text-sm sm:text-md lg:text-lg font-semibold'>{data.description}</p>
                            <h1 className=' font-bold'>modules:{data.modules}</h1>
                            {

                                (Object.keys(topictrack).length == data.modules ? <button className=' bg-green-600 m-2 px-5 py-1 text-white rounded-3xl font-bold'>Complete</button> :
                                    (
                                        (data?._id == track[data._id] ? <button className={` border-b-2 border-green-500 py-[2px] px-3 hover:border-black hover:bg-green-500 hover:text-white font-semibold m-2`}>continue</button> : <button onClick={handleenroll} className={` bg-green-600 text-white py-1 px-5 rounded-xl hover:bg-green-800 font-semibold m-2 `} >Enroll for free</button>)
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
                                    return <tr className=' hover:bg-[#edf1d6] border-b border-slate-500' key={index}>
                                        <td className=' p-3 font-semibold text-left text-sm sm:text-md'>{index + 1}</td>
                                        <td className=' p-3 font-semibold text-left text-green-600  text-sm sm:text-md'>{item.name1}</td>
                                        <td className=' p-3 font-semibold text-left  text-sm sm:text-md'>{item.name2}</td>
                                        <td className=' p-3 font-semibold text-left'>{(item._id == topictrack[item._id] ? <section className=" flex items-center"><buttton className=" font-bold">Complete</buttton> <IoMdCheckmarkCircle size={20} className=' mx-1 text-green-600' /> </section>
                                            : <section className=" flex items-center" onClick={() => {
                                                console.log("topic");
                                                if (data._id != track[data._id]) {
                                                    toast.warn("First enroll to the course.", {
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
                                                else {
                                                    settopic_id(item._id)
                                                    setcourse_id(id)
                                                    navigate("/course/topic")
                                                }
                                            }}><buttton className=" font-bold">Start</buttton> <AiFillCaretRight size={20} className=' mx-1 text-blue-600' /> </section>)}</td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>

                </div>
            )}
            <ToastContainer />
        </div>
    )
}

export default Coursetopic