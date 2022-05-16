import React, { useContext } from 'react';
import { UserContext } from '../Context/userContext';

export default function Home() {
	const {currentUser} = useContext(UserContext);
	return (
		<div className='container p-5'>
			<h1 className='display-2 text-light'>
				{currentUser ? "Welcome Buddy !" : "Hi, Sign up or sign in"}
			</h1>
		</div>
	);
}
