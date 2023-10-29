import React from 'react'
import themehook from './CodeContext'
import { BiSolidUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import photo from '../assets/certify.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Review() {
    const { theme } = themehook()
    return (
        <div className=' w-[100%] sm:h-[500px] p-5'>
            <div className=' flex m-4 flex-col-reverse sm:flex-row h-[100%]'>
                <div className=' w-[100%] h-[100%] sm:w-[45%] p-3'>
                    <LazyLoadImage src={photo} alt="" className=' w-[100%] h-[100%]' effect='blur' />
                </div>
                <div className=' w-[100%] sm:w-[55%] p-3 sm:px-5 flex flex-col justify-center items-center'>
                    <h1 className={`${theme == "light" ? "text-black" : "text-white"} my-[2px] font-bold text-lg sm:text-xl `}>Certify yourself with various skills </h1>
                    <p className=' text-md sm:text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellat excepturi ducimus quis vitae repellendus, maxime amet libero nemo explicabo ea maiores odio quo ratione possimus molestiae reprehenderit enim voluptatum cupiditate praesentium veritatis!</p>
                    <button className=' font-bold border-[1px] rounded-3xl px-5 py-[2px] m-2 hover:bg-green-600 hover:text-white hover:border-green-600'><Link to={'/certificate'}>certify</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Review