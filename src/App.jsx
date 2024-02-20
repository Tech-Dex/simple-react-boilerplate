import { useEffect, useState } from "react";
import reactLogo from "@globalAssets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";
import useZuStore from "@store/store.js";
import { useQuery } from "@tanstack/react-query";
import { fetchPerson } from "@api/swapi.js";
import { Link } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);
	const [randomNumberVersion1, setRandomNumberVersion1] = useState(0);
	const setAuth = useZuStore((state) => state.login);
	const setUser = useZuStore((state) => state.setUser);
	const user = useZuStore((state) => state.user) || "no user";

	const handleSubmit = async (e) => {
		e.preventDefault();
		setRandomNumberVersion1(e.target[0].value);
	};

	const { data, isLoading, error } = useQuery({
		queryKey: ["randomPerson", randomNumberVersion1],
		queryFn: () => fetchPerson(randomNumberVersion1),
		retry: false,
		enabled: randomNumberVersion1 > 0,
	});

	useEffect(() => {
		if (data) {
			setUser(data.name);
			setAuth("fake one " + data.name);
		}
	}, [data, setUser, setAuth]);

	if (isLoading) return "Loading...";
	if (error) return "An error has occurred: " + error.message;

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div>
				<Link to='/page1'>Go to Page 1</Link>
				<br />
				<Link to='/page2'>Go to Page 2</Link>
				<br />
				<Link to='/'>Root</Link>
			</div>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<div className='card'>{<p>user from zustore: {JSON.stringify(user)}</p>}</div>
			<div className='card'>
				<form onSubmit={handleSubmit}>
					<label>
						Random number:
						<input type='number' />
					</label>
					<button type='submit'>Fetch</button>
				</form>
				<p>data: {JSON.stringify(data)}</p>
				<p>randomNumber: {randomNumberVersion1}</p>
			</div>
			<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
