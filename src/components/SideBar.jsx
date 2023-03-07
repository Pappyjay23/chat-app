import React from "react";
import Navbar from "../components/Navbar";
import Search from "./Search";
import Chats from "./Chats";

const SideBar = () => {
	return (
		<div className='sidebar'>
			<Navbar />
			<Search />
			<div className='chatsContainer'>
				<Chats />
				<Chats />
				<Chats />
				<Chats />
			</div>
		</div>
	);
};

export default SideBar;
