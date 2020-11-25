import React, { useState } from 'react'
import './App.css';

import Rolls from './components/Rolls'
import Frames from './components/Frames'

function App() {
  const [frames, setFrames] = useState([[]])
  const [totalScore, setTotalScore] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h2>{`Score: ${totalScore}`}</h2>
      <Frames frames={frames} score={totalScore} />
      <Rolls updateFrames={setFrames} frames={frames} score={totalScore} updateScore={setTotalScore} />
    </div>
  );
}

export default App;
