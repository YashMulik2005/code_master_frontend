import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import themehook from '../components/CodeContext'

function CertificateSketeon() {
    const { theme } = themehook()
    return (
        <div className=' mx-3'>
            <SkeletonTheme baseColor='#e5e5e5' highlightColor='#cccccc'>
                <div className={` ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} flex w-[100%] h-40 rounded-md`}>
                    <div className=' w-[50%] p-2 h-[100%] flex items-center justify-center '>
                        <Skeleton width={100} height={110} />
                    </div>
                    <div className=' w-[50%] p-2 h-[100%] flex items-start justify-center flex-col '>
                        <Skeleton width={20} circle />
                        <Skeleton width={100} />
                        <Skeleton width={60} />
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    )
}

export default CertificateSketeon