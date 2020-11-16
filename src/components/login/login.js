import React, { Component } from 'react';

import './login.styles.css';

class Login extends Component {
	constructor() {
		super()
	};
	async componentDidMount()
	{
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

		signUpButton.addEventListener('click', () => {
			container.classList.add("right-panel-active");
		});

		signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

	}
	render() {
		return(
			<>
				<div className="container" id="container">
					<div className="form-container sign-up-container">
						<form className="login_form" action="#" method="POST">
							<h1 className="login-h1">Create Account</h1>
							<div className="social-container">
								<input type="text" name="name" placeholder="Name" />
								<input type="email" name="email" placeholder="Email" />
								<input type="password" name="password" placeholder="Password" />
								<input type="text" name="mobile" placeholder="Mobile Number" />
							</div>
							<button className="login_button" type="submit">Sign Up</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
						<form className="login_form" action="#" method="POST">
							<h1 className="login-h1">Sign in</h1>
							<div class="social-container">
							</div>
							<input type="email" name="email" placeholder="Email" />
							<input type="password" name="password" placeholder="Password" />
							<a className="login_a" href="#">Forgot your password?</a>
							<button className="login_button" type="submit">Sign In</button>
						</form>
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1 className="login-h1">StoXkeeper</h1>
								<p className="login-p">Invest with us Today...</p>
								<button class="ghost login_button" id="signIn">Sign In</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h2 className="login-h2">Welcome Investor</h2>
								<p className="login-p">Enjoy the world of Market with StoXkeeper</p>
								<button className="ghost login_button" id="signUp">Sign Up</button>
							</div>
						</div>
					</div>
				</div>
	
			</>
		)
	}
}

export default Login;

