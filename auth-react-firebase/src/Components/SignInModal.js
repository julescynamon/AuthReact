import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../Context/userContext";

export default function SignInModal() {
	const { modalState, toggleModals, signIn } = useContext(UserContext);

	const closeModal = () => {
		toggleModals("close");
	};

	return (
		<>
			{modalState.signInModal && (
				<div className='position-fixed top-0 vw-100 vh-100'>
					<div
						onClick={closeModal}
						className='w-100 h-100 bg-dark bg-opacity-75'
					></div>
					<div
						className='position-absolute top-50 start-50 translate-middle'
						style={{ minWidth: "400px" }}
					>
						<div className='modal-dialog'>
							<div className='modal-content'>
								<div className='modal-header'>
									<h5 className='modal-title'>Sign Up</h5>
									<button
										onClick={closeModal}
										className='btn-close'
									></button>
								</div>

								<div className='modal-body'>
									<form className='sign-up-form'>
										<div className='mb-3'>
											<label
												htmlFor='signInEmail'
												className='form-label'
											>
												Email adress
											</label>
											<input
												name='email'
												required
												type='email'
												className='form-control'
												id='signInEmail'
											/>
										</div>

										<div className='mb-3'>
											<label
												htmlFor='signInPwd'
												className='form-label'
											>
												Password
											</label>
											<input
												name='pwd'
												required
												type='password'
												className='form-control'
												id='signInPwd'
											/>
											<p className='text-danger mt-1'></p>
										</div>

										<button className='btn btn-primary'>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
