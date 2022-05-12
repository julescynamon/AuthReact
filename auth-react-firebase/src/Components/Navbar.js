import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="navbar navbar-light bg-light px-4">
			<Link to='/' className='navbar-brand'>Auth JS</Link>
			<div>
				<button className="btn btn-primary">Sign Up</button>
				<button className="btn btn-primary ms-2">Sign In</button>
				<button className="btn btn-danger ms-2">Log out</button>
			</div>
		</nav>
	)
}
