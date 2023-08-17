import React from 'react'
import { CgProfile } from 'react-icons/cg'
import themehook from '../components/CodeContext'

function QuestionCard() {
    const { theme } = themehook()
    return (
        <div className={` w-full flex justify-between p-3  border-[1px] rounded-lg my-4 ${theme == "dark" ? " bg-gray-950 border-none shadow-black shadow-md" : "shadow-lg"}`}>
            <section className=' w-[5%] '>
                <CgProfile size={50} className='' />
            </section>
            <div className=' max-w-[70%]  '>
                <h1>mclkvkjnjdcjdcjhdbchdbcjhdbhjfbcj</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint ducimus animi dolore sunt sequi voluptate nostrum facere quae quos, provident possimus distinctio aliquid vero architecto! Aut fugit placeat fugiat.</p>
            </div>
            <section className=' w-[13%] -2'>
                <p>time</p>
            </section>
        </div>
    )
}

export default QuestionCard