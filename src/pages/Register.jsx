import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const [profileImg, setProfileImg] = useState("No file chosen");
	const navigate = useNavigate();

	const [isSubmit, setIsSubmit] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isFailure, setIsFailure] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmit(true);

		const displayName = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const file = e.target[3].files[0];

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);

			const storageRef = ref(storage, displayName);

			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				(error) => {
					setError(error.message);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						await updateProfile(res.user, {
							displayName,
							photoURL: downloadURL,
						});

						await setDoc(doc(db, "users", res.user.uid), {
							uid: res.user.uid,
							displayName,
							email,
							photoURL: downloadURL,
						});

						await setDoc(doc(db, "userChats", res.user.uid), {});
						setError("");
						setSuccess(true);
						setIsSuccess(true);

						setTimeout(() => {
							navigate("/");
						}, 2000);
					});
				}
			);
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
				<span className='title'>Register</span>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder='Display Name' />
					<input type='email' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<input
						style={{ display: "none" }}
						type='file'
						id='file'
						onChange={(e) => {
							setProfileImg(e.target.files[0].name);
						}}
					/>
					<label htmlFor='file'>
						<p className='imageIcon'>
							<BiImageAdd />
						</p>
						<span> Add an avatar </span>
					</label>
					<span className='fileName'>{profileImg}</span>
					<button>
						{isSubmit ? (
							<span>Loading...</span>
						) : isFailure ? (
							<span> Try Again </span>
						) : isSuccess ? (
							<span>Success</span>
						) : (
							<span>Sign Up</span>
						)}
					</button>
					{error.length > 0 && <span className='authError'>{error}</span>}
					{error.length < 1 && success && (
						<span className='authSuccess'>Sucessfully registered.</span>
					)}
				</form>
				<p>
					You do have an account? <Link to='/login'>Login</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
