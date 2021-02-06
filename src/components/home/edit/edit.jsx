import React from 'react';
import EditAdd from './editadd';
import EditDefault from './editdefault';

const Edit = ({cards, updateCard, deleteCard, onAddCard}) => (
    <div className="edit">
        {Object.keys(cards).map(key=>(
            <EditDefault key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
        ))}
        <EditAdd onAdd={onAddCard}/>
    </div>
);

export default Edit;