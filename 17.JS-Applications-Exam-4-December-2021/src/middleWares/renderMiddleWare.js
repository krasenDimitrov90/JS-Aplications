import { render } from '../../node_modules/lit-html/lit-html.js';
import { getUser, getToken } from '../services/auth.js';
import { renderNavigation } from '../views/navigationView.js';

const root = document.getElementById('main-content');

export const renderMiddleWare = (ctx, next) => {

    ctx.user = getUser();
    if (ctx.user) {
        ctx.token = getToken();
    }

    renderNavigation(ctx)
    ctx.render = (template) => render(template, root);
    next();
} 