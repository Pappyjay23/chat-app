import { signOut } from "firebase/auth";
import React from "react";
import { ChatContextUse } from "../context/chatContext";
import { auth } from "../firebase";

const Navbar = () => {
	const { currentUser } = ChatContextUse();

	return (
		<div className='navbar'>
			<span className='logo'>Chatify</span>
			<div className='user'>
				<img src={currentUser.photoURL} alt='Photo' />
				<span>{currentUser.displayName}</span>
				<button onClick={() => signOut(auth)}>Logout</button>
			</div>
		</div>
	);
};

export default Navbar;
