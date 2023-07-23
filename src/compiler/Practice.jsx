import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import themehook from '../components/CodeContext'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BarLoader } from 'react-spinners'

function Practice() {
    const { topic, settopic, contextusername, logedin, setnavbar } = themehook()
    const [output, setoutput] = useState()
    const [loader, setloader] = useState(false)
    const naviagte = useNavigate()
    console.log(topic);
    const url = import.meta.env.VITE_BACKEND;

    const getdata = async () => {
        setloader(true)
        const result = await axios.get(`${url}/practice/${topic}`);
        setoutput(result.data.data.result);
        setloader(false)
        console.log(result.data.data.result);
    }

    const handletopic = (e) => {
        settopic(e.target.textContent)
    }

    const handlenav = () => {
        setnavbar(false)
    }

    useEffect(() => {
        getdata()
    }, [topic])

    return (
        <div onClick={handlenav}>
            <div>
                <div className={`p-2 border-b-[1px] relative h-12`}>
                    <div className={`${logedin ? "" : "hidden"} flex absolute right-2`}>
                        <CgProfile size={30} />
                        <h1 className=" font-bold mx-2">{contextusername}</h1>
                    </div>
                    <div className={`${logedin ? "hidden" : "flex"} absolute right-4`}>
                        <h1><Link to='/auth/login' className=' font-semibold text-lg mx-1 py-1 px-3 hover:bg-[#edf1d6] hover:border-b-2 hover:border-green-600'>Login</Link></h1>
                        <h1><Link to='/auth/signup' className=' font-semibold text-lg mx-1 py-1 px-3 hover:bg-[#edf1d6] hover:border-b-2 hover:border-green-600'>Signup</Link></h1>
                    </div>
                </div>
                <div className=' sm:p-1 overflow-x-auto' >
                    <ul className=' flex p-1 sm:text-lg font-semibold md:justify-center '>
                        <li className={`${topic == "graph" ? "border-b-2 border-green-600" : ""} hover:bg-[#edf1d6] p-1 px-3`} onClick={handletopic}>all</li>
                        <li className={`${topic == "basic programming" ? "border-b-2 border-green-600" : ""} hover:bg-[#edf1d6] p-1 px-3`} onClick={handletopic}>basic programming</li>
                        <li className={`${topic == "sorting" ? "border-b-2 border-green-600" : ""} hover:bg-[#edf1d6] p-1 px-3`} onClick={handletopic}>sorting</li>
                        <li className={`${topic == "searching" ? "border-b-2 border-green-600" : ""} hover:bg-[#edf1d6] p-1 px-3`} onClick={handletopic}>searching</li>
                        <li className={`${topic == "array" ? "border-b-2 border-green-600" : ""} hover:bg-[#edf1d6] p-1 px-3`} onClick={handletopic}>array</li>
                        <li className={`${topic == "linked list" ? "border-b-2 border-green-600" : ""} hover:bg-[#edf1d6] p-1 px-3`} onClick={handletopic}>linked list</li>
                        <li className={`${topic == "stack" ? "border-b-2 border-green-600" : ""} hover:bg-[#edf1d6] p-1 px-3`} onClick={handletopic}>stack</li>
                        <li className={`${topic == "math" ? "border-b-2 border-green-600" : ""} hover:bg-[#edf1d6] p-1 px-3`} onClick={handletopic}>math</li>
                        <li className={`${topic == "tree" ? "border-b-2 border-green-600" : ""} hover:bg-[#edf1d6] p-1 px-3`} onClick={handletopic}>tree</li>
                        <li className={`${topic == "graph" ? "border-b-2 border-green-600" : ""} hover:bg-[#edf1d6] p-1 px-3`} onClick={handletopic}>graph</li>
                    </ul>
                </div>
                <div className='py-3 sm:p-6 flex justify-center'>
                    {(loader ? <section className=' flex justify-center items-center p-4 w-[100%] h-[50vh]'><BarLoader size={60} color='green' /></section> :
                        <table className='border-collapse w-[90%] '>
                            <thead>
                                <tr className=' bg-green-700'>
                                    <th className='p-3 py-3 text-left text-white text-lg'>Id</th>
                                    <th className='p-3 text-left py-3 text-white text-lg'>Name</th>
                                    <th className='p-3 text-left py-3 text-white text-lg'>Topic</th>
                                    <th className='p-3 text-left py-3 text-white text-lg'>Code</th>
                                </tr>
                            </thead>
                            {
                                output?.map((item, index) => {
                                    return <tr className=' hover:bg-[#edf1d6] border-b border-slate-500' key={index}>
                                        <td className=' p-3 font-semibold text-left text-sm'>{index + 1}</td>
                                        <td className=' p-3 font-semibold text-left text-green-600'><Link to={`/practice/question/${item._id}`}>{item.name}</Link></td>
                                        <td className=' p-3 font-semibold text-left'>{item.topic}</td>
                                        <td className=' p-3 font-semibold text-left'><Link to={`/practice/question/${item._id}`} className='flex items-center'>solve <AiOutlineArrowRight className='' /></Link></td>
                                    </tr>
                                })
                            }
                        </table>
                    )

                    }

                </div>
            </div>
        </div>
    )
}

export default Practice