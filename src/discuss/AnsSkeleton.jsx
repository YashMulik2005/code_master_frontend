import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import themehook from '../components/CodeContext'

function AnsSkeleton() {
    const { theme } = themehook()
    return (
        <div className={` ${theme == "dark" ? " bg-[#0c131d] border-none shadow-md" : "bg-[#f5f1f0]"} p-5 hadow-md m-4 rounded-lg `}>
            <SkeletonTheme baseColor='#e5e5e5' highlightColor='#cccccc'>
                <section>
                    <section className=' flex items-center'>
                        <section>
                            <Skeleton circle width={40} height={40} />
                        </section>
                        <section className='flex flex-col w-[100%] mx-4 '>
                            <Skeleton width={150} />
                            <Skeleton width={65} />
                            <hr className=' w-[100%] h-3 my-1' />
                        </section>
                    </section>

                </section>
                <section>
                    <Skeleton width={150} />
                    <Skeleton count={5} />
                </section>
            </SkeletonTheme>
        </div>
    )
}

export default AnsSkeleton