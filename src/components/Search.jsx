import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
	const [username, setUsername] = useState("");
	const [user, setUser] = useState(null);
	const [err, setErr] = useState("");

	const handleSearch = async () => {
		
		try {
			const usersRef = collection(db, "users");
			const q = query(usersRef, where("displayName", "==", username));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				setUser(doc.data());
				console.log(doc.data())
			});
		} catch (error) {
			setErr(error.message);
			console.log(error);
		}
	};

	const handleKeyDown = (e) => {
		e.code === "Enter" && handleSearch();
	};

	const handleSelect = () =>{
		
	}

	useEffect(() => {
		handleSearch();
	}, [username]);

	return (
		<div className='search'>
			<div className='searchForm'>
				<input
					type='text'
					placeholder='Find a user'
					onKeyDown={handleKeyDown}
					onChange={(e) => setUsername(e.target.value)}
				/>
				{err.length > 0 && <span className='authError'>{err}</span>}
			</div>
			{user && (
			<div className='userChat' onClick={handleSelect}>
				<img src={user?.photoURL} alt='Photo' />
				<div className='userChatInfo'>
					<span>{user?.displayName}</span>
				</div>
			</div>
			)}
		</div>
	);
};

export default Search;
