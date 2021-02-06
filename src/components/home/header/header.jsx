import React from 'react';
import { useHistory } from 'react-router-dom';


const Header = () => {
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
			</div>
		</header>	
	)
}

export default Header;