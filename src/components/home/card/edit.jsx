import React from 'react';

const Edit = ({card}) => {
	return(
		<div className="edit-zone">
			<div className="name">
				<h3>Name</h3>
				<input type="text" value={card.name}/>	
			</div>
			<div className="offic-name">
				<h3>Offic</h3>
				<input type="text" value={card.office}/>	
			</div>
			<div className="office-address">
				<h3>Office address</h3>
				<input type="text" value={card.office_address}/>	
			</div>
			<div className="phone">
				<h3>Phone Number</h3>
				<input type="text" value={card.phone_number}/>	
			</div>
			<div className="email">
				<h3>Email</h3>
				<input type="text" value={card.email}/>	
			</div>
		</div>
				
	)
}

export default Edit;