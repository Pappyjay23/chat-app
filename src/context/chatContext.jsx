import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
	const [showChat, setShowChat] = useState(false);
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		const unsub = () =>
			onAuthStateChanged(auth, (user) => {
				setCurrentUser(user);
			});

		return () => {
			unsub();
		};
	});

	const values = {
		showChat,
		setShowChat,
		currentUser,
	};
	return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const ChatContextUse = () => {
	return useContext(ChatContext);
};
