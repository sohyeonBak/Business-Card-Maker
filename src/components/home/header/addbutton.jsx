import React from 'react';

const AddButton = ({onAdd, value, card}) => {
	const onClick = (e) =>{
		e.preventDefault();
		let counts = value + 1
		onAdd(counts,card)
	}
	return(
	<>
	<button onClick={onClick}  >+Add Card</button>
	<p>{value}</p>
	</>
)

}

export default AddButton;