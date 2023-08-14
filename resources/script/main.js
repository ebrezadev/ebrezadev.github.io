let accessKeyButton = document.getElementById("accessKeyButton");
let accessKeyTextBox = document.getElementById("accessKeyTextBox");
let responseBox = document.getElementById("responseBox");

const submitFunction = () => {
	const params = {
		access_key: accessKeyTextBox.value,
		query: 'Tehran'
	}

	axios.get('http://api.weatherstack.com/current', { params })
		.then(response => {
			const apiResponse = response.data;
			if(apiResponse.success === false){
				responseBox.innerHTML = "Checkout your access key.";
				return;
			}
			responseBox.innerHTML = `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}`;
		})
		.catch(error => {
			console.log(error);
		});
}

const keyPressFunction = (event) => {
	if(event.key === "Enter")
	{
		submitFunction();
	}
}
console.log("inside main");
accessKeyButton.addEventListener('click', submitFunction, false);
accessKeyTextBox.addEventListener('keypress', keyPressFunction, false);