import React from 'react';
import Edit from './edit';
import Namecard from './namecard';

const Cardlist = ({card, updateCard, deleteCard, value}) => (
    <li className="card-zone">
		<Namecard card={card} value={value}/>
		<Edit card={card} updateCard={updateCard} deleteCard={deleteCard} value={value}/>
    </li>
)

export default Cardlist;