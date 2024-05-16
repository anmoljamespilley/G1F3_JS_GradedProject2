document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorElement = document.getElementById('error');

    // Define the users
    const users = [
        { username: 'admin', password: 'admin' },
        { username: 'anmol', password: 'admin' }
    ];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Retrieve users from local storage
        const storedUsers = JSON.parse(localStorage.getItem('users'));

        // Simulate asynchronous login authentication (replace with actual logic)
        setTimeout(function() {
            const authenticatedUser = storedUsers.find(user => user.username === username && user.password === password);
            if (authenticatedUser) {
                // Set the isLoggedIn flag upon successful login
                localStorage.setItem('isLoggedIn', true.toString());
                // Redirect to Resume Page upon successful login
                window.location.href = 'resume-page.html';
            } else {
                errorElement.textContent = 'Invalid username/password';
            }
        }, 1000); // Simulate network delay for better user experience
    });
});
