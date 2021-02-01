import React from 'react';
import Cardlist from './cardlist';

const Cardzone = ({cards}) =>(
	<section className="card-section">
    <Cardlist cards={cards} />
  </section>
)


export default Cardzone;