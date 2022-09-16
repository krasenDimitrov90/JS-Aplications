import { router } from './router.js';
import { renderHome } from './home.js';

renderHome();
const navigation = document.querySelector('.bg-dark');

navigation.addEventListener('click', (e) => {

    e.preventDefault();

    if (e.target.tagName === 'A') {
        // console.log(e.target.textContent);
        router(e.target.textContent)
    }
})


