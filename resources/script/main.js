let submitButton = document.getElementById("access_key_button");
let accessKeyTextBox = document.getElementById("accessKeyTextBox");

const submitFunction = () => {
	let accessKeyString = "http://api.weatherstack.com/current?access_key=" + accessKeyTextBox.value;

	const requestOptions = {
		method: "GET",
		mode: "no-cors",
		headers: {
			"Content-Type": "application/json"
		}
	};

	const address = '57ec8dbd846c41ad53e2f416098bd745';


	const params = {
		access_key: address,
		query: 'New York'
	}

	axios.get('https://api.weatherstack.com/current', { params })
		.then(response => {
			const apiResponse = response.data;
			console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperat}`).catch(error => {
				console.log(error);
			});


		});
	}
	submitButton.addEventListener('click', submitFunction);