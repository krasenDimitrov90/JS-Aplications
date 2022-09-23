import { renderHome } from '../sections/home.js';

export function renderLogout() {
    localStorage.removeItem('user');
    renderHome();
}