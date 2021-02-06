import React from 'react';
import EditAdd from './editadd';
import EditDefault from './editdefault';

const Edit = ({ImageUploader, cards, updateCard, deleteCard, onAddCard}) => (
    <div className="edit">
        {Object.keys(cards).map(key=>(
            <EditDefault key={key} ImageUploader={ImageUploader} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
        ))}
        <EditAdd ImageUploader={ImageUploader} onAdd={onAddCard}/>
    </div>
);

export default Edit;