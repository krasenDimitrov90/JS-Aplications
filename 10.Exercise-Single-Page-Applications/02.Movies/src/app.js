import { router } from './router.js';

router('Movies');

const navigation = document.querySelector('.bg-dark');

navigation.addEventListener('click', (e) => {

    e.preventDefault();

    if (e.target.tagName === 'A') {
        router(e.target.textContent)
    }
})