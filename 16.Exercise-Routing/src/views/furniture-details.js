import { render } from 'https://unpkg.com/lit-html?module';
import { getUser } from '../auth.js';
import { getDetails } from '../requests/requests.js';
import { detailsTemplate } from '../templates/funture-details.js';

export const detailsView = async (ctx) =>
    render(detailsTemplate(await getDetails(ctx.params.id),
        getUser()),
        document.querySelector('body'));