import { router } from '../router.js';

const loginSection = document.getElementById('form-login');

const loginForm = document.getElementById('login-form');
const url = 'http://localhost:3030/users/login';

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'aplication/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(res => {
            if (res.status === 403) {
                console.log(res);
                throw new Error();
            }

            return res.json();
        })
        .then(data => {
            localStorage.setItem('user', JSON.stringify(data));
            alert('Succesfuly logged!');
            router('Movies');
        })
        .catch(err => {
            alert('Incorect email or password!');
            loginForm.reset();
        })
})

export function renderLogin() {
    loginSection.style.display = 'block';
}