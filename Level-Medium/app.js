function openModal(modalType) {
    if (modalType === 'login') {
        document.getElementById('loginModal').style.display = 'block';
    } else if (modalType === 'signup') {
        document.getElementById('signupModal').style.display = 'block';
    }
}

function closeModal(modalType) {
    if (modalType === 'login') {
        document.getElementById('loginModal').style.display = 'none';
    } else if (modalType === 'signup') {
        document.getElementById('signupModal').style.display = 'none';
    }
}

function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Simulate authentication
    if (username === "user" && password === "pass") {
        document.getElementById('loginMessage').textContent = "Login successful!";
        document.getElementById('loginMessage').style.color = "green";
        setTimeout(()=> closeModal('login'),4500);
    } else {
        document.getElementById('loginMessage').textContent = "Invalid username or password.";
    }
}

function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Simulate signup process
    document.getElementById('signupMessage').textContent = "Signup successful!";
    document.getElementById('signupMessage').style.color = "green";
    setTimeout(()=> closeModal('signup'),4500);
}

// Close modal if clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
