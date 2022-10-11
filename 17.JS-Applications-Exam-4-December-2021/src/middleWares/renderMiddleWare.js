import { render } from '../../node_modules/lit-html/lit-html.js';
import { getUser, getToken } from '../services/auth.js';
import { renderNavigation } from '../views/navigationView.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

const root = document.getElementById('main-content');
const spinner = document.getElementById('spinner');

export const renderMiddleWare = (ctx, next) => {
    show()

    ctx.user = getUser();
    if (ctx.user) {
        ctx.token = getToken();
    }

    renderNavigation(ctx)
    ctx.hide = hide;
    ctx.show = show;
    ctx.render = (template) => render(template, root);
    next();
}

function show() {
    spinner.style.display = 'inline-block';
}

function hide() {
    spinner.style.display = 'none';
}

