import React from 'react';

const CardList = ({card}) => {
return(
    <div className="name-card">
        <div className="face-zone">
            <div className="face" >
            <img src={card.fileURL} alt={card.fileName} />
            </div>
            
            <p>{card.name}</p>
        </div>
        <ul className="info">
            <li className="office-name">{card.office}</li>
            <li className="office-address">{card.address}</li>
            <li className="phone">{card.phone}</li>
            <li className="email">{}{card.email}</li>
        </ul>
    </div>

);
}
export default CardList;<div></div>