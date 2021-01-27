
function register() {
	let login = document.getElementById('login1').value;
	let password = document.getElementById('password1').value;
	localStorage.setItem('login', login);
	localStorage.setItem('password', password);
}

function signin() {
	let login = document.getElementById('login2').value;
	let password = document.getElementById('password2').value;

	if ((login == localStorage.getItem('login')) && (password == localStorage.getItem('password'))) {
		alert("Login successful");
	}

	else {
		alert("Incorrect login or password");
	}
		
}

