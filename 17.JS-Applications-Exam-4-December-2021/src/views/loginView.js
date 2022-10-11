import { html } from '../../node_modules/lit-html/lit-html.js';
import { saveUser } from '../services/auth.js';
import * as api from '../services/requests.js';


const loginHandler = (ctx, e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    if (Object.values(data).some(x => x === '')) {
        alert('All fields must be filled');
        return e.target.reset();
    }

    api.login(data)
        .then(user => {
            saveUser(user);
            alert('Successfully logsed in');
            ctx.page.redirect('/');
        })
        .catch(err => {
            alert('Incorect email or password');
            e.target.reset();
        })
}

const loginTemplate = (ctx) => html`
    <section id="loginPage">
        <form @submit=${loginHandler.bind(null, ctx)}>
            <fieldset>
                <legend>Login</legend>
    
                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email">
    
                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password">
    
                <button type="submit" class="login">Login</button>
    
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
`;

export const renderLogin = (ctx) => {
    
    ctx.hide()
    ctx.render(loginTemplate(ctx));
}