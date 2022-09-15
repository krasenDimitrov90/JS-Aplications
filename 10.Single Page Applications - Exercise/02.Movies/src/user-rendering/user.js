export function userNavigation(navigation) {
    navigation.forEach(x => {
        if (x.textContent === 'Logout' || x.textContent.includes('Welcome')) {
            x.style.display = 'inline';
        } else {
            x.style.display = 'none';
        }
    })
}