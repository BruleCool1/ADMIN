// Sample user data
const users = {
    "ADMIN": "04628",
    "user2": "password2",
    "user3": "password3"
};

// Function to validate login
function validateLogin(username, password) {
    if (users[username] && users[username] === password) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}

// Example usage
const usernameInput = "user1"; // Replace with actual input from user
const passwordInput = "password1"; // Replace with actual input from user

validateLogin(usernameInput, passwordInput);
