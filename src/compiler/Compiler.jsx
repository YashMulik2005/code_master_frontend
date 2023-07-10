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
        <div className={` ${theme == "light" ? "bg-[#edf1d6]" : " bg-gray-950"} flex flex-col-reverse sm:flex-row  p-5`}>
            <div className=' w-[100%] sm:w-1/2 p-2'>
                <img src={photo} alt="" className=' w-full h-full' />
            </div>
            <div className=' w-[100%] sm:w-1/2 flex flex-col items-center'>
                <h1 className=' font-bold text-lg sm:text-2xl text-green-600'>Code master provide online compiler</h1>
                <p className=' text-md'>It is online compiler which provide various language support like c, c++, java, python. dignissimos consequatur velit nisi tempore mollitia asperiores consectetur numquam inventore repellat cum dolores doloribus!</p>
                <h1 className=' font-bold text-2xl text-green-600 m-1'>Language support</h1>
                <div className={`  flex justify-between items-center p-3 m-4 w-[80%] ${theme == "light" ? "shadow-[9px_9px_21px_#868686,-9px_-9px_21px_#ffffff]" : "shadow-lg shadow-gray-800"} `}>
                    <section className=' flex '>
                        <SiCplusplus size={30} className=' mx-4 ' />
                        <h1 className=' font-semibold'>C++ compiler</h1>
                    </section>
                    <Link to='/compiler'><AiOutlineArrowRight size={28} className=' text-green-600 ' /></Link>
                </div>
                <div className={` flex justify-between items-center p-3 m-4 w-[80%] ${theme == "light" ? "shadow-[9px_9px_21px_#868686,-9px_-9px_21px_#ffffff]" : "shadow-lg shadow-gray-800"} `}>
                    <section className=' flex '>
                        <FaPython size={30} className=' mx-4 ' />
                        <h1 className=' font-semibold'>Python compiler</h1>
                    </section>
                    <Link to='/compiler'><AiOutlineArrowRight size={28} className=' text-green-600 ' /></Link>
                </div>
                <div className={` flex justify-between items-center p-3 m-4 w-[80%] ${theme == "light" ? "shadow-[9px_9px_21px_#868686,-9px_-9px_21px_#ffffff]" : "shadow-lg shadow-gray-800"} `}>
                    <section className=' flex '>
                        <FaJava size={30} className=' mx-4 ' />
                        <h1 className=' font-semibold'>java compiler</h1>
                    </section>
                    <Link to='/compiler'><AiOutlineArrowRight size={28} className=' text-green-600 ' /></Link>
                </div>
                <div className={` flex justify-between items-center p-3 m-4 w-[80%] ${theme == "light" ? "shadow-[9px_9px_21px_#868686,-9px_-9px_21px_#ffffff]" : "shadow-lg shadow-gray-800"} `}>
                    <section className=' flex '>
                        <SiCplusplus size={30} className=' mx-4 ' />
                        <h1 className=' font-semibold'>C compiler</h1>
                    </section>
                    <Link to='/compiler'><AiOutlineArrowRight size={28} className=' text-green-600 ' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Compiler