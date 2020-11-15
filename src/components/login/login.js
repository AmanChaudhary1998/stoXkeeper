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
				<div class="container" id="container">
					<div class="form-container sign-up-container">
						<form action="#">
							<h1>Create Account</h1>
							<div class="social-container">
							</div>
							<input type="text" name="name" placeholder="Name" />
							<input type="email" name="email" placeholder="Email" />
							<input type="password" name="password" placeholder="Password" />
							<input type="text" name="mobile" placeholder="Mobile Number" />
							<button type="submit">Sign Up</button>
						</form>
					</div>
					<div class="form-container sign-in-container">
						<form action="#">
							<h1>Sign in</h1>
							<div class="social-container">
							</div>
							<input type="email" name="email" placeholder="Email" />
							<input type="password" name="password" placeholder="Password" />
							<a href="#">Forgot your password?</a>
							<button type="submit">Sign In</button>
						</form>
					</div>
					<div class="overlay-container">
						<div class="overlay">
							<div class="overlay-panel overlay-left">
								<h1>StoXkeeper</h1>
								<p>Invest with us Today...</p>
								<button class="ghost" id="signIn">Sign In</button>
							</div>
							<div class="overlay-panel overlay-right">
								<h2>Welcome Investor</h2>
								<p>Enjoy the world of Market with StoXkeeper</p>
								<button class="ghost" id="signUp">Sign Up</button>
							</div>
						</div>
					</div>
				</div>
	
			</>
		)
	}
}

export default Login;

