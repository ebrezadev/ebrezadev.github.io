let submitButton = document.getElementById("access_key_button");
let accessKeyTextBox = document.getElementById("accessKeyTextBox");

const submitFunction = () => {
	const params = {
		access_key: accessKeyTextBox.value,
		query: 'New York'
	}

	axios.get('http://api.weatherstack.com/current', { params })
		.then(response => {
			const apiResponse = response.data;
			console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}`);
		})
		.catch(error => {
			console.log(error);
		});
}

submitButton.addEventListener('click', submitFunction);