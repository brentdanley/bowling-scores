import React, { useState } from 'react';

import Rolls from './components/Rolls';
import Frames from './components/Frames';

import styles from './app.module.scss';

export type RollsType = (number | null)[];

const App = () => {
  const [rolls, setRolls] = useState<RollsType>([
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

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}></header>
      <h1>Let's make sense of a bowling score.</h1>
      <Frames rolls={rolls} />
      <Rolls rolls={rolls} updateRolls={setRolls} />

      <div className={styles.explanation}>
        <h3>How is bowling played?</h3>
        <p>
          In Ten Pin bowling, there are ten pins at the end of a wooden lane. A
          bowler has two rolls of a heavy ball to knock them down. That's
          basically it.
        </p>

        <h3>Strike! (X)</h3>
        <p>
          If all ten pins are knocked down on the first roll, that's called a
          strike. The pins are reset for the next frame. Each pin knocked down
          is a point, and as a bonus for a job well done, the next two balls
          rolled in turn count toward the frame in which the strike was rolled.
          So if on the next two rolls the bowler also rolls strikes, and those
          pins are added to the frame total, that frame is worth 30 points! Do
          this for all ten frames and that's a perfect game, score 300! Each
          frame, therefore, is worth a maximum of 30 points.
        </p>

        <h3>Spare (/)</h3>
        <p>
          Knocking all the pins down on the first roll is a strike. If it takes
          both rolls to knock down all the pins, this is a spare. A spare is
          less impressive than a strike, so only gets the bowler a bonus of the
          next roll's pins for the frame.
        </p>

        <h3>Open</h3>
        <p>
          If the bowler gets neither a strike nor a spare in the frame, meaning
          with two rolls of the ball they failed to knock down all ten pins,
          this is referred to as an open frame. An open frame gets no bonus.
          Sorry. It does make the scoring easier, so if you don't want to have
          to add bonus rolls to your frame scores, never knock down all ten pins
          in a frame. Voila!
        </p>

        <h3>Make it count!</h3>
        <p>
          What I think is confusing to many about this simple scoring system is
          that, while there are only two rolls per frame and ten pins at the end
          of the lane, each frame is worth 30 points! Think of each frame has
          having three rolls, not two, since a strike yeilds two bonus rolls and
          a spare one bonus (in both cases the bonus roll is taken in normal
          turn, in subsequent frames). Consider a bowler who rolls two strikes
          in a row. This is referred to imaginatively as a "double". The next
          roll counts for the current frame, but <strong>also</strong> the frame
          before that, and the frame before that, or <strong>THREE</strong>{' '}
          times! This multiplier effect is powerful. If a bowler never knocked
          down all ten pins in any frame, meaning they had all open frames, the
          maximum their string score could be is 90 (9x10). If, however, they
          rolled a strike in every frame, which is a perfect game, each frame
          score is 30 for a string score of 300! (30x10). In a perfect game,
          every roll after the first two is tripled! So if you're out bowling
          and want to power-up your score, knock down all the pins, and then
          make the next roll(s) count, as those are the ones with the
          multiplying coefficient.
        </p>

        <p>
          You can see the code on GitHub at{' '}
          <a
            href="https://github.com/brentdanley/bowling-scores"
            title="Bowling Scores on GitHub"
          >
            brentdanley/bowling-scores
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
