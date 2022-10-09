// import * as request from './api.js';
import { API } from "./api.js";

const moviesURL = '/data/movies';
const loginURL = '/users/login';
const registerURL = '/users/register';
const logoutURL = '/users/logout';
const albumsURL = '/data/albums?sortBy=_createdOn%20desc&distinct=name';
const createURL = '/data/albums';
const albumURL = '/data/albums';
const editURL = '/data/albums';
const searchURL = (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`;

export const login = API.post.bind(null, loginURL, 'POST');

export const register = API.post.bind(null, registerURL, 'POST');

export const logout = API.get.bind(null, logoutURL, '');

export const getAllAlbums = API.get.bind(null, albumsURL);

export const createAlbum = API.post.bind(null, createURL, 'POST');

export const getOneAlbum = API.get.bind(null, albumURL);

export const editAlbum = (albumId, data, token) => 
    API.post(`${editURL}/${albumId}`, 'PUT', data, token);

export const deleteAlbum = (albumId, token) => 
    API.post(`${editURL}/${albumId}`, 'DELETE', {}, token);

export const searchAlbums = (query) => API.get(searchURL(query));