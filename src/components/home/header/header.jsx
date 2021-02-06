import React, { memo } from 'react';


const Header = memo(({onLogOut}) => {
	
	return(
		<header className="header">
			<div className="header-zone">
				<h1>Business Card Maker</h1>
				<span className="sign-out" onClick={onLogOut}>Sing out</span>
			</div>
		</header>	
	)
})

export default Header;