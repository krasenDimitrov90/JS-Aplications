import page from '../../node_modules/page/page.mjs';
import { html } from '../../node_modules/lit-html/lit-html.js'
import { saveUser } from '../services/auth.js';
import { createSubmitHandler } from '../services/handlers.js';
import * as api from '../services/requests.js';


export const loginView = (ctx, next) => {
    ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)));
    next();
}

const onSubmit = (ctx, data) => {

    api.login(data)
        .then(user => {

            saveUser(user);
            alert('Successfuly loged in');
            page.redirect('/');
        })
}


const loginTemplate = (onSubmit) => html`
    <!-- Login Page ( Only for Guest users ) -->
    <section id="login-page" class="auth">
        <form id="login" @submit=${onSubmit}>
    
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Login</h1>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" class="input-fields">
    
                <label for="login-pass">Password:</label>
                <input type="password" id="login-password" name="password" class="input-fields">
                <input type="submit" class="btn submit" value="Login">
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </div>
        </form>
    </section>
`;

