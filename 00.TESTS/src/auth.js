const guestNavigation = document.getElementById('guest');
const userNavigation = document.getElementById('user');

export function updateAuth() {
    let serializedUser = localStorage.getItem('user');
    
    if (serializedUser) {
        userNavigation.style.display = 'inline';
        guestNavigation.style.display = 'none';
    } else {
        userNavigation.style.display = 'none';
        guestNavigation.style.display = 'inline';
    }
}

export function logout() {

    localStorage.removeItem('user');
    updateAuth();
}