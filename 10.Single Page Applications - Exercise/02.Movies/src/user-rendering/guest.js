export function guestNavigation(navigation) {
    navigation.forEach(x => {
        if (x.textContent === 'Login' || x.textContent === 'Register') {
            x.style.display = 'inline';
        } else {
            x.style.display = 'none';
        }
    })
}