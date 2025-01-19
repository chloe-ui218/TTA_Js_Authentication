const users = [
    {
        username: 'admin',
        password: 'admin123',
        role: 'admin'
    },
    {
    username: 'editor',
    password: 'editor123',
    role: 'editor'
    },
    {
        username: 'viewer',
        password: 'viewer123',
        role: 'viewer'
    }
]

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const errorContainer = document.querySelector('#error-message');

    const user = users.find(function(user) {

    // if (!username || !password) {
    //     errorContainer.textContent = 'Please fill in all fields';
    // } else {
    //     errorContainer.textContent = '';
    //}
});