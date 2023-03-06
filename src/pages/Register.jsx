import React from "react";
import { BiImageAdd } from "react-icons/bi";

const Register = () => {
	return (
		<div className='formContainer'>
			<div className='formWrapper'>
				<span className='logo'>Chatify</span>
				<span className='title'>Register</span>
				<form>
					<input type='text' placeholder='Display Name' />
					<input type='email' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<input style={{ display: "none" }} type='file' id='file' />
					<label htmlFor='file'>
						<p className='imageIcon'>
							<BiImageAdd />
						</p>
						<span> Add an avatar </span>
					</label>
					<button>Sign Up</button>
				</form>
				<p>You do have an account? Login</p>
			</div>
		</div>
	);
};

export default Register;
