import React, { useEffect, useState } from 'react'
import { GrCloudComputer } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import QuestionCard from './QuestionCard'
import UserQuestionCard from './UserQuestionCard'
import themehook from '../components/CodeContext'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import QuestionSkeleton from './QuestionSkeleton'
import UserQuestionSkeleton from './UserQuestionSkeleton'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'

function Forum() {

    const { theme, settheme, logedin, contextusername } = themehook()
    const [data, setdata] = useState();

    const handletheme = () => {
        if (theme == "light") {
            settheme("dark")
        }
        else {
            settheme("light")
        }
    }

    const getdata = () => {
        const result = axios.get("http://localhost:3000/discuss/");
        console.log(result);
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localtheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute("data-theme", localtheme)

        // getdata()
    }, [theme])

    return (
        <div className=' w-full'>
            <div className=' shadow-lg py-5 px-2 sm:p-5 flex justify-between sm:justify-between items-center'>
                <section className=' flex items-center'>
                    <GrCloudComputer size={30} />
                    <h1 className=' font-bold text-[#40513b] mx-2'><u>CODE MASTER</u></h1>
                </section>
                <section className='hidden sm:w-[50%] sm:flex justify-center'>
                    <input type="text" className={`${theme == "dark" ? "border-none focus:outline-none" : "border-2"}  px-4 py-1 w-[80%] rounded-full focus:outline-none `} placeholder='search here' />
                </section>
                <section className=' '>
                    {logedin ? <section className=' flex justify-center items-center'>
                        <CgProfile size={33} className='' />
                        <h1 className=' font-bold'>{contextusername}</h1>
                    </section> : <section>
                        <button className=' bg-green-600 text-white px-5 p-1 mx-1sm:mx-2 font-bold rounded-full'>Login</button>
                        <button className=' bg-green-600 text-white px-5 p-1 mx-1 sm:mx-2 font-bold rounded-full'>Sign up</button>
                    </section>}

                </section>
            </div>
            <section className='sm:hidden flex justify-center m-4'>
                <input type="text" className=' border-2 px-4 py-1 w-[80%] rounded-full' placeholder={<div className=' flex justify-center items-center '><p>Search here</p><BsSearch size={33} color='black' /></div>} />
            </section>

            <div className=' flex w-full p-2 sm:p-8'>
                <div className=' w-[100%] sm:w-[72%] '>
                    <div className=' flex justify-between items-center'>
                        <section className={` w-28 py-1 px-3 border-[1px] rounded-lg  ${theme == "dark" ? "bg-gray-950 border-none shadow-black shadow-md" : "shadow-lg"}`} >
                            <p>Latest First</p>
                        </section>
                        {theme == "light" ? <MdDarkMode size={33} onClick={handletheme} /> : <MdOutlineLightMode size={33} onClick={handletheme} />}
                    </div>
                    <div className='h-[80vh] overflow-y-auto m-1'>
                        <QuestionSkeleton />
                        <QuestionSkeleton />
                        <QuestionSkeleton />
                        <QuestionSkeleton />
                        <QuestionCard />
                        <QuestionCard />
                        <QuestionCard />
                        <QuestionCard />
                    </div>
                </div>
                <div className='hidden sm:block w-[30%] p-5 '>
                    <div className='flex flex-col items-center'>
                        <section className={` flex justify-center bg-green-600 shadow-lg ${theme == 'dark' ? "" : "shadow-green-200"} text-white py-1 px-3 w-[70%] font-bold rounded-lg`}>
                            <p>Ask new question</p>
                        </section>
                    </div>
                    <h1 className=' font-bold m-3'>Your Questions</h1>
                    <div>
                        <UserQuestionSkeleton />
                        <UserQuestionSkeleton />
                        <UserQuestionSkeleton />
                        <UserQuestionCard /><UserQuestionCard /><UserQuestionCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum