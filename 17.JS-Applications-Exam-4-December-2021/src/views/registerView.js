import { html } from '../../node_modules/lit-html/lit-html.js';
import { saveUser } from '../services/auth.js';
import * as api from '../services/requests.js';

const regHendler = (ctx, e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    const {email, password, ['conf-pass']: rePas} = data;
    

    if (Object.values(data).some(x => x === '')) {
        alert('All fields must be filled');
        return e.target.reset();
    }

    if (password !== rePas) {
        alert(`Passwords doesn't match`);
        return e.target.reset();
    }

    api.register({email, password})
        .then(user => {
            saveUser(user);
            alert('Successfully register');
            ctx.page.redirect('/');
        })
}

const registerTemplate = (ctx) => html`
    <section id="registerPage">
        <form @submit=${regHendler.bind(null, ctx)}>
            <fieldset>
                <legend>Register</legend>
    
                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email">
    
                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password">
    
                <label for="conf-pass" class="vhide">Confirm Password:</label>
                <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">
    
                <button type="submit" class="register">Register</button>
    
                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
`;

export const renderRegister = (ctx) => ctx.render(registerTemplate(ctx));