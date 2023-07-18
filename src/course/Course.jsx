import React, { useEffect, useState } from 'react'
import axios from 'axios'
import themehook from '../components/CodeContext'
import bg from '../assets/home_bg.gif'
import { BarLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

function Course() {
    const { contextusername, theme } = themehook()
    const [data, setdata] = useState()
    const [track, settrack] = useState()
    const [loder, setloder] = useState(false)
    const url = import.meta.env.VITE_BACKEND;

    const getdata = async () => {
        setloder(true)
        const data = {
            "username": contextusername
        }
        const result = await axios.post(`${url}/course/all`, { data: data })
        setdata(result.data.data.course_data.c_data);
        settrack(result.data.data.course_data.track)
        console.log(result.data.data.course_data);
        setloder(false)
    }
    useEffect(() => {
        getdata()
    }, [contextusername])

    return (
        <div className=' sm:p-6' id='course'>
            < div className=' flex flex-col md:flex-row p-4 justify-center items-center mx-3'>
                <section className=' w-[100%] md:w-1/3'>
                    <h1 className=' font-bold text-green-500 text-4xl'>Code-Master courses</h1>
                    <ul className=' list-disc text-lg m-2 my-4'>
                        <li>First login to code-master</li>
                        <li>Enrole to course</li>
                        <li>Complete all modules of course</li>
                    </ul>
                    <h1 className=' font-bold text-green-500 text-2xl'>All courses of code-master are free to enrole.</h1>
                </section>
                {(loder ? <section><BarLoader size={25} color='green' /></section> :
                    <div className=' grid grid-cols-1 w-[100%] md:grid-cols-2 md:w-2/3 gap-3 mt-2 sm:mt-0'>
                        {
                            data?.map((item, index) => {
                                return <div
                                    style={{
                                        backgroundImage: `url(${bg})`,
                                        // backgroundblendmode: lighten
                                    }}
                                    className={`${theme == 'light' ? " bg-gray-100 shadow-[9px_9px_18px_#b3b3b3,-9px_-9px_18px_#ffffff]" : " shadow-gray-800 shadow-lg bg-gray-100 text-black"} bg-cover bg-center bg-blend-lighten p-3 w-[100%] md:w-[100%] m-2 `} key={index}>
                                    <h1 className=' text-green-600 font-bold text-xl'>{item.name}</h1>
                                    <h1 className=''>{item.description}</h1>
                                    {/* <h1>{item.id}</h1> */}
                                    {
                                        (item._id == track[item._id] ? <button className={` bg-green-600 text-white py-1 px-3 rounded-xl hover:bg-green-800 font-semibold m-2`}><Link to={`/course/${item._id}`}>continue</Link></button> : <button className={` bg-green-600 text-white py-1 px-5 rounded-xl hover:bg-green-800 font-semibold m-2 `}><Link to={`/course/${item._id}`}>start</Link></button>)
                                    }
                                    {/* <button className={` bg-green-600 ${item.id == track[index + 1] ? "hidden" : ""} `}>start</button> */}
                                </div>
                            })
                        }
                    </div>
                )}

            </div >
        </div>
    )
}

export default Course