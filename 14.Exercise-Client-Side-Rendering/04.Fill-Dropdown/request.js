import { API } from "./api.js";

const itemsURL = '/jsonstore/advanced/dropdown ';

export const getItems = API.get.bind(null, itemsURL);

export const postNewItem = API.post.bind(null, itemsURL, 'POST');