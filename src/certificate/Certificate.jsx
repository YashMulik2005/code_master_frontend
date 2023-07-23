import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import themehook from '../components/CodeContext';
import { BarLoader } from 'react-spinners'

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
        <div className=' h-[88vh]' onClick={handlenav}>
            <h1 className=' text-center text-2xl m-4 font-bold'>Certify for below courses</h1>
            <div className=' p-7 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    (loader ? <section className=' flex justify-center items-center'><BarLoader size={25} color='green' /></section> :
                        data?.map((item, index) => {
                            return <div className={` h-36 ${theme == "light" ? " bg-[#edf1d6] shadow-[8px_8px_16px_#afafaf,-8px_-8px_16px_#ffffff]" : "shadow-[#000000] bg-[#191919] shadow-lg"} flex justify-center items-center flex-col rounded-md' key={index} `} >
                                <h1 className=' text-2xl text-green-500 font-bold m-3'>{item.name}</h1>
                                {
                                    (item._id == track[item._id] ? <Link to={`/showceroficate/${item._id}/${contextusername}`}><button className=' font-bold text-md'><u>Complete</u></button></Link> :
                                        <button className=' bg-green-500 text-white  py-1 px-7 rounded-3xl m-3 font-bold'><Link to={`/certificate/rule/${item._id}`}>Certify</Link></button>
                                    )
                                }
                            </div>
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Certificate