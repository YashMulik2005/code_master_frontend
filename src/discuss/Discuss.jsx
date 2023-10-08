import React from 'react'
import photo from '../assets/discuss.png'
import themehook from '../components/CodeContext'
import { Link } from 'react-router-dom'

function Discuss() {
    const { theme } = themehook()

    return (
        <div className={` ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} flex flex-col items-center justify-center p-3`}>
            <section className='h-[50%]'>
                <img src={photo} alt="" className=' w-[100%] h-[50%]' />
            </section>
            <section className='h-[50%] flex flex-col justify-center items-center p-5'>
                <h1 className={`${theme == "light" ? "text-black" : "text-white"} text-xl font-bold`}>Code-Master Discuss</h1>
                <p className=' text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae delectus mollitia doloremque nesciunt corporis commodi porro atque nobis? Cumque iste nostrum veritatis nobis fugiat voluptatem et ea. Consequuntur, adipisci illo?</p>
                <button className=' border-[1px] border-gray-400 rounded-3xl px-6 py-[3px] m-2 font-semibold hover:bg-green-600 hover:text-white hover:border-green-600 '><Link to={"/discuss"}>Start</Link></button>
            </section>
        </div>
    )
}

export default Discuss