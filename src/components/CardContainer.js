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
  /*
  let signs = [{sign: 'Aquarius', clicked: false}, {sign: 'Pisces', clicked: false}, 
  			   {sign: 'Aries', clicked: false}, {sign: 'Taurus', clicked: false}, 
  			   {sign: 'Gemini', clicked: false}, {sign: 'Cancer', clicked: false},
               {sign: 'Leo', clicked: false}, {sign: 'Virgo', clicked: false}, 
               {sign: 'Libra', clicked: false}, {sign: 'Scorpio', clicked: false}, 
               {sign: 'Sagittarius', clicked: false}, {sign: 'Capricorn', clicked: false}];
  */
  
  /*
  useEffect(() => {
  	const shuffled = shuffle(signsArr);
  	setSignsArr([...shuffled]);
  }, [signsArr])
  */


  const handleClick = (signName, clicked) => {
    console.log(`${signName}, ${clicked}`);
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