import React, { useState } from 'react'
import './App.css';

import Rolls from './components/Rolls'
import Frames from './components/Frames'

function App() {
  const [frames, setFrames] = useState([new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame(),new Frame()])
  const [totalScore, setTotalScore] = useState(0)

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Let's make sense of a bowling score.</h1>
      <Frames frames={frames} score={totalScore} />
      <Rolls updateFrames={setFrames} frames={frames} score={totalScore} updateScore={setTotalScore} />

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
