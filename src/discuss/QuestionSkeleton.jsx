import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import themehook from '../components/CodeContext'

function QuestionSkeleton() {
    const { theme } = themehook()
    return (
        <div className={` w-full flex justify-between p-3  border-[1px] rounded-lg my-4 ${theme == "dark" ? " bg-gray-950 border-none shadow-black shadow-md" : "shadow-lg"}`}>
            <SkeletonTheme baseColor='#e5e5e5' highlightColor='#cccccc'>
                <section className=' w-[5%] '>
                    <Skeleton circle width={50} height={50} />
                </section>
                <section className='w-[70%] '>
                    <Skeleton width={150} />
                    <Skeleton count={3} />
                </section>
                <section className=' w-[13%] -2'>
                    <Skeleton />
                </section>
            </SkeletonTheme>
        </div >


    )
}

export default QuestionSkeleton