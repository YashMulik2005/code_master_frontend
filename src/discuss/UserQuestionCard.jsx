import React from 'react'
import themehook from '../components/CodeContext'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

function UserQuestionCard({ heading, time, id, desc }) {

    const { theme } = themehook()
    const navigate = useNavigate()
    return (
        <div onClick={() => {
            navigate(`/discuss/${id}`)
        }} className={`border-[1px] rounded-lg shadow-sm p-2 my-2 ${theme == "dark" ? "border-none bg-[#0c131d] shadow-md" : "bg-[#f5f1f0]"}`}>
            <h1 className=' text-sm font-semibold'>{moment(time).fromNow()}</h1>
            <h1 className=' font-bold text-green-600'>{heading}</h1>
            <h1>{desc}</h1>
        </div>
    )
}

export default UserQuestionCard