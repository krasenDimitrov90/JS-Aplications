import { render } from 'https://unpkg.com/lit-html?module';
import { getUser } from '../auth.js';
import { getMyFurniture } from '../requests/requests.js';
import { myFurnitureTemplate } from '../templates/my-furniture.js';

export const myFurnitureView = async () =>
    render(myFurnitureTemplate(await getMyFurniture(getUser()._id)),
        document.querySelector('body'));