import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./style.scss";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { ChatContextUse } from "./context/chatContext";

function App() {
	const { currentUser } = ChatContextUse();
	// console.log(currentUser);

	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to='/login' />;
		} else {
			return children;
		}
	};

	return (
		<>
			<Router>
				<Routes>
					<Route path='/'>
						<Route
							index
							element={
								<ProtectedRoute>
									<Home />
								</ProtectedRoute>
							}
						/>
						<Route path='login' element={<Login />} />
						<Route path='register' element={<Register />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
