import React from 'react';
import Cardlist from './cardlist';

const Cardzone = ({cards, count, updateCard, deleteCard}) =>(
	<section className="card-section">
    <ul>
      {count > 0 ? Object.keys(cards).map(key => (
        <Cardlist key={key} card={cards[key]} value={count} updateCard={updateCard} deleteCard={deleteCard} />
      )) : '' } 
    </ul>
  </section>
)

export default Cardzone;