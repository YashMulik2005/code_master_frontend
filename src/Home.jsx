import React, { useEffect, useRef } from 'react'
import { GrCloudComputer } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import photo from './assets/home_cover.png'
import bg from './assets/home_bg.gif'
import themehook from './components/CodeContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { HiCode } from 'react-icons/hi'
import './roundedbg.css'
import { useNavigate } from 'react-router-dom'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

function Home() {
    const { theme, settheme, logedin, setlogedin, contextusername, setcontextusername, setnavbar } = themehook();
    axios.defaults.withCredentials = true;
    const url = import.meta.env.VITE_BACKEND;

    const navigate = useNavigate();

    const scrollToSection = () => {
        const aboutSection = document.getElementById('course');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handletheme = () => {
        if (theme == "light") {
            settheme("dark")
        }
        else {
            settheme("light")
        }
    }

    const handlenav = () => {
        setnavbar(false)
    }

    useEffect(() => {

    }, [])

    return (
        <div className='bgrounded mb-5 flex' onClick={handlenav}>
            <div className=' absolute z-[1]'>
                <div className='max-[666px]:hidden p-1 px-6 flex justify-between items-center '>
                    <section className=' flex items-center cursor-pointer'>
                        <GrCloudComputer size={30} />
                        <h1 className=' font-bold text-[#42892c] mx-2'><u>CODE MASTER</u></h1>
                    </section>
                    <ul className=" p-3 flex cursor-pointer ">
                        <li className=' inline mx-2 font-semibold hover:border-b-2 border-green-600 text-black' onClick={() => {
                            setnavbar(false)
                            navigate("/")
                        }}>Home</li>
                        <li className=' inline mx-2 font-semibold hover:border-b-2 border-green-600 text-black ' onClick={() => {
                            setnavbar(false)
                        }}>About</li>
                        <li className=' inline mx-2 font-semibold hover:border-b-2 border-green-600 text-black' onClick={() => {
                            setnavbar(false)
                        }}>Contact</li>
                        <li className=' inline mx-2 font-semibold hover:border-b-2 border-green-600 text-black' onClick={() => {
                            setnavbar(false)
                        }}>Help</li>
                    </ul>
                    {
                        logedin ?
                            <section className=' flex items-center m-2 cursor-pointer'>
                                <CgProfile size={33} className=' text-black' />
                                <h1 className=' text-black text-lg' onClick={() => {
                                    setnavbar(false)
                                    navigate("/profile")
                                }}>{contextusername}</h1>
                            </section>
                            :
                            <section className=' cursor-pointer'>
                                <button className=' text-black font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white' onClick={() => {
                                    setnavbar(false)
                                    navigate("/auth/login")
                                }}>Login</button>
                                <button className=' text-black mx-2 font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white' onClick={() => {
                                    setnavbar(false)
                                    navigate('/auth/signup')
                                }}>Sighup</button>
                            </section>

                    }
                </div>
                <ul className=' flex p-4 absolute sm:right-36'>
                    <li className=" cursor-pointer" onClick={handletheme}>{theme == 'light' ? <MdDarkMode size={27} className=' text-black' /> : <MdOutlineLightMode size={27} className=' text-black' />}</li>
                    <li className=' mx-2 font-semibold hover:border-b-2 border-green-600 text-md text-black'><Link to="discuss">Discuss</Link></li>
                    <li className=' mx-2 font-semibold hover:border-b-2 border-green-600 text-md text-black'><Link to="practice">Practice</Link></li>
                    <li className=' mx-2 font-semibold hover:border-b-2 border-green-600 text-md text-black'><Link to="certificate">Certificate</Link></li>
                    <section className={`${logedin ? "hidden max-[666px]:flex" : "hidden"} text-black`}>
                        <CgProfile size={30} />
                        <h1><Link to="/profile">{contextusername}</Link></h1>
                    </section>

                </ul>
                <div className=' max-[798px]:p-3 px-10 flex flex-col items-center h-[100%]'>
                    <div className=' max-[798px]:w-[100%]  w-[75%] flex flex-col justify-center items-center px-5 pt-6'>
                        <h1 className={` my-1 text-[48px] sm:text-[55px] font-bold text-black`}>Code Master</h1>
                        <p className='text-[18px] sm:text-[21px] my-2 text-center text-black'>Code master is platform to leran fundamentals of coding.It also provide online compiler for various languages like c++, java, python etc. Code mater also provide set of questions to test your coding skills.</p>
                        <section className=' flex my-3'>
                            <button onClick={scrollToSection} className='text-black font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white'>Start Learning</button>
                            <Link to="/compiler"><section className='text-black flex mx-4  font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-none hover:text-white'>
                                <HiCode size={25} className='  mx-1' />
                                <button className='  font-bold'> Compiler</button>
                            </section>
                            </Link>
                        </section>
                    </div>
                    <div className=' max-[798px]:w-[100%] max-[798px]:h-[30vh] h-auto w-[75%] flex justify-center items-center '>
                        <img src={photo} alt="" className=' w-[73%] h-[90%] sm:h-[80%]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home