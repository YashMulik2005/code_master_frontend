import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import axios from 'axios';
import Questiontext from '../compiler/Questiontext';
import Compiler from './Compiler';
import themehook from '../components/CodeContext';
import { BarLoader } from 'react-spinners'

function Certifytest() {
    const { theme, certifyflag, setcertifyflag, settimeout, setfirst, setsecond, first, second } = themehook()
    const { c_id, t_id } = useParams()
    let seconds = 900;
    const [min, setmin] = useState(Math.floor(seconds / 60))
    const [sec, setsec] = useState(Math.floor(seconds % 60))
    const [status, setstatus] = useState(false)
    const [title, settitle] = useState("")
    const [text, settext] = useState("")
    const [data, setdata] = useState()
    const [loader, setloader] = useState(false)
    const url = import.meta.env.VITE_BACKEND;

    const navigate = useNavigate();

    const getdata = async () => {
        console.log(certifyflag);
        if (certifyflag) {
            setloader(true)
            const rdata = {
                "t_id": t_id
            }
            const result = await axios.post(`${url}/certify/question`, { data: rdata })
            console.log(result);
            setdata(result.data.data.result)
            setloader(false)
        }
        else {
            navigate("/certificate")
        }
    }
    useEffect(() => {
        getdata()

        const interval = setInterval(() => {
            seconds = seconds - 1;
            if (seconds < 0) {
                clearInterval(interval)
                settitle("Time up!!!!")
                settext("time given for this question is finish.")
                settimeout(true)
                if (first.length > 0) {
                    setsecond(t_id)
                } else {
                    setfirst(t_id)
                }
                navigate(`/certificate/dashboard/${c_id}`)
                console.log("timeup");
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
            {(loader ? <section className=' flex justify-center items-center h-[100vh]'><BarLoader size={30} color='green' /></section> :
                <div>
                    <div className=' h-[13vh] flex items-center shadow-xl justify-between '>

                        <section className=' bg-[#191919] h-[70%] flex justify-center items-center rounded-md p-3 mx-4'>
                            <h1 className={` font-bold text-xl ${theme == "light" ? "text-white" : ""} `}>End in <span id='timer'>{min < 10 ? "0" + min : min}</span>{sec < 10 ? ":0" + sec : ":" + sec}<span></span></h1>
                        </section>

                        <section className=' mx-4 font-semibold'>
                            <h1>{data?.name}</h1>
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
            )}

        </div>
    )
}

export default Certifytest
