import React from 'react';
import { useHistory } from 'react-router-dom';


const Header = ({onLogOut}) => {
	
	return(
		<header className="header">
			<div className="header-zone">
				<h1>Business Card Maker</h1>
				<span className="sign-out" onClick={onLogOut}>Sing out</span>
			</div>
		</header>	
	)
}

export default Header;