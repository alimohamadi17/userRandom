import React from 'react'
import './skeleton.css'

function Skeleton({ type }) {
    const classes = `skeleton ${type}`

    return (
        <div className={classes}></div>
    )
}

export default Skeleton