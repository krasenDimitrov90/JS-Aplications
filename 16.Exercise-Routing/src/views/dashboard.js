import { render } from 'https://unpkg.com/lit-html?module';
import { getAllFurniture } from '../requests/requests.js';
import { dashboardTemplate } from '../templates/dashboard.js';


export const dashboardView = async () =>
    render(dashboardTemplate(await getAllFurniture()), document.querySelector('body'));