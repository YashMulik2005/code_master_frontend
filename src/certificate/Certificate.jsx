import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import themehook from '../components/CodeContext';

function Certificate() {
    const [data, setdata] = useState()
    const [track, settrack] = useState()
    const url = import.meta.env.VITE_BACKEND;
    const { contextusername } = themehook()
    const getdata = async () => {
        const rdata = {
            "username": contextusername
        }
        const result = await axios.post(`${url}/certify`, { data: rdata })
        console.log(result.data.data.course_data.c_data);
        console.log(result.data.data.course_data.track);
        setdata(result.data.data.course_data.c_data);
        settrack(result.data.data.course_data.track);
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <div>
            <h1 className=' text-center text-2xl m-4 font-bold'>Certify for below courses</h1>
            <div className=' p-7 grid grid-cols-3 gap-5'>
                {
                    data?.map((item, index) => {
                        return <div className=' h-36 shadow-lg shadow-[#000000] flex justify-center items-center flex-col bg-[#191919] rounded-md' key={index}>
                            <h1 className=' text-xl text-green-500 font-bold m-3'>{item.name}</h1>
                            {
                                (item._id == track[item._id] ? <button>Complete</button> :
                                    <button className=' bg-green-500 text-white  py-1 px-7 rounded-3xl m-3 font-bold'><Link to={`/certificate/rule/${item._id}`}>Certify</Link></button>
                                )
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Certificate