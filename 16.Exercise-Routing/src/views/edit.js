import { render } from 'https://unpkg.com/lit-html?module';
import { editTemplate } from '../templates/edit.js';

export const editView = (ctx) =>
    render(editTemplate(ctx.params.id), document.querySelector('body'));