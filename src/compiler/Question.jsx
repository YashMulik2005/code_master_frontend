import React, { useEffect, useState } from 'react'
import Questiontext from './Questiontext'
import Questioncompiler from './Questioncompiler'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import themehook from '../components/CodeContext';
import { BarLoader } from 'react-spinners'

function Question() {
    const { theme, settheme, contextusername } = themehook()
    const [data, setdata] = useState()
    const [status, setstatus] = useState()
    const [loader, setloader] = useState(false)
    const { id } = useParams();
    console.log(id);
    const url = import.meta.env.VITE_BACKEND;

    const getdata = async () => {
        setloader(true)
        const data = {
            "username": contextusername
        }
        const result = await axios.post(`${url}/practice/question/${id}`, { data: data });
        setdata(result.data.data.r.q_data)
        console.log(result.data.data.r.q_data);
        setstatus(result.data.data.r.status);
        setloader(false)
    }

    const handletheme = () => {
        if (theme == "light") {
            settheme("dark")
        }
        else {
            settheme("light")
        }
    }

    useEffect(() => {
        getdata()

        localStorage.setItem("theme", theme)
        const localtheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute("data-theme", localtheme)
    }, [theme])
    return (
        <div>
            {(loader ? <section className=' flex justify-center items-center w-[100%] h-[100vh]'><BarLoader size={80} color='green' /></section> :
                <div>
                    {
                        data?.map((item, index) => {
                            return <div className=' flex items-center border-b-2 p-3 py-3 relative' key={index}>
                                <h1 className=' text-lg sm:text-2xl sm:mx-3 font-bold'>{item.name}</h1>
                                {theme == "light" ? <MdDarkMode size={26} className='mx-2 sm:mx-3' onClick={handletheme} /> : <MdOutlineLightMode size={26} className='mx-2 sm:mx-3' onClick={handletheme} />}
                                <h1 className='hidden sm:block sm:mx-3 font-semibold'>{item.topic}</h1>
                                <h1 className=' font-semibold absolute right-4'>{status}</h1>
                            </div>
                        })
                    }
                    <div className=' flex flex-col sm:flex-row h-[89vh]'>
                        <div className=' w-[100%] sm:w-[50%] border-b-2 sm:border-r-2 sm:border-b-0 p-2 sm:overflow-y-auto'>
                            <Questiontext maindata={data ? data[0] : ""} />
                        </div>
                        <div className=' w-[100%] sm:w-[50%] sm:overflow-y-auto'>
                            <Questioncompiler maindata={data ? data[0] : ""} />
                        </div>
                    </div>

                </div >
            )}

        </div>
    )
}

export default Question

// #include <iostream>
// using namespace std;

// int main() {
// 	// your code goes here
// 	int rank;
// 	cin>>rank;
// 	if(rank>=1 && rank<=50){
// 	    cout<<100<<endl;
// 	}
// 	else if(rank>50 && rank<=100){
// 	    cout<<50<<endl;
// 	}
// 	else{
// 	    cout<<0<<endl;
// 	}
// 	return 0;
// }