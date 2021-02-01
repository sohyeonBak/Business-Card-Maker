import React from 'react';

const Namecard = ({card}) => (
	<div className="name-card-zone">
			<h2>Card {card.id}</h2>
			<div className="name-card">
				<div class="face-zone">
					<div className="face"></div>
					<p>{card.name}</p>
				</div>
				<ul className="info">
						<li class="offic-name">{card.office}</li>
						<li class="office-address">{card.office_address}</li>
						<li class="phone">{card.phone_number}</li>
						<li class="email">{card.email}</li>
				</ul>
			</div>
		</div>
)

export default Namecard;