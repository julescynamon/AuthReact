import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/userContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

export default function Navbar() {
	const { toggleModals } = useContext(UserContext);

	const navigate = useNavigate();

	const logout = async () => {
		try {
			await signOut(auth);
			navigate('/');
		} catch (error) {
			alert("For some reasons we can't deconnect, please check your connection")
		}
	}

	return (
		<nav className='navbar navbar-light bg-light px-4'>
			<Link to='/' className='navbar-brand'>
				Auth JS
			</Link>
			<div>
				<button
					onClick={() => toggleModals("signUp")}
					className='btn btn-primary'
				>
					Sign Up
				</button>
				<button
					onClick={() => toggleModals("signIn")}
					className='btn btn-primary ms-2'
				>
					Sign In
				</button>
				<button onClick={logout} className='btn btn-danger ms-2'>Log out</button>
			</div>
		</nav>
	);
}
