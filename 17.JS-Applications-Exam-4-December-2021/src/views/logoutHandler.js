import { deleteUser } from '../services/auth.js';
import * as api from '../services/requests.js';

export const logoutHandler = (ctx) => {
    api.logout(ctx.user.accessToken);
    deleteUser();
    ctx.page.redirect('/');
}