import React from 'react'
import themehook from '../components/CodeContext'

function UserQuestionCard() {

    const { theme } = themehook()
    return (
        <div className={`border-[1px] rounded-lg shadow-lg p-2 my-2 ${theme == "dark" ? "border-none bg-gray-950 shadow-black shadow-md" : "shadow-lg"}`}>
            <h1>time</h1>
            <h1>Headling</h1>
        </div>
    )
}

export default UserQuestionCard