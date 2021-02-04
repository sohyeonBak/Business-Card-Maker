import React from 'react';
import { useHistory } from 'react-router-dom';
import AddButton from './addbutton';

const Header = ({onAdd, cards, count}) => {
	const history = useHistory();

	const onClick =()=> {
		history.push({
			pathname : '/'
		})
	}

	
	
	return(
		<header className="header">
			<div className="header-zone">
			<h1>Business Card Maker</h1>
			<span className="sign-out" onClick={onClick}>Sing out</span>
			<span className="add-card" >
			{Object.keys(cards).map(key => (
				<AddButton value={count} onAdd={onAdd} key={key} card={cards[key]}/>
			))}
			</span>
			</div>
		</header>	
	)
}

export default Header;