import React, { useState } from 'react'

const Rolls = (props) => {
    const [pinsLeft, setPins] = useState(10)
    const [isFirstRoll, setFirst] = useState(true)
    const [currentFrame, setCurrentFrame] = useState(0)

    const rollButtons = ['Gutter', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Strike!']

    const handleClick = (roll) => {

        const tempFrames = [...props.frames]
        // Add roll to current frame
        if (typeof tempFrames[currentFrame] === 'undefined') {
            tempFrames.push([[roll]]) 
        } else {
            tempFrames[currentFrame].push(roll)
        }

        // BONUSES
        // The previous frame was a strike or spare
        if (typeof tempFrames[currentFrame - 1] !== 'undefined') {
            if (tempFrames[currentFrame - 1][0] === 10 || tempFrames[currentFrame - 1][0] + tempFrames[currentFrame - 1][1] === 10) {
                tempFrames[currentFrame - 1].push(roll)
            }
        }

        // There was a strike two frames ago
        if (typeof tempFrames[currentFrame - 2] !== 'undefined' && tempFrames[currentFrame-2][0] === 10) {
            if (tempFrames[currentFrame - 1][0] === 10) {
                tempFrames[currentFrame - 2].push(roll)
            }
        }
        
        // SET PINS
        // string is complete
        if (currentFrame >= 10 &&
            (tempFrames[9][0] + tempFrames[9][1] < 10)) {
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
                tempFrames.push([])
            }
        }

        props.updateFrames(tempFrames)

    }

    return (
        <div>
            {
                rollButtons.map((button, i) => {
                    return <button
                        onClick={() => handleClick(i)}
                        disabled={i > pinsLeft ? 'disabled' : false}
                        key={i}
                        >{(i === pinsLeft && !isFirstRoll) ? 'Spare!' : button}</button>
                })
            }
        </div>
    )
}

export default Rolls