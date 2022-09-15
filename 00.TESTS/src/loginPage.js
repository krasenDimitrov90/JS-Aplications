import { updateAuth } from "./auth.js";

const loginSection = document.querySelector('.login');
const loginForm = loginSection.querySelector('form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');

    fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'aplication/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(res => {
            if (res.status === 403) throw new Error();
            return res.json();
        })
        .then(user => {
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            updateAuth();
            alert('successfuly logged in');
        })
        .catch(err => alert('Incorect email or password!'))
})

export function renderLogin() {
    loginSection.style.display = 'block';
}