import React from 'react';
import CardList from './cardlist';

const Card = ({cards}) => (
    <div className="card">
        {Object.keys(cards).map(key=>(
        <CardList key={key} card={cards[key]} />
        ))} 
    </div>     
);


export default Card;