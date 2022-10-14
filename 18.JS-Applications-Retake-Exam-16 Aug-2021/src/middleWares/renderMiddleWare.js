import { render } from "../../node_modules/lit-html/lit-html.js";



const root = document.getElementById('main-content');
const navigation = document.querySelector('#box header');


export const renderMiddleWare = (ctx, next) => {

    ctx.render = (template) => render(template, root);
    ctx.renderNav = (template) => render(template, navigation);

    next();
}