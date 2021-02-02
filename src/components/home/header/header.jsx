import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = ({onAddCard}) => {
	const history = useHistory();

	const onClick =()=> {
		history.push({
			pathname : '/'
		})
	}

	const onAdd = ()=>{
		onAddCard()
	}
	
	return(
		<header className="header">
			<div className="header-zone">
			<h1>Business Card Maker</h1>
			<span className="sign-out" onClick={onClick}>Sing out</span>
			<span className="add-card" onClick={onAdd}>+ Add Card</span>
			</div>
		</header>	
	)
}

export default Header;