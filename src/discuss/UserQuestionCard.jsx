import React from 'react'
import themehook from '../components/CodeContext'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

function UserQuestionCard({ heading, time, id }) {

    const { theme } = themehook()
    const navigate = useNavigate()
    return (
        <div onClick={() => {
            navigate(`/discuss/${id}`)
        }} className={`border-[1px] rounded-lg shadow-lg p-2 my-2 ${theme == "dark" ? "border-none bg-gray-950 shadow-black shadow-md" : "shadow-lg"}`}>
            <h1 className=' text-sm'>{moment(time).fromNow()}</h1>
            <h1 className=' font-bold text-green-600'>{heading}</h1>
        </div>
    )
}

export default UserQuestionCard