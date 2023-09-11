import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import themehook from './CodeContext'
import { BiCodeAlt } from 'react-icons/bi'


function Profile() {
    const navigate = useNavigate()
    const { logedin, setlogedin, setcontextusername, setnavbar, theme } = themehook()
    const url = import.meta.env.VITE_BACKEND;

    const handlelogout = async () => {
        localStorage.removeItem("username");
        setlogedin(false)
        setcontextusername("")
        navigate("/")
    }

    const handlenav = () => {
        setnavbar(false)
    }

    const handlesearch = () => {

    }

    return (
        <div onClick={handlenav} className=' h-[90vh]'>
            <div className=' flex items-center justify-between p-5'>
                <h1 className=' font-bold'>USER PROFILE</h1>
                <section className=' flex w-[50%] justify-center items-center '>
                    <form action="" onSubmit={handlesearch} className=' w-[100%]'>
                        <input type="text" required className={`${theme == "dark" ? "border-none focus:outline-none" : "border-2"}  px-4 py-1 w-[100%] rounded-full focus:outline-none `} placeholder='search here' />
                    </form>
                    <div className=' rounded-full bg-[#39A84B] group-hover:bg-[#C5E7CB] p-1 mx-5'>
                        <BiCodeAlt size={27} className=' text-white group-hover:text-[#39A84B]' />
                    </div>
                </section>
            </div>
            <div className=' flex h-[80vh] p-8'>
                <div className=' bg-black h-[100%] w-[30%] rounded-xl'>

                </div>
                <div className=' w-[70%]'>
                    <div className=' flex'>
                        <div className=' w-[33%] h-32 bg-black rounded-lg mx-5' > </div>
                        <div className=' w-[33%] h-32 bg-black rounded-lg mx-5'></div>
                        <div className=' w-[33%] h-32 bg-black rounded-lg mx-5'></div>
                    </div>
                    <div className=' bg-black w-[94%] h-[68%] mx-5 rounded-lg my-5'>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile