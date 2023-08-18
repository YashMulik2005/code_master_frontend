import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import themehook from '../components/CodeContext'

function UserQuestionSkeleton() {
    const { theme } = themehook()
    return (
        <div className={`border-[1px] rounded-lg shadow-lg p-2 my-2 ${theme == "dark" ? "border-none bg-gray-950 shadow-black shadow-md" : "shadow-lg"}`}>
            <SkeletonTheme baseColor='#e5e5e5' highlightColor='#cccccc'>
                <Skeleton width={50} />
                <Skeleton />
            </SkeletonTheme>
        </div>
    )
}

export default UserQuestionSkeleton