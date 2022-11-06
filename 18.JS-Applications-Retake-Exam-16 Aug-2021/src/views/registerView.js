import page from "../../node_modules/page/page.mjs";
import { html } from '../../node_modules/lit-html/lit-html.js'
import { createSubmitHandler } from '../services/handlers.js';
import * as api from '../services/requests.js';
import { saveUser } from "../services/auth.js";

export const registerView = (ctx, next) => {
    ctx.render(registerTemplate(createSubmitHandler(ctx, onSubmit)));
    next();
}

const onSubmit = (ctx, data) => {

    const {email, password, ['confirm-password']: rePass} = data;
    if (password !== rePass) {
        alert('Password and Confirm password must match');
        return
    }

    api.register(data)
        .then(user => {
            saveUser(user)
            alert('Succesfully registered');
            page.redirect('/');
        })
}

const registerTemplate = (onSubmit) => html`
    <!-- Register Page ( Only for Guest users ) -->
    <section id="register-page" class="content auth">
        <form id="register" @submit=${onSubmit}>
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Register</h1>
    
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com" class="input-fields">
    
                <label for="pass">Password:</label>
                <input type="password" name="password" id="register-password" class="input-fields">
    
                <label for="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password" class="input-fields">
    
                <input class="btn submit" type="submit" value="Register">
    
                <p class="field">
                    <span>If you already have profile click <a href="login">here</a></span>
                </p>
            </div>
        </form>
    </section>
`;

