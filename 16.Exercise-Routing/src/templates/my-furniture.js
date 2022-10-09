import { html } from 'https://unpkg.com/lit-html?module';
import { navigation } from './navigation.js';
import { furnitureCard } from './funture-card.js';


export const myFurnitureTemplate = (items) => html`
    <header>
        ${navigation('', '', 'active')}
    </header>
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${items.map(f => furnitureCard(f))}
        </div>
    </div>
`;