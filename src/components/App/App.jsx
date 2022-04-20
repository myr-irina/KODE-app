import React from "react";
import "./App.css";
import UserCard from "../UserCard/UserCard";
import Main from "../Main/Main";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
	const [users, setUsers] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		axios({
			method: "GET",
			url: "https://stoplight.io/mocks/kode-education/trainee-test/25143926/users",
			headers: {
				"Content-Type": "application/json",
				Prefer: "code=200, example=success",
			},
		})
			.then((data) => {
				setIsLoading(false);
				setError(false);
				setUsers(
					data.data.items.map((user) => ({
						...user,
						birthdayDate: new Date(user.birthday),
					}))
				);
			})
			.catch((err) => {
				if (err === "404" || err === "500") {
					setError(true);
					setIsLoading(false);
					setUsers([]);
				}
				console.log("Невозможно получить данные с сервера", err);
				setIsLoading(false);
				setUsers([]);
			});
	}, []);

	return (
		<div className='page'>
			<div className='page__container'>
				<Routes>
					<Route
						path='/KODE-app'
						element={<Main error={error} isLoading={isLoading} users={users} />}
					/>

					<Route
						path='/user/:userId'
						element={<UserCard isLoading={isLoading} users={users} />}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
