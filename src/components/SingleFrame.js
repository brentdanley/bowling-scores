import React from 'react'

import styles from './SingleFrame.module.scss'

const SingleFrame = ({ frame, index, stringScore }) => {

    let frameJSX = ''
    if (frame.roll1 === 10) {
        frameJSX = <><div className={styles.roll1}></div><div className={styles.roll2}>X</div><div className={styles.score}>{stringScore}</div></>
    } else if (frame.roll1 + frame.roll2 === 10) {
        frameJSX = <><div className={styles.roll1}>{frame.roll1}</div><div className={styles.roll2}>/</div><div className={styles.score}>{stringScore}</div></>
    } else {
        frameJSX = <><div className={styles.roll1}>{frame.roll1}</div><div className={styles.roll2}>{frame.roll2}</div><div className={styles.score}>{stringScore}</div></>
    }

    return (
        <div className={styles.wrapper}><div className={styles.frame}>{index + 1}</div>{frameJSX}</div>
    )
}

export default SingleFrame