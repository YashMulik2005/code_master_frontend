import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg'
import { FaFreeCodeCamp } from 'react-icons/fa6'
import themehook from '../components/CodeContext'
import { toast, Toaster } from 'react-hot-toast'

function Feedback() {

    const { theme, logedin, contextusername } = themehook()
    // Initialize state for each form field
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [performanceFeedback, setPerformanceFeedback] = useState('Excellent');
    const [interfaceFeedback, setInterfaceFeedback] = useState('Good');
    const [suggestions, setSuggestions] = useState('');

    // Callback function for handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // You can access the field values here and perform any actions (e.g., sending the data to a server)
        if (logedin) {
            toast.success("Feedback get submitted Sucessfully.....")
        }
        else {
            toast.error("Login first to send feedback....")
        }

        // Reset the form fields
        setUsername('');
        setEmail('');
        setPerformanceFeedback('Excellent');
        setInterfaceFeedback('Good');
        setSuggestions('');
    };

    return (
        <div>
            <div className='max-[666px]:hidden p-1 px-6 flex justify-between items-center '>
                <section onClick={() => {
                    navigate("/")
                }} className=' cursor-pointer'>
                    <section className=' flex items-center justify-center'>
                        <h1 className={`  font-bold text-md `}>Code</h1>
                        <section>
                            <FaFreeCodeCamp size={30} className={` text-green-700 mx-[2px] font-bold  `} />
                        </section>
                        <h1 className={` font-bold text-md `}>Master</h1>
                    </section>
                    {/* <section className=' flex  items-center justify-center mt-[-7px]'>
                            <hr className={` border-black w-8 border-t-2  `} />
                            <h1 className={` text-green-700 text-[12px] mx-[2px] font-semibold`}>learn with fun</h1>
                            <hr className={` border-black w-8 border-t-2  `} />
                        </section> */}
                </section>
                <ul className=" p-3 flex cursor-pointer ">
                    <li className={`inline mx-2 font-semibold border-b-2 ${theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"}  hover:border-green-600`} onClick={() => {
                        setnavbar(false)
                        navigate("/")
                    }}>Home</li>
                    <li className={`inline mx-2 font-semibold border-b-2 ${theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"}  hover:border-green-600`} onClick={() => {
                        setnavbar(false)
                        navigate("/About")
                    }}>About</li>
                    <li className={`inline mx-2 font-semibold border-b-2 ${theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"}  hover:border-green-600`} onClick={() => {
                        setnavbar(false)
                        navigate("/contact")
                    }}>Contact</li>
                    <li className={`inline mx-2 font-semibold border-b-2 ${theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"}  hover:border-green-600`} onClick={() => {
                        setnavbar(false)
                        navigate("/feedback")
                    }}>Feedback</li>
                </ul>
                {
                    logedin ?
                        <section className=' flex items-center m-2 cursor-pointer'>
                            <CgProfile size={33} className=' ' />
                            <h1 className=' text-lg' onClick={() => {
                                setnavbar(false)
                                navigate("/profile")
                            }}>{contextusername}</h1>
                        </section>
                        :
                        <section className=' cursor-pointer'>
                            <button className=' text-black font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-[#e9ffed] hover:text-white' onClick={() => {
                                setnavbar(false)
                                navigate("/auth/login")
                            }}>Login</button>
                            <button className=' text-black mx-2 font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-[#e9ffed] hover:text-white' onClick={() => {
                                setnavbar(false)
                                navigate('/auth/signup')
                            }}>Signup</button>
                        </section>

                }
            </div>

            <div className=' m-auto flex flex-col justify-center items-center p-8 sm:p-5'>
                <section className={` p-5 w-[100%] sm:p-7 sm:w-[55%] ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"}  rounded-lg`}>
                    <h2 className=' font-bold text-center text-xl '>Feedback Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className=' semi-bold'>Username:</label>
                            <input
                                type="text"
                                value={username}
                                required
                                onChange={(e) => setUsername(e.target.value)}
                                className=' px-3 py-[6px] rounded-xl my-[4px] w-[100%] focus:outline-none '
                            />
                        </div>
                        <div>
                            <label className=' semi-bold'>Email:</label>
                            <input
                                type="email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className=' px-3 py-[6px] rounded-xl my-[4px] w-[100%] focus:outline-none'
                            />
                        </div>
                        <div>
                            <label className=' semi-bold'>Performance Feedback:</label>
                            <select
                                value={performanceFeedback}
                                onChange={(e) => setPerformanceFeedback(e.target.value)}
                                className=' w-[100%] rounded-xl my-[4px] px-3 py-[6px] focus:outline-none'
                                required
                            >
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                                <option value="Poor">Poor</option>
                            </select>
                        </div>
                        <div>
                            <label className=' semi-bold'>Interface Feedback:</label>
                            <select
                                value={interfaceFeedback}
                                onChange={(e) => setInterfaceFeedback(e.target.value)}
                                className=' w-[100%] rounded-xl my-[4px] px-3 py-[6px] focus:outline-none'
                                required
                            >
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                                <option value="Poor">Poor</option>
                            </select>
                        </div>
                        <div>
                            <label className=' semi-bold'>Suggestions:</label>
                            <textarea
                                value={suggestions}
                                onChange={(e) => setSuggestions(e.target.value)}
                                className=' px-3 py-[6px] rounded-xl my-[4px] w-[100%] focus:outline-none'
                                required
                            />
                        </div>
                        <button type="submit" className=' px-5 py-[2px] rounded-3xl font-bold border-[1px] hover:bg-green-600 hover:text-white hover:border-green-600'>Submit</button>
                    </form>
                </section>
            </div>
            <Toaster />
        </div>
    );
}

export default Feedback;
