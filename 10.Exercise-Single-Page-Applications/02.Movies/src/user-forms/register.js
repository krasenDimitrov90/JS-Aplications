import { router } from '../router.js';
import { register } from '../requests.js';
import { saveUser } from '../auth.js';

const registerSection = document.getElementById('form-sign-up');
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if (password.length < 6 || password !== repeatPassword || !email) {
        alert('Incorect inputs');
        return;
    }

    register({email, password})
        .then(user => {
            saveUser(JSON.stringify(user));
            alert('Succesfuly registered!');
            router('Movies');
        })
})

export function renderRegister() {
    registerSection.style.display = 'block';
}