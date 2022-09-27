import { renderHome } from '../sections/home.js';
import { deleteUser  } from '../auth.js';

export function renderLogout() {
    deleteUser();
    renderHome();
}