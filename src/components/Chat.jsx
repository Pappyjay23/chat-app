import React from "react";
import { FaVideo, FaUserPlus } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContextUse } from "../context/chatContext";
import { BiArrowBack } from "react-icons/bi";

const Chat = () => {
	const { showChat, setShowChat } = ChatContextUse();

	return (
		<div className={`chat ${showChat && "showChat"}`}>
			<div className='chatInfo'>
				<div className='userDetails'>
					<span
						className={`backIcon tab`}
						onClick={() => setShowChat(!showChat)}>
						<BiArrowBack />
					</span>
					<span className='topUserImage'>
						<img
							src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwaW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
							alt='Photo'
						/>
					</span>
					<span>Jane</span>
				</div>
				<div className='chatIcons'>
					<span>
						<FaVideo />
					</span>
					<span>
						<FaUserPlus />
					</span>
					<span>
						<FiMoreHorizontal />
					</span>
				</div>
			</div>

			<Messages />
			<Input />
		</div>
	);
};

export default Chat;
