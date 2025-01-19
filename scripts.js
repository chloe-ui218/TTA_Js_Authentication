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
    const successContainer = document.querySelector('#success-message');
    if (!errorContainer) {
        console.error('Error container not found');
        return;
    }

   // const user = users.find(user => user.username === username && user.password === password);

   if(!username || !password) {
    errorContainer.textContent = 'Please fill in all fields';
   } else {
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        errorContainer.textContent = '';
        successContainer.textContent = `Welcome ${user.role}`;
        //alert(`Welcome ${user.role}`);
    } else {
        errorContainer.textContent = 'Invalid username or password';
      }
   }
});