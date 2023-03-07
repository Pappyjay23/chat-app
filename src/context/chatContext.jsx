import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
	const [showChat, setShowChat] = useState(false);
	

	const values = {
		showChat,
		setShowChat,
	};
	return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const ChatContextUse = () => {
	return useContext(ChatContext);
};
