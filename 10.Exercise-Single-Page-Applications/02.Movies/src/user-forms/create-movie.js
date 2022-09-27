import { getToken } from "../auth.js";
import { router } from '../router.js';
import { postNewMovie } from "../requests.js";

export const createMovie = (e) => {
    const formData = new FormData(e.target);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('img');

    if (!title || !description || !img) return

    const data = {title, description, img}

    postNewMovie(data, getToken())
        .then(res => router('Movies'))
        .catch(err => {
            alert('Something\'s got wrong');
            e.target.reset();
        })
}