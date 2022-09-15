const loginForm = document.getElementById('login-form');
const url = 'http://localhost:3030/users/login';

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(loginForm);

    const email = formData.get('email');
    const password = formData.get('password');

    fetch(url, {
        'method': 'POST',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify({email, password})
    })
        .then(res => {
            if (res.status === 403) {
                throw new Error;
            }

            return res.json();
        })
        .then(data => {
            localStorage.setItem('user', data);
            alert('Succesfuly logged!');
        })
        .catch(err => alert('Incorect email or password!'))
})

export function renderAuth() {
    
}