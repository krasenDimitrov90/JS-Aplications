import { render } from 'https://unpkg.com/lit-html?module';
import { createFurnitureTemplate } from "../templates/create-furniture.js";

export const createFurnitureView = (ctx) => 
    render(createFurnitureTemplate(), document.querySelector('body'));