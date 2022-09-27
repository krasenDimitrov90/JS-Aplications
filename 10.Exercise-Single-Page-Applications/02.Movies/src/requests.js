import { API } from "./api.js";

const moviesURL = '/data/movies';
const loginURL = '/users/login';
const registerURL = '/users/register';

export const getMovies = API.get.bind(null, '/data/movies');

export const getMovie = API.get.bind(null, moviesURL);

export const login = API.post.bind(null, loginURL, 'POST');

export const register = API.post.bind(null, registerURL, 'POST');

export const postNewMovie = API.post.bind(null, moviesURL, 'POST')

