import React, { useRef } from 'react';

const Edit = (props) => {
	const nameRef = useRef();
	const officeRef = useRef();
	const office_addressRef = useRef();
	const phone_numberRef = useRef();
	const emailRef = useRef();


	// const card = {
	// 	name : nameRef.currentTarget.value || '',
	// 	office : officeRef.currentTarget.value || '',
	// 	office_address : office_addressRef.currentTarget.value || '',
	// 	phone_number : phone_numberRef.currentTarget.value || '',
	// 	email : emailRef.currentTarget.value || '',
	// }

	return(
		<div className="edit-zone">
			<div className="name">
				<h3>Name</h3>
				<input type="text" ref={nameRef}/>
			</div>
			<div className="offic-name">
				<h3>Offic</h3>
				<input type="text" ref={officeRef}/>	
			</div>
			<div className="office-address">
				<h3>Office address</h3>
				<input type="text" ref={office_addressRef}/>	
			</div>
			<div className="phone">
				<h3>Phone Number</h3>
				<input type="text" ref={phone_numberRef}/>	
			</div>
			<div className="email">
				<h3>Email</h3>
				<input type="text" ref={emailRef}/>	
			</div>
		</div>
				
	)
}

export default Edit;