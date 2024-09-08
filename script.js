// Sample user data
const users = {
    "ADMIN": "6612",
    "ADMIN1": "TEST",
    "user2": "password2",
    "user3": "password3"
};

// Function to validate login
function validateLogin(username, password) {
    if (users[username] && users[username] === password) {
        alert("Login successful!");
        localStorage.setItem('loggedInUser', username);
        showContent();
    } else {
        alert("Invalid username or password.");
    }
}

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    validateLogin(username, password);
}

// Function to show content after login
function showContent() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

// Function to handle logout
function logout() {
    localStorage.removeItem('loggedInUser');
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('content').style.display = 'none';
}

// Check if user is already logged in
window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        showContent();
    }
}
