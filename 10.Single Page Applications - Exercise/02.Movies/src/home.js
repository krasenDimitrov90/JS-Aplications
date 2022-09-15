import { guestNavigation } from './user-rendering/guest.js';
import { userNavigation } from './user-rendering/user.js';


const homeSection = document.getElementById('home-page');
const navigationElmnts = document.querySelectorAll('.nav-link')

const user = localStorage.getItem('user');

export function renderHome() {
    homeSection.style.display = 'block';
    if (user) {
        userNavigation(navigationElmnts);
    } else {
        guestNavigation(navigationElmnts);
    }
}

renderHome()