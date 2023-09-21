import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function QuestionSkeleton() {
    return (
        <tr className='w-[100%] '>
            <SkeletonTheme baseColor='#e5e5e5' highlightColor='#cccccc'>
                <td className='text-left p-3'><Skeleton width={100} /></td>
                <td className='text-left p-3'><Skeleton width={100} /></td>
                <td className='text-left p-3'><Skeleton width={100} /></td>
                <td className='text-left p-3'><Skeleton width={100} /></td>
            </SkeletonTheme>
        </tr>
    )
}

export default QuestionSkeleton