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

function Home() {
    const { theme, logedin, setlogedin, contextusername, setcontextusername, setnavbar } = themehook();
    axios.defaults.withCredentials = true;
    const url = import.meta.env.VITE_BACKEND;

    const navigate = useNavigate();

    const scrollToSection = () => {
        const aboutSection = document.getElementById('course');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handlenav = () => {
        setnavbar(false)
    }

    useEffect(() => {

    }, [])

    return (
        <div className='bgrounded mb-5' onClick={handlenav}>
            <div className=' absolute z-[1]'>
                <div className='hidden p-1 px-6 sm:flex justify-between '>
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
                <div>
                    <ul className=' flex p-4 absolute sm:right-36'>
                        <li className=' mx-2 font-semibold hover:border-b-2 border-green-600 text-md'><Link to="discuss">Discuss</Link></li>
                        <li className=' mx-2 font-semibold hover:border-b-2 border-green-600 text-md'><Link to="practice">Practice</Link></li>
                        <li className=' mx-2 font-semibold hover:border-b-2 border-green-600 text-md'><Link to="certificate">Certificate</Link></li>
                        <section className={`${logedin ? "" : "hidden"} flex `}>
                            <CgProfile size={30} />
                            <h1><Link to="/profile">{contextusername}</Link></h1>
                        </section>
                    </ul>
                </div>
                <div className=' max-[798px]:p-3 px-10 flex flex-col items-center'>
                    <div className=' max-[798px]:w-[100%]  w-[75%] flex flex-col justify-center items-center p-5 pt-6'>
                        <h1 className={` my-1 text-[48px] sm:text-[60px] font-bold ${theme == 'light' ? "" : "text-white"}`}>Code Master</h1>
                        <p className='text-[18px] sm:text-[22px] my-2 text-center'>Code master is platform to leran fundamentals of coding.It also provide online compiler for various languages like c++, java, python etc. Code mater also provide set of questions to test your coding skills.</p>
                        <section className=' flex my-3'>
                            <button onClick={scrollToSection} className=' font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-black hover:bg-[#39a84b] hover:border-none hover:text-white'>Start Learning</button>
                            <Link to="/compiler"><section className=' flex mx-4  font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-black hover:bg-[#39a84b] hover:border-none hover:text-white'>
                                <HiCode size={25} className='  mx-1' />
                                <button className='  font-bold  '> Compiler</button>
                            </section>
                            </Link>
                        </section>
                    </div>
                    <div className=' max-[798px]:w-[100%] max-[798px]:h-[30vh] h-auto w-[75%] flex justify-center items-center'>
                        <img src={photo} alt="" className=' w-[80%] h-[90%] sm:h-[80%]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home