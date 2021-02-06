import React from 'react';

const CardList = ({card}) => {
return(
    <div className="name-card">
        <div class="face-zone">
            <div className="face"></div>
            <p>{card.name}</p>
        </div>
        <ul className="info">
            <li class="office-name">{card.office}</li>
            <li class="office-address">{card.address}</li>
            <li class="phone">{card.phone}</li>
            <li class="email">{}{card.email}</li>
        </ul>
    </div>

);
}
export default CardList;<div></div>