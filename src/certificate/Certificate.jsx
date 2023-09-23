import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import themehook from '../components/CodeContext';
import { BarLoader } from 'react-spinners'
import photo from '../assets/dashboard_bg.png'
import { BiCodeAlt } from 'react-icons/bi'
import { FaFreeCodeCamp } from 'react-icons/fa6'

function Certificate() {
    const [data, setdata] = useState()
    const [track, settrack] = useState()
    const [loader, setloader] = useState(false)
    const url = import.meta.env.VITE_BACKEND;
    const { contextusername, theme, setnavbar } = themehook()
    const getdata = async () => {
        setloader(true)
        const rdata = {
            "username": contextusername
        }
        const result = await axios.post(`${url}/certify`, { data: rdata })
        console.log(result.data.data.course_data.c_data);
        console.log(result.data.data.course_data.track);
        setdata(result.data.data.course_data.c_data);
        settrack(result.data.data.course_data.track);
        setloader(false)
    }
    const handlenav = () => {
        setnavbar(false)
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <div className=' sm:h-[88vh]' onClick={handlenav}>
            <h1 className=' text-center text-2xl m-4 font-bold'>Certify for below courses</h1>
            <div className=' p-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    (loader ? <section className=' justify-center items-center'><BarLoader size={25} color='green' /></section> :
                        data?.map((item, index) => {
                            return <div className={` hover:scale-110 transition-all ease-linear duration-200 relative p-3 flex justify-between items-center rounded-lg h-40 ${theme == "light" ? " bg-[#f5f1f0] border-[1px] " : "bg-[#0c131d] shadow-lg"} `} key={index}  >
                                <section>
                                    <section className=' absolute right-2 top-2 flex items-center justify-center'>
                                        <h1 className={` ${theme == "dark" ? "text-white" : ""} font-bold text-[12px] `}>Code</h1>
                                        <section>
                                            <FaFreeCodeCamp size={20} className={` ${theme == "light" ? "text-green-700" : "text-green-500"} mx-[2px] font-bold  `} />
                                        </section>
                                        <h1 className={` ${theme == "dark" ? "text-white" : ""} font-bold text-[12px]`}>Master</h1>
                                    </section>
                                    {/* <section className=' flex  items-center justify-center mt-[-7px]'>
                                        <hr className={` ${theme == "light" ? "border-black" : "border-white"} w-8 border-t-2  `} />
                                        <h1 className={` ${theme == "light" ? "text-green-700" : "text-green-500"} text-[12px] mx-[2px] font-semibold`}>learn with fun</h1>
                                        <hr className={` ${theme == "light" ? "border-black" : "border-white"} w-8 border-t-2  `} />
                                    </section> */}
                                </section>
                                <div className={`${theme == "light" ? "bg-[#ffffff]" : "bg-[#1c232b]"} rounded-md w-[50%] h-[100%] p-2 m-1`}>
                                    <img src={item.link} alt="" className=' w-[100%] h-[100%]' />
                                </div>
                                <div className=' w-[50%] flex flex-col items-start justify-center p-3'>
                                    <div className=' rounded-full bg-[#39A84B] group-hover:bg-[#C5E7CB] p-1 w-6 m-1 ml-0'>
                                        <BiCodeAlt size={16} className=' text-white group-hover:text-[#39A84B]' />
                                    </div>
                                    <h1 className={` ${theme == "light" ? "text-black" : "text-white"} text-xl font-bold `}>{item.name}</h1>
                                    {
                                        (item._id == track[item._id] ? <Link to={`/showceroficate/${item._id}/${contextusername}`}><button className=' font-bold text-md'><u>Complete</u></button></Link> :
                                            <button className=' my-2 border-[1px] border-gray-400 py-[0.5px] px-5 rounded-3xl  font-semibold hover:bg-green-600 hover:font-bold hover:border-none hover:text-white '><Link to={`/certificate/rule/${item._id}`}>Certify</Link></button>
                                        )
                                    }
                                    {/* https://i.ibb.co/5B9j4mf/fdf29691d85e224cc6ddd59f8b6392fb-removebg-preview.png */}
                                </div>
                            </div>
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Certificate