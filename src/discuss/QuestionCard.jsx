import React from 'react'
import { CgProfile } from 'react-icons/cg'
import themehook from '../components/CodeContext'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

function QuestionCard({ username, id, heading, desc, code, time }) {
    const { theme } = themehook()

    const navigate = useNavigate()
    return (
        <div onClick={() => { navigate(`/discuss/${id}`) }} className={` w-full flex justify-between p-3 rounded-lg my-4 ${theme == "dark" ? " bg-[#0c131d] border-none " : "bg-[#f5f1f0] shadow-md"}`}>
            <section className='max-[440px]:w-[20%] sm:w-[10%]'>
                <CgProfile size={50} className='' />
            </section>
            <div className='flex flex-col-reverse min-[800px]:flex-row  justify-start w-[100%] sm:w-[90%]'>
                <div className=' max-[800px]:w-[100%] w-[75%] px-2  '>
                    <h1 className=' font-bold text-green-600'>{heading}</h1>
                    <p>{desc}</p>
                </div>
                <section className=' max-[800px]:w-[100%] w-[25%] px-2 flex justify-end'>
                    <p className=' font-bold text-sm'>{moment(time).fromNow()}</p>
                </section>
            </div>
        </div>
    )
}

export default QuestionCard