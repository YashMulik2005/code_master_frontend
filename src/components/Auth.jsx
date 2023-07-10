import React, { useState } from 'react'
import photo from '../assets/login_img.png'
import { Link, Outlet } from 'react-router-dom'

function Auth() {

    const [border, setborder] = useState(true)
    return (
        <>
            <div className=' flex h-[92vh]'>
                <div className=' hidden sm:flex w-1/2 justify-center items-center bg-[#609966]'>
                    <img src={photo} alt="" className='w-[80%] h-[80%] object-contain' />
                </div>
                <div className='flex flex-col w-full sm:w-1/2  justify-center items-center'>
                    <section className=' flex'>
                        <Link to='/auth/login' className={`font-bold text-2xl text-green-600 m-4 my-1 border-green-600 ${border ? "border-b-4" : "border-b-0"}`} onClick={() => {
                            setborder(!border)
                        }}>Login</Link>
                        <Link to='/auth/Signup' className={` font-bold text-2xl text-green-600 m-4 my-1 border-green-600 ${border ? "border-b-0" : "border-b-4"} `} onClick={() => {
                            setborder(!border)
                        }}>Signup</Link>
                    </section>
                    <section className=' w-[85%] p-5 '>
                        <Outlet />
                    </section>
                </div>
            </div>
        </>
    )
}

export default Auth
