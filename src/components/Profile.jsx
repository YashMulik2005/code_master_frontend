import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import themehook from './CodeContext'


function Profile() {
    const navigate = useNavigate()
    const { logedin, setlogedin, setcontextusername } = themehook()
    const url = import.meta.env.VITE_BACKEND;

    const handlelogout = async () => {
        localStorage.removeItem("username");
        setlogedin(false)
        setcontextusername("")
        navigate("/")
    }

    const handleadd = () => {
        // const data = {
        //     "name": `How much Scholarship`,
        //     "description": `The ZCO Scholarship Contest has just finished, and you finish with a rank of R. You know that Rank 1 to Rank 50 will get 100% scholarship on the ZCO exam fee and Rank 
        //     51 to Rank 100 will get 50% percentage scholarship on the ZCO exam fee. The rest do not get any scholarship.What percentage of scholarship will you get ?`,
        //     "topic": `basic programming`,
        //     "input_format": `Input consist of single line of input containing one integer R.`,
        //     "output_format": `Output a single line containing one integer — the percentage of scholarship you will get.`,
        //     "testcase1": `49`,
        //     "testcase1_ans": `100\n`,
        //     "testcase2": `317`,
        //     "testcase2_ans": `0\n`,
        //     "explanation": `Since 1≤49≤50, answer is 100 percentage scholarship.`,
        // }
        // const data = {
        //     "c_id": "64b6786debbb52b171c6b3f3",
        //     "u_id": "yash04",
        //     "status": "yes"
        // }
        // const res = axios.post(`${url}/user/add`, { data: data })
        // console.log(res);
    }

    return (
        <div >
            <button onClick={handlelogout}>logout</button>
            <button onClick={handleadd}>add</button>
        </div>
    )
}

export default Profile