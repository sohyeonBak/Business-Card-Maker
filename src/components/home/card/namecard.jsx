import React from 'react';

const Namecard = ({card,value}) => {
	const {
		name,
		office,
		address,
		phone,
		email
	} = card;

	return(
	<div className="name-card-zone">
			<h2>Card {value}</h2>
			<div className="name-card">
				<div class="face-zone">
					<div className="face"></div>
					<p>{name}</p>
				</div>
				<ul className="info">
						<li class="offic-name">{office}</li>
						<li class="office-address">{address}</li>
						<li class="phone">{phone}</li>
						<li class="email">{email}</li>
				</ul>
			</div>
		</div>
)
	}

export default Namecard;