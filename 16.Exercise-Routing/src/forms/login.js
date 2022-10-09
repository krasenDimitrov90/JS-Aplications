import page from "//unpkg.com/page/page.mjs";
import { login } from "../requests/requests.js";
import { saveUser } from "../auth.js";


export const loginHandler = (ctx, e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    login({email, password})
        .then(data => {
            saveUser(JSON.stringify(data));
            alert('Succesfuly logged!');
            page.redirect('/dashboard');
        })
        .catch(err => {
            alert('Incorect email or password!');
            e.currentTarget.reset();
        })
}