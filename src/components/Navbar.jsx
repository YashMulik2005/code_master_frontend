import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi'
import { GrCloudComputer } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import themehook from './CodeContext'
import axios from 'axios'

function Navbar() {

    const { theme, settheme, logedin, contextusername, setlogedin, setcontextusername, setnavbar, navbar } = themehook()
    axios.defaults.withCredentials = true;
    const url = import.meta.env.VITE_BACKEND;
    const navigate = useNavigate()

    const handletheme = () => {
        if (theme == "light") {
            settheme("dark")
        }
        else {
            settheme("light")
        }
    }

    useEffect(() => {

        localStorage.setItem("theme", theme)
        const localtheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute("data-theme", localtheme)
    }, [theme])

    return (
        <div className=' overflow-x-hidden '>
            <div className=' max-[666px]:flex justify-between items-center p-2 bg-[#D1FDD8] hidden'>
                <section className=' flex items-center'>
                    <GrCloudComputer size={30} />
                    <h1 className=' font-bold text-[#40513b] mx-2'><u>CODE MASTER</u></h1>
                </section>
                <section onClick={() => {
                    setnavbar(!navbar)
                }}>
                    {navbar ? <GiCancel size={33} className=' text-black' /> : <GiHamburgerMenu size={33} className=' text-black' />}
                </section>
            </div>
            <div className={` bg-white h-[93vh] ${navbar ? 'w-full sm:w-72' : "w-0"} absolute right-0 transition-all ease-linear duration-300 overflow-hidden z-10 ${theme == 'light' ? "" : ""}`}>
                <ul className=" p-3 flex flex-col">
                    <li className=' inline font-semibold hover:border-b-2 text-black' onClick={() => {
                        setnavbar(false)
                        navigate("/")
                    }}>Home</li>
                    <li className=' inline font-semibold hover:border-b-2 text-black ' onClick={() => {
                        setnavbar(false)
                    }}>About</li>
                    <li className=' inline font-semibold hover:border-b-2 text-black' onClick={() => {
                        setnavbar(false)
                    }}>Contact</li>
                    <li className=' inline font-semibold hover:border-b-2 text-black' onClick={() => {
                        setnavbar(false)
                    }}>Help</li>
                    <section >
                        {theme == "light" ? <section className=' flex items-center' onClick={handletheme} size={30}>
                            <h1 className=' text-black font-semibold'>Dark Mode</h1> <MdDarkMode size={30} className=' text-black' />
                        </section> : <section className=' flex items-center' onClick={handletheme} >
                            <h1 className=' text-black font-semibold'>Light Mode</h1> <MdOutlineLightMode size={30} className=' text-black' />
                        </section>
                        }
                    </section>
                </ul>
                {/* <button onClick={() => {
                    setlogedin(!logedin)
                }}>change</button> */}
                {
                    logedin ?
                        <section className=' flex items-center m-2'>
                            <CgProfile size={33} className=' text-black' />
                            <h1 className=' text-black' onClick={() => {
                                setnavbar(false)
                                navigate("/profile")
                            }}>{contextusername}</h1>
                        </section>
                        :
                        <section>
                            <button className=' mx-1 font-bold  rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white' onClick={() => {
                                setnavbar(false)
                                navigate("/auth/login")
                            }}>Login</button>
                            <button className=' mx-1 font-bold  rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white' onClick={() => {
                                setnavbar(false)
                                navigate('/auth/signup')
                            }}>Sighup</button>
                        </section>

                }
            </div>
        </div>
    )
}

export default Navbar