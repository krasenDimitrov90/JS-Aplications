import { router } from './router.js';


const navigation = document.querySelector('.bg-dark');

navigation.addEventListener('click', (e) => {

    e.preventDefault();

    if (e.target.tagName === 'A') {
        console.log(e);
        router(e.target.textContent)
    }
})


