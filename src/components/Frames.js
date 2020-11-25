import React from 'react'

import styles from './Frames.module.scss'

import SingleFrame from './SingleFrame'

const Frames = (props) => {

    return (
        <div className={styles.wrapper}>
        {
            props.frames.map((frame, i) => {
                const p = {
                    frame: frame,
                    index: i,
                    key: i,
                    stringScore: props.score,
                }
                return <SingleFrame {...p} />
            })
        }
        </div>
    )
}

export default Frames