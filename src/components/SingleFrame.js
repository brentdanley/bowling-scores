import React from 'react'

import styles from './SingleFrame.module.scss'
const SingleFrame = (props) => {

    let frameJSX = ''
    let frameScore = 0
    if (props.frame[0] === 10) {
        frameScore += props.frame[0] + props.frame[1] + props.frame[2]
        frameJSX = <><div className={styles.roll1}></div><div className={styles.roll2}>X</div><div className={styles.score}>{(isNaN(frameScore)) ? false : frameScore}</div></>
    } else if (props.frame[0] + props.frame[1] === 10) {
        frameScore += props.frame[0] + props.frame[1] + props.frame[2]
        frameJSX = <><div className={styles.roll1}>{props.frame[0]}</div><div className={styles.roll2}>/</div><div className={styles.score}>{(isNaN(frameScore)) ? false : frameScore}</div></>
    } else {
        frameScore += props.frame[0] + props.frame[1]
        frameJSX = <><div className={styles.roll1}>{props.frame[0]}</div><div className={styles.roll2}>{props.frame[1]}</div><div className={styles.score}>{(isNaN(frameScore)) ? false : frameScore}</div></>
    }

    return (
        <div className={styles.wrapper}><div className={styles.frame}>{props.index + 1}</div>{frameJSX}</div>
    )
}

export default SingleFrame