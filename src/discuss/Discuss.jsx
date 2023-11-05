import React from 'react'
import photo from '../assets/discuss.png'
import themehook from '../components/CodeContext'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Discuss() {
    const { theme } = themehook()

    return (
        <div className={` ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} flex flex-col items-center justify-center p-3`}>
            <section className='h-[50%]'>
                <LazyLoadImage src={photo} alt="" className=' w-[100%] h-[50%]' effect='blur' />
            </section>
            <section className='h-[50%] flex flex-col justify-center items-center p-5'>
                <h1 className={`${theme == "light" ? "text-black" : "text-white"} text-xl font-bold`}>Code-Master Discuss</h1>
                <p className=' text-center'>Introducing "Code-Master Discuss" – Your go-to platform for collaborative learning and problem-solving! Have a coding conundrum or a tech query? Dive into a vibrant community of fellow Code-Masters who are eager to share their knowledge and help you unravel the mysteries of programming. Ask questions, share insights, and engage in insightful discussions. Whether you're a seasoned developer or just starting your coding journey, this is the place to connect, learn, and grow together. Get ready to unlock the power of collective expertise at Code-Master Discuss!</p>
                <button className=' border-[1px] border-gray-400 rounded-3xl px-6 py-[3px] m-2 font-semibold hover:bg-green-600 hover:text-white hover:border-green-600 '><Link to={"/discuss"}>Start</Link></button>
            </section>
        </div>
    )
}

export default Discuss