import React, { useState } from 'react'
import {Frame} from '../App'

import styles from './rolls.module.scss'

const Rolls = (props) => {
    const [pinsLeft, setPins] = useState(10)
    const [isFirstRoll, setFirst] = useState(true)
    const [currentFrame, setCurrentFrame] = useState(0)

    const rollButtons = ['-', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'X']

    const handleClick = (roll) => {

        let rollPoints = roll

        const tempFrames = [...props.frames]
        // Add roll to current frame
        if (currentFrame < 10) {
            if (tempFrames[currentFrame].roll1 === null) {
                tempFrames[currentFrame].roll1 = roll
            } else {
                tempFrames[currentFrame].roll2 = roll
            }
        }

        // BONUSES
        // The previous frame was a strike or spare
        if (currentFrame > 0) {
            if (tempFrames[currentFrame - 1].roll1 === 10 || tempFrames[currentFrame - 1].roll1 + tempFrames[currentFrame - 1].roll2 === 10) {
                if (tempFrames[currentFrame - 1].roll2 === null) {
                    tempFrames[currentFrame - 1].roll2 = roll
                }
                else {
                    tempFrames[currentFrame - 1].roll3 = roll
                }
                if (currentFrame < 10) rollPoints += roll
            }
        }

        // There was a strike two frames ago
        if (currentFrame > 1 && tempFrames[currentFrame - 2].roll1 === 10) {
            if (tempFrames[currentFrame - 1].roll3 === null) {
                tempFrames[currentFrame - 2].roll3 = roll
                if (currentFrame < 10) rollPoints += roll
            }
        }

        props.updateScore(props.score + rollPoints)

        // SET PINS
        // string is complete
        if (tempFrames[9].roll3 !== null || (tempFrames[9].roll2 !== null && tempFrames[9].roll1 + tempFrames[9].roll2 < 10)) {
            setPins(-1)
        } else {
            // resets pins after roll
            if (isFirstRoll && roll !== 10) { // first roll
                setFirst(false)
                setPins(10 - roll)
            } else { // second roll or strike
                setFirst(true)
                setPins(10)
                setCurrentFrame(currentFrame + 1)
            }
        }

        props.updateFrames(tempFrames)

    }

    const resetString = () => {
        props.updateFrames([new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame()])
        setPins(10)
        setCurrentFrame(0)
    }

    return (
        <div>
            {
                rollButtons.map((button, i) => {
                    return <button
                        className={styles.pin}
                        onClick={() => handleClick(i)}
                        disabled={i > pinsLeft ? 'disabled' : false}
                        key={i}
                        >{(i === pinsLeft && !isFirstRoll) ? '/' : button}</button>
                })
            }
            <button className={styles.resetButton} onClick={resetString}>Reset String</button>
        </div>
    )
}

export default Rolls