import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import themehook from '../components/CodeContext'

function CouseSkeleton() {
    const { theme } = themehook()
    return (
        <div className={` ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} w-[100%] p-2 rounded-md `}>
            <SkeletonTheme baseColor='#e5e5e5' highlightColor='#cccccc'>
                <div className=" w-[100%] ">
                    <section className=' flex justify-between'>
                        <Skeleton width={25} height={25} circle />
                        <Skeleton width={50} />
                    </section>
                    <Skeleton width={70} />
                    <Skeleton width={210} />
                    <Skeleton width={210} />
                    <Skeleton width={210} />
                    <Skeleton width={60} />
                </div>
            </SkeletonTheme>
        </div>
    )
}

export default CouseSkeleton