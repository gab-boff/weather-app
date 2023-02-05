import { useEffect, useState } from 'react';
import './App.css';
import { postAPI } from './api';

function App() {
	//eslint-disable-next-line
	const [data, setData] = useState<any>([]);
	const [input, setInput] = useState<string>('');

	useEffect(() => {
		console.log(data);
	}, [data]);

	const handleSubmit = () => {
		postAPI(input).then((res) => setData(res));
	};

	return (
		<div className="App">
			<input
				className="bg-white m-2 p-2 border-solid border-white border-2 rounded-lg"
				type="text"
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				className="bg-white m-2 p-2 border-solid border-white border-2 rounded-full min-w-[40px] min-h-[40px]"
				onClick={handleSubmit}
			>
				<i className="fa-solid fa-magnifying-glass"></i>
			</button>
			<h1 className="text-lg uppercase underline">Olá</h1>
		</div>
	);
}

export default App;
