import React, { useRef } from 'react';

const Edit = ({card, updateCard, deleteCard, count}) => {
	const nameRef = useRef();
	const officeRef = useRef();
	const addressRef = useRef();
	const phoneRef = useRef();
	const emailRef = useRef();

	const {
		name,
		office,
		address,
		phone,
		email
	} = card;
	
	const onChange = e => {
		if(e.currentTarget===null){
			return
		};
		e.preventDefault();
		updateCard({
			...card,
			[e.currentTarget.name] : e.currentTarget.value,
		});
	}

	const onSubmit =()=>{}

	return(
		<div className="edit-zone">
			<form onSubmit={onSubmit}>
				<h3>Name</h3>
				<input type="text" name="name" value={name} ref={nameRef} onChange={onChange}/>
				<h3>Offic</h3>
				<input type="text" name="office" value={office} ref={officeRef} onChange={onChange}/>	
				<h3>Office address</h3>
				<input type="text" name="address" value={address} ref={addressRef} onChange={onChange}/>	
				<h3>Phone Number</h3>
				<input type="text" name="phone" value={phone} ref={phoneRef} onChange={onChange}/>	
				<h3>Email</h3>
				<input type="text" name="email" value={email} ref={emailRef} onChange={onChange}/>	
				<button>delete</button>
			</form>
		</div>
				
	)
}

export default Edit;