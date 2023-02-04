import axios from 'axios';

export async function postAPI(cityName: string) {
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
				import.meta.env.VITE_API_KEY
			}`
		);
		console.log(response);
		return response.data;
	} catch (error) {
		return error;
	}
}
