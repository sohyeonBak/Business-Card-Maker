import React from 'react';
import Edit from './edit';
import Namecard from './namecard';

const Cardlist = ({card}) => (
    <li className="card-zone">
			<Namecard card={card}/>
			<Edit card={card}/>
    </li>
)

export default Cardlist;