import React, { useState } from 'react';

const Card = (props) => {
  return (
  	<div className={props.clicked ? 'card clicked' : 'card' }
  	  onClick={() => props.handleClick(props.sign, props.clicked)}>
  	  <h1>{props.sign}</h1>
  	</div>
  );
}

export default Card;