import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
	const history = useHistory();

	const onClick =()=> {
		history.push({
			pathname : '/'
		})
	}

	const onAddCard=(e)=>{
		console.log(e)
	}
	return(
		<header className="header">
			<h1>Business Card Maker</h1>
			<span className="sign-out" onClick={onClick}>Sing out</span>
			<span className="add-card" onClick={onAddCard}>+ Add Card</span>
		</header>	
	)
}

export default Header;