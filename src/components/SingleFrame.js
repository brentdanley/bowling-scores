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
}

const SingleFrame = ({ frame, index, stringScore, isCurrent }) => {
    const isStrike = frame.roll1 === 10 ? true : false
    const isSpare = frame.roll2 !== null && frame.roll1 + frame.roll2 === 10 ? true : false
    
    let frameStyle = (index === 9) ? `${styles.wrapper} ${styles.ten}` : styles.wrapper
    frameStyle = isCurrent ? `${frameStyle} ${styles.current}` : frameStyle
    frameStyle = isStrike ? `${frameStyle} ${styles.strike}` : frameStyle
    frameStyle = isSpare ? `${frameStyle} ${styles.spare}` : frameStyle

    const opacity = (frame.roll1 + frame.roll2 + frame.roll3) / 30 * 0.6

    let frameBackground = {
        background: `radial-gradient(circle, rgba(25,66,120,${opacity}) 0%, rgba(9,121,17, ${opacity}) 100%)`
    }
    return (
        <div className={frameStyle} key={index} style={frameBackground}><div className={styles.frameHeader}>{index + 1}</div>{frameJSX(frame, index, stringScore)}</div>
    )
}

export default SingleFrame