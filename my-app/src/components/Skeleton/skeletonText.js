import React from 'react'
import Skeleton from './skeleton'

function SkeletonText() {
    return (
        <div>
            <div className='skeleton-img'>
                <Skeleton type='img' />
            </div>
            <div className='skeleton-text'>
                <Skeleton type='text' />
                <Skeleton type='text' />
                <Skeleton type='text' />
            </div>
        </div>
    )
}

export default SkeletonText