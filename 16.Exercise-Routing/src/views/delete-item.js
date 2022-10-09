import page from "//unpkg.com/page/page.mjs";
import { getToken } from "../auth.js";
import { deleteItem } from '../requests/requests.js';

export const deleteHandler = async (ctx) => {

    await deleteItem(getToken(), ctx.params.id)
    page.redirect('/dashboard')
}