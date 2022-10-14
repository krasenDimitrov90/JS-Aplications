import * as get  from "../services/auth.js";


export const prepareUser = (ctx, next) => {

    ctx.user = get.user();
    next();
}