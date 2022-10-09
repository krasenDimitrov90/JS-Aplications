import { API } from "./api.js";

const allFurnituresURL = '/data/catalog';
const loginURL = '/users/login';
const registerURL = '/users/register';
const myFurnitureURL = (userID) => `/data/catalog?where=_ownerId%3D%22${userID}%22`;
const catalogURL = '/data/catalog';

export const getAllFurniture = API.get.bind(this, allFurnituresURL);

export const login = API.post.bind(null, loginURL, 'POST');

export const register = API.post.bind(null, registerURL, 'POST');

export const getMyFurniture = (userID) => API.get.call(this, myFurnitureURL(userID));

export const getDetails = API.get.bind(this, catalogURL);

export const updateDetails = API.post.bind(this, catalogURL, 'PUT');

export const createFurniture = API.post.bind(this, catalogURL, 'POST');

export const deleteItem =  API.post.bind(this, catalogURL, 'DELETE', {});