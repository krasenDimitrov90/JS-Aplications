import { html } from 'https://unpkg.com/lit-html?module';
import { cats } from './catSeeder.js';

export const catCard = (id, status, massage, imgLocation) => html`
    <li>
        <img src="./images/${imgLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${toogleContent}>Show status code</button>
            <div class="status" style="display: none" id=${id}>
                <h4>Status Code: ${status}</h4>
                <p>${massage}</p>
            </div>
        </div>
    </li>
`;


export const catList = () => html`
    <ul>
    ${cats.map(cat => catCard(cat.id, cat.statusCode, cat.statusMessage, cat.imageLocation))}
    </ul>
`;

function toogleContent(e) {
    const div = e.currentTarget.parentNode.children[1];

    if (div.style.display === 'none') {
        div.style.display = 'block';
        e.currentTarget.textContent = 'Hide status code';
    } else {
        div.style.display = 'none';
        e.currentTarget.textContent = 'Show status code';
    }
}