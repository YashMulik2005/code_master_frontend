import React, { useEffect, useState } from 'react'
import themehook from '../components/CodeContext'
import axios from 'axios'
import { Link } from "react-router-dom"

function Topicdata() {
    const { topic_id, theme, course_id, contextusername, setnavbar } = themehook()
    // console.log(topic_id)
    const [data, setdata] = useState([])
    const [question1, setquestion1] = useState("")
    const [question2, setquestion2] = useState("")
    const [ansstatus, setansstatus] = useState(false)
    const [border1, setborder1] = useState(false)
    const [border2, setborder2] = useState(false)
    const [title, settitle] = useState("")
    const [note, setnote] = useState("")
    const url = import.meta.env.VITE_BACKEND;

    const handlenav = () => {
        setnavbar(false)
    }

    const getdata = async () => {
        if (topic_id == undefined) {
            console.log("login and enroll to course to see course modules");
        } else {
            const data = {
                "t_id": topic_id
            }
            const result = await axios.post(`${url}/course/singletopic`, { data: data })
            console.log(result);
            setdata(result.data.data.result)
        }
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        if (question1 == data?.ans1 && question2 == data?.ans2) {
            setansstatus(true)
            setborder1(false)
            setborder2(false)
            const data = {
                "u_id": contextusername,
                "t_id": topic_id,
                "c_id": course_id
            }
            const result = await axios.post(`${url}/course/topiccomplete`, { data: data })
            if (result.data.data.success) {
                settitle("Right!!!!")
                setnote("Both answers are right and module is complete.")
                window.my_modal_3.showModal()
            }
            else {
                settitle("Error!!!!")
                setnote("Something went wrong try again.")
                window.my_modal_3.showModal()
            }
        }
        else {
            if (question1 != data?.ans1 && question2 == data?.ans2) {
                setansstatus(false)
                setborder1(true)
                setborder2(false)
                console.log("q1 r");
            }
            else if (question1 == data?.ans1 && question2 != data?.ans2) {
                setansstatus(false)
                setborder1(false)
                setborder2(true)
                console.log("q2 r");
            }
            else {
                setansstatus(false)
                setborder1(true)
                setborder2(true)
                console.log("both w");
            }
        }
    }

    const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = 'If you reload the page will become non-functional.'; // This is required for Chrome to show a custom message
    };

    useEffect(() => {
        getdata()

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [])

    return (
        <div className=" sm:mx-20" onClick={handlenav}>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-2xl text-green-600">{title}</h3>
                    <p className="py-4 text-xl">{note}</p>
                    <button className={` ${ansstatus ? "" : "hidden"} bg-green-600 py-1 px-4 rounded-xl text-white font-semibold `}><Link to={`/course/${course_id}`}>Next Module</Link></button>
                </form>
            </dialog>

            <div className='p-3 sm:p-5'>
                <h1 className='text-xl sm:text-3xl font-bold text-green-600 my-2'>{data.name1}</h1>
                <p className=' text-md sm:text-lg'>{data.description1}</p>
                <h1 className=' text-xl sm:text-3xl font-bold text-green-600 my-2'>{data.name2}</h1>
                <p className=' text-md sm:text-lg'>{data.description2}</p>
                <div >
                    {/* {("kayword variable_name = value;" == item.syntax ? console.log("yes") : console.log("no"))} */}
                    <h1 className=' text-lg text-green-600 font-bold my-2'>Syntex</h1>
                    <pre className=' p-4 bg-gray-900 text-white my-3 rounded-md'>{data.syntax}</pre>
                </div>
                <div className=' relative'>
                    <button className=' absolute right-4 top-2'>copy</button>
                    <h1 className=' text-lg text-green-600 font-bold my-2'>Example</h1>
                    <pre className=' p-4 bg-gray-900 text-white my-3 rounded-md'>{data.example}</pre>
                </div>
                <div className={` ${theme == "light" ? "bg-[#edf1d6]" : " bg-gray-950"} text-lg font-semibold my-5 rounded-md p-5`}>
                    <h1 className=' text-center text-2xl my-4 text-green-600'>Answers following questions to complete module.</h1>
                    <form className=' p-3'>
                        <label className=' my-2 text-md'>Question 1: {data.question1}</label><br />
                        <input type='text' className={` ${border1 ? " shadow-md shadow-red-700" : "border-0"} w-[100%] p-2 px-4 rounded outline-none my-3`} value={question1} onChange={(e) => {
                            setquestion1(e.target.value)
                            setborder1(false)
                        }}></input><br />
                        <label className=' my-2 text-md'>Question 2: {data.question2}</label><br />
                        <input type='text' className={` ${border2 ? "shadow-md shadow-red-700" : "border-0"} w-[100%] p-2 px-4 rounded outline-none my-3`} value={question2} onChange={(e) => {
                            setquestion2(e.target.value)
                            setborder2(false)
                        }}></input>
                        <input type='submit' className=' bg-green-600 text-white py-1 px-5 rounded-3xl' onClick={handlesubmit} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Topicdata