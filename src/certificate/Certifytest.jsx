import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import axios from 'axios';
import Questiontext from '../compiler/Questiontext';
import Compiler from './Compiler';

function Certifytest() {
    const { c_id, t_id } = useParams()
    let seconds = 1200;
    const [min, setmin] = useState(Math.floor(seconds / 60))
    const [sec, setsec] = useState(Math.floor(seconds % 60))
    const [status, setstatus] = useState(false)
    const [title, settitle] = useState("")
    const [text, settext] = useState("")
    const [data, setdata] = useState()
    const url = import.meta.env.VITE_BACKEND;
    const getdata = async () => {
        const rdata = {
            "t_id": t_id
        }
        const result = await axios.post(`${url}/certify/question`, { data: rdata })
        console.log(result);
        setdata(result.data.data.result)
    }
    useEffect(() => {
        getdata()
        const interval = setInterval(() => {
            seconds = seconds - 1;
            if (seconds < 0) {
                clearInterval(interval)
                settitle("Time up!!!!")
                settext("time given for this question is finish.")
                window.my_modal_3.showModal();
            } else {
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                setmin(mins);
                setsec(secs);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{text}</p>
                    <button className=' bg-green-700 text-white font-bold py-1 px-4 rounded-3xl'><Link to={`/certificate/dashboard`}>Dashboard</Link></button>
                </form>
            </dialog>
            <div className=' h-[13vh] flex items-center shadow-xl justify-between '>
                <section className=' flex items-center'>
                    <section className=' bg-[#191919] h-[70%] flex justify-center items-center rounded-md p-3 mx-4'>
                        <h1 className=' font-bold text-xl'>End in <span id='timer'>{min < 10 ? "0" + min : min}</span>{sec < 10 ? ":0" + sec : ":" + sec}<span></span></h1>
                    </section>
                    <section>
                        <h1>question1</h1>
                    </section>
                </section>
                <section className=' p-4'>
                    <MdOutlineLightMode size={30} />
                </section>
            </div>
            <div className=' flex flex-col sm:flex-row h-[89vh]'>
                <div className=' w-[100%] sm:w-[50%] border-b-2 sm:border-r-2 sm:border-b-0 p-2 sm:overflow-y-auto'>
                    <Questiontext maindata={data ? data : ""} />
                </div>
                <div className=' w-[100%] sm:w-[50%] sm:overflow-y-auto'>
                    <Compiler maindata={data ? data : ""} c_id={c_id} />
                </div>
            </div>
        </div>
    )
}

export default Certifytest