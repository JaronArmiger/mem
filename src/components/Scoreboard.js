import React from 'react';

const Scoreboard = (props) => {
  return (
    <div>
  	  <h1>Scoreboard</h1>
  	  <p>score: {props.score}</p>
  	  <p>high score: {props.highScore}</p>
  	</div>
  );
}

export default Scoreboard;