const validUsername = "TEST";
const validPassword = "TEST068";
const links = ["search.html", "yt.html", "run.html"]; // Add your extensions here

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        localStorage.setItem("loggedIn", "true");
        showContent();
        startLogoutTimer();
    } else {
        alert("Invalid username or password");
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    showLoginForm();
}

function showContent() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("content").style.display = "block";
    generateLinks();
}

function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("content").style.display = "none";
}

function checkLoginStatus() {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn) {
        showContent();
    } else {
        showLoginForm();
    }
}

function startLogoutTimer() {
    setTimeout(logout, 3600000); // 1 hour in milliseconds
}

function generateLinks() {
    const linksList = document.getElementById("links-list");
    linksList.innerHTML = "";
    links.forEach(link => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = link;
        anchor.textContent = link;
        listItem.appendChild(anchor);
        linksList.appendChild(listItem);
    });
}

window.onload = function() {
    checkLoginStatus();
    if (localStorage.getItem("loggedIn")) {
        startLogoutTimer();
    }
};

// Add this script to the start of your other extensions
(function() {
    const loggedIn = localStorage.getItem("loggedIn");
    const currentPage = window.location.pathname.split("/").pop();
    if (!loggedIn && currentPage !== "index.html") {
        window.location.href = "index.html"; // Redirect to the main page if not logged in
    }
})();
