import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { Outlet, useLocation, Navigate } from "react-router-dom";

export default function Private() {
	const { currentUser } = useContext(UserContext);

	if (!currentUser) {
		return <Navigate to='/'/>
	}

	return (
		<div className="container">
			<Outlet/>
		</div>
		);
}
