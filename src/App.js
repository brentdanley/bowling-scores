import React, { useState } from 'react'

import Rolls from './components/Rolls'
import Frames from './components/Frames'

import styles from './app.module.scss'

function App() {
  const [frames, setFrames] = useState([new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame()])
  const [totalScore, setTotalScore] = useState(0)

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}></header>
      <h1>Let's make sense of a bowling score.</h1>
      <Frames frames={frames} score={totalScore} />
      <Rolls updateFrames={setFrames} frames={frames} score={totalScore} updateScore={setTotalScore} />

      <div className={styles.explanation}>
        <h3>How is bowling played?</h3>
        <p>In Ten Pin bowling, there are ten pins at the end of a wooden lane. A bowler has two rolls of a heavy ball to knock them down. That's basically it.</p>
        
        <h3>Strike!</h3>
        <p>If all ten pins are knocked down on the first roll, that's called a strike. The pins are reset for the next frame. Each pin knocked down is a point, and as a bonus for a job well done, the next two balls rolled in turn count toward the frame in which the strike was rolled. So if on the next two rolls the bowler also rolls strikes, and those pins are added to the frame total, that frame is worth 30 points! Do this for all ten frames and that's a perfect game, score 300! Each frame, therefore, is worth a maximum of 30 points.</p>

        <h3>Spare</h3>
        <p>Knocking all the pins down on the first roll is a strike. If it takes both rolls to knock down all the pins, this is a spare. A spare is less impressive than a strike, so only gets the bowler a bonus of the next roll's pins for the frame.</p>

        <h3>Open</h3>
        <p>If the bowler gets neither a strike nor a spare in the frame, meaning with two rolls of the ball they failed to knock down all ten pins, this is referred to as an open frame. An open frame gets no bonus. Sorry. It does make the scoring easier, so if you don't want to have to add bonus rolls to your frame scores, never knock down all ten pins in a frame. Voila!</p>
      </div>
    </div>
  );
}

export class Frame {
  constructor() {
    this.roll1 = null
    this.roll2 = null
    this.roll3 = null
  }
}

export default App;
