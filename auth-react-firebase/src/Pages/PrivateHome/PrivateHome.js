import React from 'react';
import cat from './giphy.gif';

export default function PrivateHome() {

	

	return (
		<div className='container p-5'>
			<h1 className="display-3 text-light mb-4">
				HOME SWEET PRIVE HOME
			</h1>
			<img src={cat} alt="gif" />
		</div>
	)
}
