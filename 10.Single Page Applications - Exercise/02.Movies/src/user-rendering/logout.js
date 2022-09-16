import { renderHome } from '../home.js';

export function renderLogout() {
    localStorage.removeItem('user');
    renderHome();
}