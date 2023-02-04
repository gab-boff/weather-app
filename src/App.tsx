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
			<input type="text" onChange={(e) => setInput(e.target.value)} />
			<button onClick={handleSubmit}></button>
		</div>
	);
}

export default App;
