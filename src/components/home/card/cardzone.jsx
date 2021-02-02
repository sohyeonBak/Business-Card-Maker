import React from 'react';
import Cardlist from './cardlist';

const Cardzone = ({cards}) =>(
	<section className="card-section">
    <ul>
      {cards.map(card => (
        <Cardlist card={card} />
      ))}
    </ul>
  </section>
)

export default Cardzone;