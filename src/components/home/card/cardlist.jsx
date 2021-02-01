import React from 'react';
import Edit from './edit';
import Namecard from './namecard';

const Cardlist = ({cards}) => (
	<div className="card-zone">
		{cards.map(card => (
			<Namecard 
				card={card}
			/>
		))}
		{cards.map(card => (
			<Edit 
				card={card}
			/>
		))}
	</div>
)

export default Cardlist;