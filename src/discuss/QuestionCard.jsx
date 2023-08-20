import React from 'react'
import { CgProfile } from 'react-icons/cg'
import themehook from '../components/CodeContext'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

function QuestionCard({ username, id, heading, desc, code, time }) {
    const { theme } = themehook()

    const navigate = useNavigate()
    return (
        <div onClick={() => { navigate(`/discuss/${id}`) }} className={` w-full flex justify-between p-3  border-[1px] rounded-lg my-4 ${theme == "dark" ? " bg-gray-950 border-none shadow-black shadow-md" : "shadow-lg"}`}>
            <section className='w-[25%] sm:w-[10%] '>
                <CgProfile size={50} className='' />
            </section>
            <div className='flex flex-col-reverse sm:flex-row  justify-start w-[75%] sm:w-[90%]'>
                <div className=' w-[100%] sm:w-[75%] px-2 '>
                    <h1 className=' font-bold text-green-600'>{heading}</h1>
                    <p>{desc}</p>
                </div>
                <section className=' w-[100%] sm:w-[25%] px-2 flex justify-end'>
                    <p className=' font-bold text-sm'>{moment(time).fromNow()}</p>
                </section>
            </div>
        </div>
    )
}

export default QuestionCard