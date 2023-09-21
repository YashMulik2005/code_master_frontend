import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import themehook from '../components/CodeContext'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BarLoader } from 'react-spinners'
import { FaFreeCodeCamp } from 'react-icons/fa6'
import QuestionSkeleton from './QuestionSkeleton'

function Practice() {
    const { topic, settopic, contextusername, logedin, setnavbar, theme } = themehook()
    const [output, setoutput] = useState()
    const [loader, setloader] = useState(false)
    const naviagte = useNavigate()
    console.log(topic);
    const url = import.meta.env.VITE_BACKEND;

    const getdata = async () => {
        setloader(true)
        const result = await axios.get(`${url}/practice/${topic}`);
        setoutput(result.data.data.result);
        // setloader(false)
        console.log(result.data.data.result);
    }

    const handletopic = (e) => {
        settopic(e.target.textContent)
    }

    const handlesearch = () => {

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
                <div className='max-[666px]:hidden p-1 px-6 flex justify-between items-center py-3 '>
                    <section>
                        <section className=' flex items-center justify-center'>
                            <h1 className={`${theme == "light" ? "text-black" : "text-white"} font-bold text-md `}>Code</h1>
                            <section>
                                <FaFreeCodeCamp size={30} className={`${theme == "light" ? "text-green-700" : "text-green-500"}  mx-[2px] font-bold  `} />
                            </section>
                            <h1 className={` ${theme == "light" ? "text-black" : "text-white"} font-bold text-md `}>Master</h1>
                        </section>
                        {/* <section className=' flex  items-center justify-center mt-[-7px]'>
                            <hr className={` border-black w-8 border-t-2  `} />
                            <h1 className={` text-green-700 text-[12px] mx-[2px] font-semibold`}>learn with fun</h1>
                            <hr className={` border-black w-8 border-t-2  `} />
                        </section> */}
                    </section>

                    {
                        logedin ?
                            <section className=' flex items-center m-2 cursor-pointer'>
                                <CgProfile size={33} className=' text-black' />
                                <h1 className=' text-black text-lg' onClick={() => {
                                    setnavbar(false)
                                    naviagte("/profile")
                                }}>{contextusername}</h1>
                            </section>
                            :
                            <section className=' cursor-pointer'>
                                <button className={` font-bold rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white `} onClick={() => {
                                    setnavbar(false)
                                    naviagte("/auth/login")
                                }}>Login</button>
                                <button className=' mx-2 font-bold rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white' onClick={() => {
                                    setnavbar(false)
                                    naviagte('/auth/signup')
                                }}>Sighup</button>
                            </section>

                    }
                </div>
                <div className=' flex min-[800px]:flex-row flex-col w-[100%]'>
                    <div className=' min-[800px]:w-[18%] w-[100%] py-8 px-3 ' >
                        <h1 className={`${theme == "light" ? "" : "text-white"} px-3 font-bold `}>Categories</h1>
                        <ul className='flex flex-row min-[800px]:flex-col  p-1 sm:lg overflow-x-auto  '>
                            <li className={`${topic == "all" ? `${theme == "light" ? "text-black font-semibold" : "text-white font-semibold"} ` : ""} ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"}  p-1 px-3 rounded-lg`} onClick={handletopic}>all</li>
                            <li className={`${topic == "basic programming" ? `${theme == "light" ? "text-black font-semibold" : "text-white font-semibold"} ` : ""} ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"} p-1 px-3 rounded-lg`} onClick={handletopic}>basic programming</li>
                            <li className={`${topic == "sorting" ? `${theme == "light" ? "text-black font-semibold" : "text-white font-semibold"} ` : ""} ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"} p-1 px-3 rounded-lg`} onClick={handletopic}>sorting</li>
                            <li className={`${topic == "searching" ? `${theme == "light" ? "text-black font-semibold" : "text-white font-semibold"} ` : ""} ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"} p-1 px-3 rounded-lg`} onClick={handletopic}>searching</li>
                            <li className={`${topic == "array" ? `${theme == "light" ? "text-black font-semibold" : "text-white font-semibold"} ` : ""} ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"} p-1 px-3 rounded-lg`} onClick={handletopic}>array</li>
                            <li className={`${topic == "linked list" ? `${theme == "light" ? "text-black font-semibold" : "text-white font-semibold"} ` : ""} ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"} p-1 px-3 rounded-lg`} onClick={handletopic}>linked list</li>
                            <li className={`${topic == "stack" ? `${theme == "light" ? "text-black font-semibold" : "text-white font-semibold"} ` : ""} ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"} p-1 px-3 rounded-lg`} onClick={handletopic}>stack</li>
                            <li className={`${topic == "math" ? `${theme == "light" ? "text-black font-semibold" : "text-white font-semibold"} ` : ""} ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"} p-1 px-3 rounded-lg`} onClick={handletopic}>math</li>
                            <li className={`${topic == "tree" ? `${theme == "light" ? "text-black font-semibold" : "text-white font-semibold"} ` : ""} ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"} p-1 px-3 rounded-lg`} onClick={handletopic}>tree</li>
                            <li className={`${topic == "graph" ? `${theme == "light" ? "text-black font-semibold" : "text-white font-semibold"} ` : ""} ${theme == "light" ? "hover:bg-[#f5f1f0]" : "hover:bg-[#0c131d]"} p-1 px-3 rounded-lg`} onClick={handletopic}>graph</li>
                        </ul>
                    </div>
                    <div className='py-3 sm:p-6 p-2 flex flex-col justify-center h-[92vh] min-[800px]:w-[82%] w-[100%]'>
                        <div className='flex justify-between items-center mb-4'>
                            <h1 className={`${theme == "light" ? "" : "text-white"} font-bold`}>Questions</h1>
                            <form action="" onSubmit={handlesearch} className=' w-[50%]'>
                                <input type="text" required className={`${theme == "dark" ? "border-none focus:outline-none bg-[#0c131d]" : "border-2"}  px-4 py-[7px] w-[100%] rounded-full focus:outline-none `} placeholder='search question' />
                            </form>
                        </div>

                        <div className={` ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} h-[100%] overflow-y-auto w-[100%] pb-2 rounded-lg `}>
                            <table className='border-collapse w-[100%] '>
                                <thead>
                                    <tr className=' bg-green-700'>
                                        <th className='p-3 py-3 text-left text-white text-lg'>Id</th>
                                        <th className='p-3 text-left py-3 text-white text-lg'>Name</th>
                                        <th className='p-3 text-left py-3 text-white text-lg'>Topic</th>
                                        <th className='p-3 text-left py-3 text-white text-lg'>Code</th>
                                    </tr>
                                </thead>
                                {
                                    loader ? <BarLoader color='green' className=' text-center' /> :
                                        output?.map((item, index) => {
                                            return <tr className='  border-b border-slate-500' key={index}>
                                                <td className=' p-3 font-semibold text-left text-sm'>{index + 1}</td>
                                                <td className=' p-3 font-semibold text-left text-green-600'><Link to={`/practice/question/${item._id}`}>{item.name}</Link></td>
                                                <td className=' p-3 font-semibold text-left'>{item.topic}</td>
                                                <td className=' p-3 font-semibold text-left'><Link to={`/practice/question/${item._id}`} className='flex items-center'>solve <AiOutlineArrowRight className='' /></Link></td>
                                            </tr>
                                        })
                                }
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practice