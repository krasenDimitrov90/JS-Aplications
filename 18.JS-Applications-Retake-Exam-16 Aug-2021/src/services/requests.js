import * as api from './api.js';

const host = 'http://localhost:3030';
const gamesURL = '/data/games';
const resentGamesURL = '/data/games?sortBy=_createdOn%20desc&distinct=category';
const loginUrl = '/users/login';

const prepareURL = (options) => options.join('');

export const getAllGames = () => api.get(`${host}${gamesURL}`);

export const getRecentGames = () => api.get(`${host}${resentGamesURL}`);

export const getGame = (id) => api.get(prepareURL([host, gamesURL, '/', id]))

export const login = (data) => api.post(`${host}${loginUrl}`, data);