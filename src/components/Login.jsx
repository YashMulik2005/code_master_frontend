import React, { useState } from 'react'
import themehook from './CodeContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { GiCancel } from 'react-icons/gi'
import { AiFillGoogleCircle, AiFillGithub, AiFillFacebook } from 'react-icons/ai'

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [err, seterr] = useState(false)
    const { theme, setcontextusername, setlogedin } = themehook()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;

    const handlesubmit = async (e) => {
        e.preventDefault()

        const data = {
            "username": username,
            "password": password
        }
        try {
            const result = await axios.post('http://localhost:3000/login', { data: data })
            console.log(result.data.data.sucess);
            if (result.data.data.sucess) {
                navigate("/")
            } else {
                setlogedin(false)
                seterr(true)
            }
        }
        catch (error) {
            console.log(error.response.data);
        }
        setusername("")
        setpassword("")
    }
    return (
        <div className=' sm:p-2'>
            <section className={` ${err ? "" : "hidden"} p-1 px-3 flex justify-between items-center bg-green-600 text-white rounded-lg `} >
                <h1 className=' text-center font-semibold text-md'>Username or password is invalid.</h1>
                <GiCancel size={20} onClick={() => {
                    seterr(false)
                }} />
            </section>
            <form action="" onSubmit={handlesubmit}>
                <h1 className=' font-bold text-xl my-3'>Username:</h1>
                <input type='text' className=' w-[100%] p-2 rounded-2xl border-2' value={username} placeholder='Enter username' onChange={(e) => {
                    setusername(e.target.value)
                }} />
                <h1 className=' font-bold text-xl my-3'>Password:</h1>
                <input type='password' className=' w-[100%] p-2 rounded-2xl border-2' value={password} placeholder='Enter password' onChange={(e) => {
                    setpassword(e.target.value)
                }} /><br />
                <section className=' flex flex-col justify-center items-center'>
                    <input type='submit' className=' bg-green-600 p-1 w-[90%] rounded-2xl text-white font-semibold mt-6' />
                    <h1 className=' font-semibold'>or</h1>
                    <section className=' flex'>
                        <AiFillGoogleCircle size={36} className=' mx-2' />
                        <AiFillFacebook size={36} className=' mx-2' />
                        <AiFillGithub size={36} className=' mx-2' />
                    </section>
                    <h1 className=' font-semibold'>If don't have account then signup</h1>
                </section>
            </form>
        </div>
    )
}

export default Login