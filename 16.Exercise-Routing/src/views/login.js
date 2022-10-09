import { render } from 'https://unpkg.com/lit-html?module';
import { loginTemplate } from '../templates/login.js';

export const loginView = (ctx) =>
    render(loginTemplate(ctx), document.querySelector('body'));