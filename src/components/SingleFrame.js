import React from 'react'

import styles from './SingleFrame.module.scss'

let isCompletedFrame = frame => {
    if (frame.roll1 === null) return false
    if (frame.roll1 === 10 && frame.roll3 === null) return false
    if (frame.roll1 + frame.roll2 === 10 && frame.roll3 === null) return false
    if (frame.roll1 < 10 && frame.roll2 === null) return false
    return true
}

let frameJSX = (frame, stringScore) => {
    // Strike!
    if (frame.roll1 === 10) {
        return <><div className={styles.roll1}></div><div className={styles.roll2}>X</div><div className={styles.score}>{isCompletedFrame(frame) ? stringScore : ''}</div></>
    }

    // Spare
    if (frame.roll1 + frame.roll2 === 10) { 
        return <><div className={styles.roll1}>{frame.roll1}</div><div className={styles.roll2}>/</div><div className={styles.score}>{isCompletedFrame(frame) ? stringScore : ''}</div></>
    }
    
    return <><div className={styles.roll1}>{frame.roll1}</div><div className={styles.roll2}>{frame.roll2}</div><div className={styles.score}>{isCompletedFrame(frame) ? stringScore : ''}</div></>
}

const SingleFrame = ({ frame, index, stringScore }) => {

    return (
        <div className={styles.wrapper}><div className={styles.frame}>{index + 1}</div>{frameJSX(frame, stringScore)}</div>
    )
}

export default SingleFrame