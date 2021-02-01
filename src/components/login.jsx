import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({authService}) => {
	const history = useHistory();
	
	const goToMaker = (userId) => {
			history.push({
					pathname : '/home',
					state : {id : userId}
			})
	}

	const onClick = (e) => {
			console.log(e.currentTarget.textContent)
			authService
			.login(e.currentTarget.textContent)
			.then(data => goToMaker(data.user.id))
	}

	// useEffect(() => {
	//     authService.onAuthChange(user => {
	//         user && goToMaker(user.id);})
	// })   

	return (
		<div className="login-zone">
			<div className="login">
				<span className="material-icons md-48 md-dark md-inactive">check_circle_outline</span>
				<h3>Sign in</h3>
				<p>WELCOME! This is Business Card Maker.</p>
				<div className="login-btn google-login" onClick={onClick}>Google</div>
				<div className="login-btn github-login" onClick={onClick}>Github</div>
			</div>
		</div>
	)
}
    

export default Login;