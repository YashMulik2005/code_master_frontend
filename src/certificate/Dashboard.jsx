import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import themehook from '../components/CodeContext'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { GrCloudComputer } from 'react-icons/gr'
import photo from '../assets/dashboard_bg.png'

function Dashboard() {
    const { id } = useParams()
    const url = import.meta.env.VITE_BACKEND;
    const { contextusername } = themehook()
    const [data, setdata] = useState()
    const [track, settrack] = useState()

    const getdata = async () => {
        const rdata = {
            "c_id": id,
            "username": contextusername
        }
        const result = await axios.post(`${url}/certify/dashboard`, { data: rdata })
        console.log(result);
        setdata(result.data.data.course_data.c_data);
        settrack(result.data.data.course_data.track);
    }

    useEffect(() => {
        getdata()
    }, [])

    console.log(id);
    return (
        <div className=' flex'>
            <div className=' w-[25%] h-[100vh] bg-green-600 text-white font-semibold flex justify-center items-center p-4'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minima veniam at voluptates magni explicabo assumenda inventore porro expedita, esse id pariatur eaque quasi quo. Quae quod aperiam blanditiis? Aperiam!</h1>
            </div>
            <div className=' w-[75%] h-[100vh]  relative bg-contain bg-center bg-no-repeat'>
                {/* // style={
                    //     { backgroundImage: `url(${photo})` }
                    // }> */}
                <div className=' w-[100%] h-[100%] flex flex-col items-center justify-center backdrop-blur-sm relative'>
                    <section className=' absolute right-2 top-2'>
                        <MdDarkMode size={35} />
                    </section>
                    <h1 className=' text-3xl text-green-600 font-bold m-5'>TEST DASHBOARD</h1>
                    <table className='border-collapse w-[90%] m-3'>
                        <thead>
                            <tr className=' bg-green-700'>
                                <th className='p-3 py-3 text-left text-white text-lg'>Id</th>
                                <th className='p-3 text-left py-3 text-white text-lg'>Name</th>
                                <th className='p-3 text-left py-3 text-white text-lg'>Topic</th>
                                <th className='p-3 text-left py-3 text-white text-lg'>Code</th>
                            </tr>
                        </thead>
                        {
                            data?.map((item, index) => {
                                return <tr className=' hover:bg-[#edf1d6] border-b border-slate-500' key={index}>
                                    <td className=' text-white p-3 font-semibold text-left hover:text-black text-sm'>{item._id}</td>
                                    <td className=' p-3 font-semibold text-left text-green-600'>{item.name}</td>
                                    <td className='text-white p-3 font-semibold text-left hover:text-black'>{item.topic}</td>
                                    <td className='text-white p-3 font-semibold text-left hover:text-black'>{(track[item._id] == item._id) ? <Link className='flex items-center'>complete <IoMdCheckmarkCircle className='' /></Link> :
                                        <Link to={`/certificate/question/${id}/${item._id}`} className='flex items-center'>solve <AiOutlineArrowRight className='' /></Link>
                                    }
                                    </td>
                                </tr>
                            })
                        }
                    </table>
                    <section className=' absolute right-1 bottom-0'>
                        <button className=' px-6 py-1 bg-[#191919] text-semibold text-white mx-2'>Finish</button>
                        <button className=' px-6 py-1 bg-[#191919] text-semibold text-white ml-2'>Stop</button>
                    </section>
                </div>
            </div>

            {/*<button className=' bg-green-500 text-white py-1 px-3'><Link to={`/certificate/question`}>start</Link></button> */}
        </div>
    )
}

export default Dashboard