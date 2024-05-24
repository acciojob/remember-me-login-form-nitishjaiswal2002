//your JS code here. If required.
 const form = document.getElementById('loginForm');
        const rememberCheckbox = document.getElementById('remember');
        const existingUserButton = document.getElementById('existing');

        // Check if there are saved details in local storage
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');
        if (savedUsername && savedPassword) {
            existingUserButton.style.display = 'block';
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (rememberCheckbox.checked) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            alert('Logged in as ' + username);
        });

        existingUserButton.addEventListener('click', function() {
            const savedUsername = localStorage.getItem('username');
            alert('Logged in as ' + savedUsername);
        });