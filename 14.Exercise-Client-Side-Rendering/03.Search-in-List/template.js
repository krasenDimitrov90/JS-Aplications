import { html } from 'https://unpkg.com/lit-html?module';
import { towns } from './towns.js';


export const initList = () => html`
    <ul>
        ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
`;

export const newList = (mathes) => html`
    <ul>
        ${Object.keys(mathes).map(town => {
            if (mathes[town]) {
                return html`<li class="active">${town}</li>`
            }

            return html`<li>${town}</li>`;
        })}
    </ul>
`;

