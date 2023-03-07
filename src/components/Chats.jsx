import React from "react";
import { ChatContextUse } from "../context/chatContext";

const Chats = () => {
	const { showChat, setShowChat } = ChatContextUse();
	return (
		<div className='chats'>
			<div className='userChat' onClick={() => setShowChat(!showChat)}>
				<img
					src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwaW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
					alt='Photo'
				/>
				<div className='userChatInfo'>
					<span>Jane</span>
					<p>Hello</p>
				</div>
			</div>
		</div>
	);
};

export default Chats;
