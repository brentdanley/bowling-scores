import React from 'react'

import styles from './Frames.module.scss'

import SingleFrame from './SingleFrame'

const Frames = ({ frames }) => {
    let score = 0

    return (
        <div className={styles.wrapper}>
        {
            frames.map((frame, i) => {
                score += frame.roll1 + frame.roll2 + frame.roll3
                score = frame.roll1 + frame.roll2 >= 10 && frame.roll3 === null ? '' : score
                const p = {
                    frame: frame,
                    index: i,
                    key: i,
                    stringScore: score,
                }
                if (i !== 10) return <SingleFrame {...p} />
            })
        }
        </div>
    )
}

export default Frames