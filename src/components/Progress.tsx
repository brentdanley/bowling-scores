import React from "react";


const calculateMaxScore = (rolls: (number|null)[]) => {
    return rolls.map(r => r === null ? 10 : r).reduce((a, b) => { return a + b },0)
}

const progressStyle = {
    height: '20px',
    width: '100%',
    backgroundColor: 'blue',
}

const ProgressSlider = ({rolls}: {rolls: (number|null)[]}) => {
    return (
        <>
            <div style={progressStyle} >{calculateMaxScore(rolls)}</div>
        </>
    )
}

export default ProgressSlider