import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Profile() {
    const navigate = useNavigate()

    const handlelogout = async () => {
        const result = await axios.get("http://localhost:3000/profile")
        console.log(result);
        if (result.data.data.sucess) {
            navigate("/")
        }
    }

    return (
        <div>
            <button onClick={handlelogout}>logout</button>
        </div>
    )
}

export default Profile