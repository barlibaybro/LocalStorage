
function signup() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	localStorage.setItem(username + 'username', username);
	localStorage.setItem(username + 'password', password);
	alert("Sign up successfully, now you can sign in.");

}

function signin() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;


	if ((username == 'clearlocalStorage') && (password == 'admin')) {
		localStorage.clear();
		alert("localStorage cleared successfully!");
	}

	else if ((username == localStorage.getItem(username + 'username')) && (password == localStorage.getItem(username + 'password'))) {
		alert("Sign in successfully!");
	}

	else {
		alert("Incorrect username or password. Please try again.");
	}
		
}


