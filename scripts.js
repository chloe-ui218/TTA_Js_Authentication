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
];

document.addEventListener('DOMContentLoaded', () => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
        displayContent(savedRole);
    } else {
        const loginContainer = document.querySelector('.login-container');
        if (loginContainer) {
            loginContainer.style.display = 'block';
        } else {
            console.error('Login container not found');
        }
    }
});

const loginForm = document.querySelector('#loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.querySelector('#userName').value.trim();
        const password = document.querySelector('#password').value.trim();
        const errorContainer = document.querySelector('#errorMessage');
        const successContainer = document.querySelector('#successMessage');

        if (!errorContainer || !successContainer) {
            console.error('Error or success container not found');
            return;
        }

        if (!username || !password) {
            errorContainer.textContent = 'Please fill in all fields';
            successContainer.textContent = '';
        } else {
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                errorContainer.textContent = '';
                successContainer.textContent = `Welcome ${user.role}`;
                localStorage.setItem('userRole', user.role);
                displayContent(user.role);
            } else {
                errorContainer.textContent = 'Invalid username or password';
                successContainer.textContent = '';
            }
        }
    });
} else {
    console.error('Login form not found');
}

function displayContent(role) {
    const loginContainer = document.querySelector('.login-container');
    if (loginContainer) {
        loginContainer.style.display = 'none';
    } else {
        console.error('Login container not found');
    }

    const existingContent = document.querySelector('.content');
    if (existingContent) {
        existingContent.remove();
    }

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    if (role === 'admin') {
        contentDiv.innerHTML = `
            <h2>Welcome ${role}</h2>
            <button class="create-button">Create</button>
            <button class="view-button">View</button>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>`;
    } else if (role === 'editor') {
        contentDiv.innerHTML = `
            <h2>Welcome ${role}</h2
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>`;
    } else if (role === 'viewer') {
        contentDiv.innerHTML = `
            <h2>Welcome ${role}</h2>
            <button>View</button>
            // <button>Edit</button>`;
    }

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.classList.add('logout-button');

    logoutButton.addEventListener('click', logout);

    contentDiv.appendChild(logoutButton);
    document.body.appendChild(contentDiv);
}

function logout() {
    localStorage.removeItem('userRole');
    location.reload();
}
