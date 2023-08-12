import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { GiCancel } from 'react-icons/gi'
import { AiFillGoogleCircle, AiFillGithub, AiFillFacebook } from 'react-icons/ai'
import { PulseLoader } from 'react-spinners'

function Signup() {
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [err, seterr] = useState(false)
    const [statement, setstatement] = useState("")
    const [loader, setloader] = useState(false)
    const navigate = useNavigate()
    const url = import.meta.env.VITE_BACKEND;

    const handlesubmit = async (e) => {
        e.preventDefault()
        setloader(true)
        const data = {
            "username": username,
            "email": email,
            "password": password,
            "fname": fname,
            "lname": lname
        }

        const result = await axios.post(`${url}/user/signup`, { data: data })
        console.log(result);
        if (result.data.data.success) {
            setstatement("Account created sucessfully.")
            seterr(true)
        }
        else {
            setstatement("Username already exist.")
            seterr(true)
        }
        setloader(false)
        setfname("")
        setlname("")
        setusername("")
        setpassword("")
        setemail("")
    }
    return (
        <div className=' sm:p-2'>
            {(loader ? <section className=' text-center'><PulseLoader size={15} color='green' /></section> :
                <section className={` ${err ? "" : "hidden"} p-1 px-3 flex justify-between items-center bg-green-600 text-white rounded-lg `} >
                    <h1 className=' text-center font-semibold text-md'>{statement}</h1>
                    <GiCancel size={20} onClick={() => {
                        seterr(false)
                    }} />
                </section>
            )}
            <form action="" onSubmit={handlesubmit}>
                <section className=' flex'>
                    <section className=' mx-2'>
                        <h1 className=' font-bold text-xl my-1'>First Name:</h1>
                        <input type='text' className=' w-[100%] p-2 rounded-2xl border-2 px-4' value={fname} placeholder='Enter first name' onChange={(e) => {
                            setfname(e.target.value)
                        }} />
                    </section>
                    <section className=' mx-2'>
                        <h1 className=' font-bold text-xl my-1'>Last Name:</h1>
                        <input type='text' className=' w-[100%] p-2 rounded-2xl border-2 px-4' value={lname} placeholder='Enter last name' onChange={(e) => {
                            setlname(e.target.value)
                        }} />
                    </section>
                </section>
                <h1 className=' font-bold text-xl my-1'>Username:</h1>
                <input type='text' className=' w-[100%] p-2 rounded-2xl border-2 px-4' value={username} placeholder='Enter username' onChange={(e) => {
                    setusername(e.target.value)
                }} />
                <h1 className=' font-bold text-xl my-1'>Password:</h1>
                <input type='password' className=' w-[100%] p-2 rounded-2xl border-2 px-4' value={password} placeholder='Enter password' onChange={(e) => {
                    setpassword(e.target.value)
                }} />
                <h1 className=' font-bold text-xl my-1'>Email:</h1>
                <input type='email' className=' w-[100%] p-2 rounded-2xl border-2 px-4' value={email} placeholder='Enter email' onChange={(e) => {
                    setemail(e.target.value)
                }} /><br />
                {/* <h1 className=' font-bold text-xl my-1'>Mobile No.:</h1>
                <input type='number' className=' w-[100%] p-2 rounded-2xl border-2' placeholder='  Enter password' /><br /> */}
                <section className=' flex flex-col justify-center items-center'>
                    <input type='submit' className=' bg-green-600 p-1 w-[90%] rounded-2xl text-white font-semibold mt-6' />
                    <h1 className=' font-semibold'>or</h1>
                    <section className=' flex'>
                        <AiFillGoogleCircle size={36} className=' mx-2' />
                        <AiFillFacebook size={36} className=' mx-2' />
                        <AiFillGithub size={36} className=' mx-2' />
                    </section>
                    <h1 className=' font-semibold'>If already have account then login</h1>
                </section>
            </form>
        </div>
    )
}

export default Signup
