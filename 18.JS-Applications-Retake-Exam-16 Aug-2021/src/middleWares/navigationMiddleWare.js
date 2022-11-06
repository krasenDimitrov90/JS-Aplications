import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationTemplate } from '../views/navigation.js'


export const prepareNavigation = (ctx, next) => {
    ctx.renderNav(navigationTemplate(ctx.user));
    next();
}