const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.querySelector('#userName').value;
    const password = document.querySelector('#password').value;
    const errorContainer = document.querySelector('#errorMessage');
    // errorContainer.innerHTML = '';

    if (!username.trim() || !password.trim()) {
        errorContainer.textContent = 'Please fill in all fields';
    } else {
    } errorContainer.textContent = '';
})