import React from "react";

const Navbar = () => {
	return (
		<div className='navbar'>
			<span className='logo'>Chatify</span>
			<div className='user'>
				<img
					src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwaW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
					alt='Photo'
				/>
				<span>John</span>
				<button>Logout</button>
			</div>
		</div>
	);
};

export default Navbar;
