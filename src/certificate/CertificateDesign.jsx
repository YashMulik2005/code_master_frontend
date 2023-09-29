import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import themehook from '../components/CodeContext'
import { GrCloudComputer } from 'react-icons/gr'
import photo1 from '../assets/certificate_bg1.jpg'
import photo2 from '../assets/certificate_bg2.jpg'
import ClipboardJS from 'clipboard';
import { FaFreeCodeCamp } from 'react-icons/fa6'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

function CertificateDesign() {
    const { id } = useParams()
    const { name } = useParams()
    const { contextusername, theme, settheme } = themehook()
    const url = import.meta.env.VITE_BACKEND;

    const [data, setdata] = useState([])
    const input = useRef(null)

    const handletheme = () => {
        if (theme == "light") {
            settheme("dark")
        }
        else {
            settheme("light")
        }
    }

    const getdata = async () => {
        const data = {
            "c_id": id,
            "username": contextusername
        }
        const result = await axios.post(`${url}/certify/show`, { data: data })
        console.log(result.data.data.c_data.success);
        if (result.data.data.c_data.success) {
            setdata(result.data.data.c_data.course);
        }
        else {
            alert("first give test to get certificate")
        }

    }

    const handlecopy = () => {
        const i = input.current;
        if (i) {
            i.select();
            document.execCommand('copy');
        }
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <div className=''>
            <div className=' hidden p-2 px-4 sm:flex justify-between items-center shadow-md'>
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
            <div className='p-4 sm:p-9 lg:px-48'>
                <div className=' p-4 sm:p-6 rounded-md bg-cover bg-no-repeat'
                    style={{
                        backgroundImage: `url(${photo1})`
                    }}
                >
                    <div className=' p-4 rounded-md'>
                        <section className=' flex items-center justify-center'>
                            <GrCloudComputer size={30} />
                            <h1 className=' text-center text-3xl font-bold text-green-500 mx-3'>Code-Master</h1>
                        </section>
                        <h1 className=' text-center text-[50px] font-semibold text-black'>Certificate</h1>
                        <p className=' text-center text-lg mt-4 text-black'>This is to certify that</p>
                        <h1 className=' text-center text-3xl font-bold text-black'>{name}</h1>
                        <hr className=' m-3' />
                        <p className=' text-center text-lg text-black'>Has successfully cleared the assessment for the skill</p>
                        <h1 className=' text-center text-xl font-extrabold text-black'>{data[0]?.name}</h1>
                        <section className='flex justify-around items-center p-5'>
                            <h1 className=' text-lg text-black'>date</h1>
                            <h1 className=' text-lg text-black'>sign</h1>
                        </section>
                    </div>
                </div>
                <section className=' my-5 '>
                    <section className=' flex justify-between items-center px-3'>
                        <h1 className='text-lg font-semibold'>Share this Certificate</h1>
                        <button onClick={handlecopy} className=' bg-green-600 px-2 py-1 text-white rounded-md font-semibold'>copy link</button>
                    </section>
                    <input ref={input} type='text' className={` my-4 w-full p-2 m-1 rounded-md focus:outline-none ${theme == 'light' ? "border-2" : "border-1"}`} defaultValue={`${url}/showceroficate/${id}/${contextusername}`} />
                </section>
            </div>
        </div>
    )
}

export default CertificateDesign