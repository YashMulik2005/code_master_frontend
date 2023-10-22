import React from 'react'
import { SiCplusplus } from 'react-icons/si'
import { FaJava, FaPython } from 'react-icons/fa'
import { AiOutlineArrowRight } from 'react-icons/ai'
import themehook from '../components/CodeContext'
import { Link } from 'react-router-dom'
import photo from '../assets/compiler.png'

function Compiler() {
    const { theme } = themehook()
    return (
        <div className={` ${theme == "light" ? "bg-[#f5f1f0]" : " bg-[#0c131d]"} flex flex-col-reverse min-[800px]:flex-row  p-5`}>
            <div className=' w-[100%] min-[800px]:w-[45%] p-2'>
                <img src={photo} alt="" className=' w-full h-full' />
            </div>
            <div className=' w-[100%] min-[800px]:w-[55%] flex flex-col justify-center items-center p-2 sm:p-5'>
                <h1 className=' font-bold text-lg sm:text-2xl text-green-600'>Code master provide online compiler</h1>
                <p className=' text-md sm:mx-5 my-[4px]'>It is online compiler which provide various language support like c, c++, java, python. dignissimos consequatur velit nisi tempore mollitia asperiores consectetur numquam inventore repellat cum dolores doloribus! It is online compiler which provide various language support like c, c++, java, python. dignissimos consequatur</p>
                <h1 className=' font-bold text-2xl text-green-600 m-1 sm:my-3'>Language support</h1>
                <div className=' flex flex-col min-[830px]:flex-row'>
                    <div className={`  flex  justify-center items-center m-1 p-3 sm:m-4 min-[830px]:w-1/4 rounded-lg ${theme == "light" ? "bg-[#ffffff] border-[1px] " : "bg-[#1c232b]"} `}>
                        <section className=' flex justify-center items-center '>
                            <SiCplusplus size={30} className='' />
                            <h1 className=' font-semibold mx-[2px]'>C++</h1>
                        </section>
                    </div>
                    <div className={` flex justify-center p-3 sm:m-4 m-1 min-[830px]:w-1/4 rounded-lg ${theme == "light" ? "bg-[#ffffff] border-[1px] " : "bg-[#1c232b]"} `}>
                        <section className=' flex justify-center items-center '>
                            <FaPython size={30} className=' ' />
                            <h1 className=' font-semibold mx-[2px]'>Python</h1>
                        </section>
                    </div>
                    <div className={` flex justify-center items-center p-3 m-1 sm:m-4 min-[830px]:w-1/4 rounded-lg ${theme == "light" ? "bg-[#ffffff] border-[1px] " : "bg-[#1c232b]"} `}>
                        <section className=' flex justify-center items-center'>
                            <FaJava size={30} className='' />
                            <h1 className=' font-semibold mx-[2px]'>java</h1>
                        </section>
                    </div>
                    <div className={` flex justify-center items-center p-3 m-1 sm:m-4 min-[830px]:w-1/4 rounded-lg ${theme == "light" ? "bg-[#ffffff] border-[1px] " : "bg-[#1c232b]"} `}>
                        <section className=' flex justify-center items-center'>
                            <SiCplusplus size={30} className='' />
                            <h1 className=' font-semibold mx-[2px]'>C</h1>
                        </section>
                    </div>
                </div>
                <section className='flex flex-col justify-center items-center'>
                    <h1 className=' text-lg text-green-600 font-bold my-2'>Start to compile you code with code master compiler</h1>
                    <button className=' border-[1px] rounded-3xl px-5 py-[4px] font-semibold hover:text-white border-gray-400 hover:bg-[#39a84b] hover:border-[#39a84b]'><Link to={"/compiler"}>Visit compiler</Link></button>
                </section>
            </div>
        </div>
    )
}

export default Compiler