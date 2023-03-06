import React from "react";

const Message = () => {
	return (
		<div className='message owner'>
			<div className='messageInfo'>
				<img
					src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwaW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
					alt='Photo'
				/>
				<span>Just now</span>
			</div>
			<div className='messageContent'>
				<p>Hello</p>
				<img
					src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwaW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
					alt='Photo'
				/>
			</div>
		</div>
	);
};

export default Message;
