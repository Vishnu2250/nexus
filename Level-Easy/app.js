// script.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        // Handle login logic here

        alert(`You have SUCCESFULLY Logged in with email: ${email}`);
    });

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        // Handle signup logic here

        alert(`You have SUCCESFULLY Signned up with email: ${email}`);
    });
});

function toggleForm() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    loginForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");
}
