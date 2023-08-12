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
        <div className=' overflow-x-hidden'>
            <div className=' flex justify-between items-center p-2 border-2 bg-[#edf1d6]'>
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
            <div className={`bg-[#edf1d6] h-[93vh] ${navbar ? 'w-full sm:w-72' : "w-0"} absolute right-0 transition-all ease-linear duration-300 overflow-hidden z-10 ${theme == 'light' ? "" : ""}`}>
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
                            <button className=' bg-green-600 text-white py-1 px-3 rounded-md m-2 font-semibold' onClick={() => {
                                setnavbar(false)
                                navigate("/auth/login")
                            }}>Login</button>
                            <button className=' bg-green-600 text-white py-1 px-3 rounded-md m-2 font-semibold' onClick={() => {
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