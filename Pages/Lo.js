import React from 'react';
import { Link } from 'react-router-dom';
import './css/loginpagera.css';

// const preventRefresh = (e) => {
// 	e.preventDefault();
// }
export default function Lo() {
	return (
		<div className='lkp'>
		<div className="wrapper signIn">
			<div className="illustration">
				<img src="https://source.unsplash.com/random" alt="illustration" />
			</div>
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
						<label htmlFor="e-mail">E-Mail</label>
						<input type="email" id="e-mail" placeholder="Enter you mail"  />
					</div>
					<div>
						<label htmlFor="Password">Password</label>
						<input type="text" id="Password" placeholder="Enter your Password" />
					</div>
					<Link to="/home"><button type="submit" >
						Submit
					</button></Link>   
				</form>
				<p>
					Don't have an account ? <Link to="/signup"> Sign In </Link>
				</p>
			</div>
		</div>
		</div>
	);
}
