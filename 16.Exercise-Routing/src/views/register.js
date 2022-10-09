import { render } from 'https://unpkg.com/lit-html?module';
import { registerTemplate } from '../templates/register.js';

export const registerView = () =>
    render(registerTemplate(), document.querySelector('body'))