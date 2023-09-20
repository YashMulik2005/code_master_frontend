import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import themehook from './CodeContext'

function Profileskeleton() {
    const { theme } = themehook()
    return (
        <div className=' w-full'>
            <SkeletonTheme baseColor='#e5e5e5' highlightColor='#cccccc'>
                <div className={` flex flex-col min-[950px]:flex-row justify-center min-[950px]:h-[87vh] p-5`}>
                    <div className={`${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} max-[950px]:mb-5 p-3 rounded-lg flex flex-col justify-center items-center h-[100%] min-[950px]:w-[30%]`}>
                        <section >
                            <Skeleton circle width={80} height={80} />
                        </section>
                        <Skeleton width={100} />
                        <Skeleton width={255} height={350} />
                    </div>
                    <div className=' h-[87vh] min-[950px]:w-[70%] flex flex-col'>
                        <div className='flex h-[23%] mx-2 mb-3 overflow-x-auto'>
                            <div className={` flex justify-center ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} h-32 mx-3 rounded-lg p-2 w-[100%] min-[950px]:w-[40%] `}>
                                <section className=' w-[50%]  mx-1'>
                                    <Skeleton width={100} />
                                    <Skeleton width={100} />
                                </section>
                                <section>
                                    <Skeleton width={100} height={80} />
                                </section>
                            </div>
                            <div className={` flex justify-center ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} h-32 mx-3 rounded-lg p-2 w-[100%] min-[950px]:w-[40%] `}>
                                <section className=' w-[50%] mx-1'>
                                    <Skeleton width={100} />
                                    <Skeleton width={100} />
                                </section>
                                <section>
                                    <Skeleton width={100} height={80} />
                                </section>
                            </div>
                            <div className={` flex justify-center ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} h-32 mx-3 rounded-lg p-2 w-[100%] min-[950px]:w-[40%] `}>
                                <section className=' w-[50%]  mx-1'>
                                    <Skeleton width={100} />
                                    <Skeleton width={100} />
                                </section>
                                <section>
                                    <Skeleton width={100} height={80} />
                                </section>
                            </div>
                        </div>

                        <div className={` ${theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"} h-[68%] w-[96%] min-[950px]:mx-5 rounded-lg px-4 min-[950px]:px-6 py-2`}>
                            <div className={`${theme == "light" ? "bg-white" : "bg-[#1c232b]"} w-[100%] rounded-lg p-2 my-2`}>
                                <Skeleton width={100} />
                                <Skeleton width={280} />
                                <Skeleton width={280} />
                            </div>
                            <div className={`${theme == "light" ? "bg-white" : "bg-[#1c232b]"} w-[100%] rounded-lg p-2 my-2`}>
                                <Skeleton width={100} />
                                <Skeleton width={280} />
                                <Skeleton width={280} />
                            </div>
                            <div className={`${theme == "light" ? "bg-white" : "bg-[#1c232b]"} w-[100%] rounded-lg p-2 my-2`}>
                                <Skeleton width={100} />
                                <Skeleton width={280} />
                                <Skeleton width={280} />
                            </div>
                            <div className={`${theme == "light" ? "bg-white" : "bg-[#1c232b]"} w-[100%] rounded-lg p-2 my-2`}>
                                <Skeleton width={100} />
                                <Skeleton width={280} />
                                <Skeleton width={280} />
                            </div>
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    )
}

export default Profileskeleton