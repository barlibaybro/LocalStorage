
function register() {
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;
	localStorage.setItem('login', login);
	localStorage.setItem('password', password);
	alert("Register successful");

}

function signin() {
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;

	if ((login == localStorage.getItem('login')) && (password == localStorage.getItem('password'))) {
		alert("Login successful");
	}

	else {
		alert("Incorrect login or password");
	}
		
}

