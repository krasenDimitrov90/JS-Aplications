import { router } from '../router.js';
import { login } from '../requests.js';

const loginSection = document.getElementById('form-login');

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    login({email, password})
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
