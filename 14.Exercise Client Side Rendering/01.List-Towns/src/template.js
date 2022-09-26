import {html} from 'https://unpkg.com/lit-html?module';

const listTemplate = (town) => html`
    <li>${town}</li>
`;

export const template = (towns) => html`
    <ul>
        ${towns.map(town => listTemplate(town))}
    </ul>
`;
