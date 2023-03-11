import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Login = () => {
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();

	const [isSubmit, setIsSubmit] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isFailure, setIsFailure] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmit(true);

		const email = e.target[0].value;
		const password = e.target[1].value;

		try {
			await signInWithEmailAndPassword(auth, email, password);
			setError("");
			setSuccess(true);
			setIsSuccess(true);

			setTimeout(() => {
				navigate("/");
			}, 1000);
		} catch (error) {
			setError(error.message);
			setIsSubmit(false);
			setIsFailure(true);
		}
	};

	return (
		<div className='formContainer'>
			<div className='formWrapper'>
				<span className='logo'>Chatify</span>
				<span className='title'>Login</span>
				<form onSubmit={handleSubmit}>
					<input type='email' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<button>
						{isSubmit ? (
							<span>Loading...</span>
						) : isFailure ? (
							<span> Try Again </span>
						) : isSuccess ? (
							<span>Success</span>
						) : (
							<span>Sign In</span>
						)}
					</button>
					{error.length > 0 && <span className='authError'>{error}</span>}
					{error.length < 1 && success && (
						<span className='authSuccess'>Sucessful login</span>
					)}
				</form>
				<p>
					You do not have an account? <Link to='/register'>Register</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
