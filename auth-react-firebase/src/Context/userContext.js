import { createContext, useEffect, useState } from "react";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
	// Partie utilisateur
	const [currentUser, setCurrentUser] = useState();
	const [loadingData, setLoadingData] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setCurrentUser(currentUser);
			setLoadingData(false);
		});
		return unsubscribe;
	}, [])

	const signUp = (email, pwd) =>
		createUserWithEmailAndPassword(auth, email, pwd);

	// Partie Modal
	const [modalState, setModalState] = useState({
		signUpModal: false,
		signInModal: false,
	});

	const toggleModals = (modal) => {
		if (modal === "signIn") {
			setModalState({
				signUpModal: false,
				signInModal: true,
			});
		}
		if (modal === "signUp") {
			setModalState({
				signUpModal: true,
				signInModal: false,
			});
		}
		if (modal === "close") {
			setModalState({
				signUpModal: false,
				signInModal: false,
			});
		}
	};

	return (
		<UserContext.Provider value={{ modalState, toggleModals, signUp }}>
			{!loadingData && props.children}
		</UserContext.Provider>
	);
}
