let TextBox = document.getElementById("accessKeyTextBox");
let Container = document.getElementById("inputContainer");

const focusHandler = () => {
	inputContainer.style.borderBottom = "2px solid orange";
}

const focusOutHandler = () => {
	inputContainer.style.border = "1px solid rgb(184, 184, 184)";
}
console.log("inside style");
TextBox.addEventListener('focus', focusHandler, false);
TextBox.addEventListener('focusout', focusOutHandler, false);