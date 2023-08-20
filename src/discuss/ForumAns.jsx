import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ForumAns() {
    const { id } = useParams()
    console.log(id);

    const url = import.meta.env.VITE_BACKEND;

    const getques = async () => {
        const data = {
            "id": id
        }
        const result = await axios.post(`${url}/discuss/fullque`, { data: data })
        console.log(result);
    }

    useEffect(() => {
        getques()
    }, [])

    return (
        <div>ForumAns</div>
    )
}

export default ForumAns