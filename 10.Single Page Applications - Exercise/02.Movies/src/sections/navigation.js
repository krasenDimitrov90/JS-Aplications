const userElmnts = document.querySelectorAll('.user');
const welcomeMsg = document.getElementById('welcome-msg');
const guestElmnts = document.querySelectorAll('.guest');

export function navigation(user) {
    if (user) {
        userElmnts.forEach(x => x.style.display = 'inline-block');
        guestElmnts.forEach(x => x.style.display = 'none');
        welcomeMsg.textContent = `Welcome, ${user.email}`

    } else {
        userElmnts.forEach(x => x.style.display = 'none');
        guestElmnts.forEach(x => x.style.display = 'inline-block');
    }
}