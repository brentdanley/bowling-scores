import React from 'react'
import styles from './SingleFrame.module.scss'

let isCompletedFrame = (frame: (number|null)[]): boolean => {
    if (frame[0] !== null) return true
    return false
}

const frameJSX = (frame: (number|null)[], i: number, stringScore: number) => {
    let rollOneDisplay = frame[0] ?? '' 
    let rollTwoDisplay = frame[1] ?? ''

    // Gutter balls
    if (frame[0] === 0) {
        rollOneDisplay = '-'
    }
    if (frame[1] === 0) {
        rollTwoDisplay = '-'
    }
    
    // Spare
    if (frame[0] !== null && frame[1] !== null && frame[0] + frame[1] === 10) {
        rollTwoDisplay = '/'
    } 

    // Strike
    if (frame[0] === 10) {
        rollOneDisplay = ''
        rollTwoDisplay = 'X'
    }

    if (i === 9) {
        return <><div className={styles.roll1}>{frame[0] !== 10 ? frame[1] : 'X'}</div><div className={styles.roll2}>{frame[1] !== 0 && frame[0]! + frame[1]! === 10 ? '/' : frame[1]}</div><div className={styles.roll3}>{frame[2]}</div><div className={styles.score}>{isCompletedFrame(frame) ? stringScore : ''}</div></>
    }
    return <><div className={styles.roll1}>{rollOneDisplay}</div><div className={styles.roll2}>{rollTwoDisplay}</div><div className={styles.score}>{isCompletedFrame(frame) ? stringScore : ''}</div></>
}

const SingleFrame = ({ frame, index, stringScore }: {frame: (number|null)[], index: number, stringScore: number}) => {
    const isStrike = frame[0] === 10 ? true : false
    const isSpare = frame[0] !== null && frame[1] !== null && frame[0] + frame[1] === 10 ? true : false
    
    let frameStyle = (index === 9) ? `${styles.wrapper} ${styles.ten}` : styles.wrapper
    // frameStyle = isCurrent ? `${frameStyle} ${styles.current}` : frameStyle
    frameStyle = isStrike ? `${frameStyle} ${styles.strike}` : frameStyle
    frameStyle = isSpare ? `${frameStyle} ${styles.spare}` : frameStyle

    const opacity = (frame[0]! + frame[1]! + frame[2]!) / 30 * 0.6

    let frameBackground = {
        background: `radial-gradient(circle, rgba(25,66,120,${opacity}) 0%, rgba(9,121,17, ${opacity}) 100%)`
    }
    return (
        <div className={frameStyle} key={index} style={frameBackground}><div className={styles.frameHeader}>{index + 1}</div>{frameJSX(frame, index, stringScore)}</div>
    )
}

export default SingleFrame