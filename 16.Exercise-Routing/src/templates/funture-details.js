import { html } from 'https://unpkg.com/lit-html?module';
import { getUser } from '../auth.js';
import { navigation } from './navigation.js';


export const detailsTemplate = (f = {}, user = {_id: ''}) => html`
    <header>
        ${navigation()}
    </header>
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${f.img.slice(1)} />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${f.make}</span></p>
                <p>Model: <span>${f.model}</span></p>
                <p>Year: <span>${f.year}</span></p>
                <p>Description: <span>${f.description}</span></p>
                <p>Price: <span>${f.price}</span></p>
                <p>Material: <span>${f.material}</span></p>
                ${user._id === f._ownerId ? html`<div>
                    <a href='/edit/${f._id}' class="btn btn-info">Edit</a>
                    <a href='/delete/${f._id}' class="btn btn-red">Delete</a>
                </div>` : ''} 
                
            </div>
        </div>
    </div>

`;