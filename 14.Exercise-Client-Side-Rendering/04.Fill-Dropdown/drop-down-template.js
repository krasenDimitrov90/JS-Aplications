import { html } from 'https://unpkg.com/lit-html?module';



export const options = (items) => html`
    ${items.map( item => html`<option value=${item._id}>${item.text}</option>`)}
    `;