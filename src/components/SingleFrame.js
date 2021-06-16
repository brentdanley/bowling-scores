import React from 'react'

import styles from './SingleFrame.module.scss'

let isCompletedFrame = frame => {
    if (frame.roll1 === null) return false
    if (frame.roll1 === 10 && frame.roll3 === null) return false
    if (frame.roll1 + frame.roll2 === 10 && frame.roll3 === null) return false
    if (frame.roll1 < 10 && frame.roll2 === null) return false
    return true
}

const roll2 = frame => {
    if (frame.roll1 === 10) return 'X'
    if (frame.roll1 + frame.roll2 === 10 && frame.roll2 !== null) return '/'
    if (frame.roll2 === null) return ''
    return frame.roll2
}

let frameJSX = (frame, i, stringScore) => {
    if (i === 9) {
        return <><div className={styles.roll1}>{frame.roll1 < 10 ? frame.roll1 : 'X'}</div><div className={styles.roll2}>{frame.roll2 !== null && frame.roll1 + frame.roll2 === 10 ? '/' : frame.roll2}</div><div className={styles.roll3}>{frame.roll3}</div><div className={styles.score}>{isCompletedFrame(frame) ? stringScore : ''}</div></>
    }
    return <><div className={styles.roll1}>{frame.roll1 < 10 ? frame.roll1 : ''}</div><div className={styles.roll2}>{roll2(frame)}</div><div className={styles.score}>{isCompletedFrame(frame) ? stringScore : ''}</div></>
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

    const style = (index === 9) ? `${styles.wrapper} ${styles.ten}` : styles.wrapper
    return (
        <div className={style}><div className={styles.frame}>{index + 1}</div>{frameJSX(frame, index, stringScore)}</div>
    )
}

export default SingleFrame