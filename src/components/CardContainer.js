import React, { useEffect, useState } from 'react';
import Card from './Card';
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
  let signs = {'Aquarius': false, 'Pisces': false, 
  			   'Aries': false, 'Taurus': false, 
  			   'Gemini': false, 'Cancer': false,
               'Leo': false, 'Virgo': false, 
               'Libra': false, 'Scorpio': false, 
               'Sagittarius': false, 'Capricorn': false};

  const [count, setCount] = useState(0);

  const incrementCount = () => {
  	setCount(count + 1);
  	console.log(count);
  }

  const handleClick = (signName, clicked) => {
    //console.log(`${signName}, ${clicked}`);
    setCount(count + 1);
  	console.log(count);
    reshuffle();
  }
  
  const cardsInit = Object.entries(signs).map(([k, v]) => {
  	return <Card key={uniqid()} 
              sign={k} 
              clicked={v}
              handleClick={handleClick}/>
  });

  const [cards, setCards] = useState(cardsInit);

  const reshuffle = () => {
    const shuffled = shuffle(cards);
  	setCards([...shuffled]);
  }


  return (
  	<div>
  	  <h1>CardContainer</h1>
  	  <div className="cardContainer"
  	   >
      {cards}
  	  </div>
  	</div>
  );
}

export default CardContainer;