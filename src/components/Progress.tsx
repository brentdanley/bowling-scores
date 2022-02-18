import React from 'react';
import { RollsType } from '../App';
import styles from './Progress.module.scss';

const calculateMaxScore = (rolls: RollsType) => {
  const maxRolls = rolls.map((r, i) => {
    // Second roll of frame
    if (i % 3 === 1 && r === null && rolls[i - 1] !== 10) {
      return 10 - rolls[i - 1]!;
    }

    // Third roll of frame
    if (i % 3 === 2 && r === null) {
      // Frame is a strike
      if (rolls[i - 2] === 10) {
        return rolls[i - 1] === 10 ? 10 : 10 - rolls[i - 1]!;
      }
    }

    if (r === null) {
      return 10;
    }

    return r;
  });

  return maxRolls.reduce((a, b) => {
    return a + b;
  }, 0);
};

const ProgressSlider = ({ rolls }: { rolls: RollsType }) => {
  return (
    <div className={styles.progress__container}>
      <p className={styles.progress__label}>Max possible score:</p>
      <div className={styles.progress__outer}>
        <div
          className={styles.progress__inner}
          style={{ width: `${(calculateMaxScore(rolls) / 300) * 100}%` }}
        >
          <div className={styles.progress__value}>
            {calculateMaxScore(rolls)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSlider;
