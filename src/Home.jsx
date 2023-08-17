import React, { useEffect, useRef } from 'react'
import { GrCloudComputer } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import photo from './assets/home_cover.png'
import bg from './assets/home_bg.gif'
import themehook from './components/CodeContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { HiCode } from 'react-icons/hi'

function Home() {
    const { theme, logedin, setlogedin, contextusername, setcontextusername, setnavbar } = themehook();
    axios.defaults.withCredentials = true;
    const url = import.meta.env.VITE_BACKEND;

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
        <div className='' onClick={handlenav}>
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
            <div className=' flex flex-col sm:flex-row'>
                <div className='w-full sm:w-[43%] h-[50vh] sm:h-[87vh] flex flex-col justify-center items-start p-5'
                //  bg-cover bg-center bg-blend-darken
                //     style={{
                //         backgroundImage: `url(${bg})`
                //     }}
                >
                    <h1 className={`text-3xl sm:text-5xl font-bold ${theme == 'light' ? "" : "text-white"}`}>Code Master</h1>
                    <p className='text-md sm:text-lg my-2'>Code master is platform to leran fundamentals of coding.It also provide online compiler for various languages like c++, java, python etc. Code mater also provide set of questions to test your coding skills.</p>
                    <section className=' flex'>
                        <button onClick={scrollToSection} className=' bg-green-700 text-white px-3 py-1 rounded-2xl font-semibold'>Start Learning</button>
                        <Link to="/compiler"><section className=' flex mx-4 '>
                            <HiCode size={30} className=' text-green-600 mx-1' />
                            <button className=' text-green-600 font-bold text-lg hover:border-b-2 border-green-600'> Compiler</button>
                        </section>
                        </Link>
                    </section>
                </div>
                <div className='w-full sm:w-[57%] sm:h-[87vh] flex justify-center items-center'>
                    <img src={photo} alt="" className=' w-[80%] h-full sm:h-[80%]' />
                </div>
            </div>
        </div>
    )
}

export default Home