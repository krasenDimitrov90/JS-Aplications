import { guestNavigation } from './user-rendering/guest.js';
import { userNavigation } from './user-rendering/user.js';


const homeSection = document.getElementById('home-page');
export const navigationElmnts = document.querySelectorAll('.nav-link')


export function renderHome() {

    const user = localStorage.getItem('user');

    homeSection.style.display = 'block';

    if (user) {
        userNavigation(navigationElmnts);
    } else {
        guestNavigation(navigationElmnts);
    }
}

// renderHome()