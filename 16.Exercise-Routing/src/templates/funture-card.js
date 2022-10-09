import { getDetails } from '../requests/requests.js';
import { html, render } from 'https://unpkg.com/lit-html?module';
import { detailsTemplate } from './funture-details.js';



export const furnitureCard = (f = {}) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${f.img} />
                <p>${f.description}</p>
                <footer>
                    <p>Price: <span>${f.price} $</span></p>
                </footer>
                <div>
                    <a href='/catalog/${f._id}' id="${f._id}" class="btn btn-info" >Details</a>
                </div>
            </div>
        </div>
    </div>
`;