import React from 'react'
import styles from './Frames.module.scss'
import SingleFrame from './SingleFrame'

const Frames = ({rolls}: {rolls: (number|null)[]}) => {

    let framesJSX = [] 
    for (let i = 0; i <= rolls.length; i += 3) {
        const score: number = rolls.slice(0,i+3).reduce(function(frameStringScore, rollPins) {
            if (rollPins === null) {
                return frameStringScore
            }
            return frameStringScore! + rollPins
        }, 0)!
        if (i <= 29) {
            framesJSX.push(<SingleFrame frame={rolls.slice(i, i + 2)} index={framesJSX.length} key={`frame${framesJSX.length}`} stringScore={score} />)
        }
    }

    return (
        <div className={styles.wrapper}>
            {framesJSX.map(frame => frame)}
        </div>
    )
}

export default Frames