import React, { useEffect, useState } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';
import uniqid from 'uniqid';

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const CardContainer = () => {
  let signsInit = ['Aquarius', 'Pisces', 
  			   'Aries', 'Taurus', 
  			   'Gemini', 'Cancer',
               'Leo', 'Virgo', 
               'Libra', 'Scorpio', 
               'Sagittarius', 'Capricorn'];

  const [signs, setSigns] = useState(signsInit);
  const [clickedArr, setClickedArr] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (signName, clicked) => {
    console.log(`${signName}, ${clicked}`);
    reshuffle();
    addOrReset(signName);
  }

  const reshuffle = () => {
    const shuffled = shuffle(signs);
  	setSigns([...shuffled]);
  }

  const isHighestScore = (currScore) => {
  	if (currScore > highScore) {
  	  setHighScore(currScore);
  	}
  }

  const addOrReset = (signName) => {
    if (clickedArr.includes(signName)) {
      console.log('damn u ain\'t got no bitches');
      isHighestScore(score);
      setScore(0);
    } else {
      setClickedArr(clickedArr.concat(signName));
      setScore(score + 1);
    }
  }


  return (
  	<div>
  	  <h1>CardContainer</h1>
  	   <Scoreboard score={score} highScore={highScore}/>
  	  <div className="cardContainer"
  	   >

      { signs.map((sign) => {
      	return <Card key={uniqid()} 
              sign={sign} 
              clicked={false}
              handleClick={handleClick}/>
      }) }
  	  </div>
  	</div>
  );
}

export default CardContainer;