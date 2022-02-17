import React, { useState } from 'react';

import styles from './rolls.module.scss';

const Rolls = ({ rolls, updateRolls, score, updateScore }: any) => {
  const [pinsLeft, setPins] = useState(10);
  const [isFirstRoll, setFirst] = useState(true);
  const [rollIndex, setRollIndex] = useState<number>(0);

  const tempRolls = [...rolls];

  const rollButtons = ['-', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'X'];

  const handleClick = (roll: number) => {
    let nextIndex = rollIndex + 1;
    const currentFrame = Math.ceil((rollIndex + 1) / 3);
    const frameRollOne = (currentFrame - 1) * 3;
    const nextFrameIndex = frameRollOne + 3;

    tempRolls[rollIndex] = roll;

    // First roll of frame
    if (rollIndex === frameRollOne) {
      // Roll is a strike (X)
      if (roll === 10) {
        nextIndex = nextFrameIndex;
      }

      // Two frames ago was a strike
      if (currentFrame >= 3 && tempRolls[frameRollOne - 6] === 10) {
        if (tempRolls[frameRollOne - 4] === null) {
          tempRolls[frameRollOne - 4] = roll;
        }
      }

      // Last frame was a strike
      if (currentFrame >= 2 && tempRolls[frameRollOne - 3] === 10) {
        if (tempRolls[frameRollOne - 2] === null) {
          tempRolls[frameRollOne - 2] = roll;
        }
      }

      // Last frame was a spare
      if (
        currentFrame >= 2 &&
        tempRolls[frameRollOne - 3] + tempRolls[frameRollOne - 2] === 10
      ) {
        tempRolls[frameRollOne - 1] = roll;
      }
    }

    // Second roll of frame
    if (rollIndex === frameRollOne + 1) {
      nextIndex = nextFrameIndex;

      // Last frame was a strike
      if (currentFrame >= 2 && tempRolls[frameRollOne - 3] === 10) {
        if (tempRolls[frameRollOne - 1] === null) {
          tempRolls[frameRollOne - 1] = roll;
        }
      }

      // Open frame
      if (tempRolls[frameRollOne] + roll < 10) {
        tempRolls[frameRollOne + 2] = 0;
      }
    }

    setRollIndex(nextIndex);

    // SET PINS
    // string is complete
    if (
      tempRolls[29] !== null ||
      (tempRolls[27] !== null && tempRolls[28] !== null && tempRolls[27] + tempRolls[28] < 10)
    ) {
      setPins(-1);
    } else {
      // resets pins after roll
      if (isFirstRoll && roll !== 10) {
        // first roll
        setFirst(false);
        setPins(10 - roll);
      } else {
        // second roll or strike
        setFirst(true);
        setPins(10);
      }
    }

    updateRolls(tempRolls);
  };

  const resetString = () => {
    updateRolls([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]);
    setPins(10);
    updateScore(0);
    setRollIndex(0);
  };

  return (
    <div>
      {rollButtons.map((button, i) => {
        return (
          <button
            className={styles.pin}
            onClick={() => handleClick(i)}
            disabled={i > pinsLeft ?? false}
            key={`pin${i}`}
          >
            {i === pinsLeft && !isFirstRoll ? '/' : button}
          </button>
        );
      })}
      <button className={styles.resetButton} onClick={resetString}>
        Reset String
      </button>
    </div>
  );
};

export default Rolls;
