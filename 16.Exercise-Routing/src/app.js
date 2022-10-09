import page from "//unpkg.com/page/page.mjs";
import { editView } from './views/edit.js';
import { loginView } from './views/login.js';
import { detailsView } from './views/furniture-details.js';
import { registerView } from './views/register.js';
import { dashboardView } from './views/dashboard.js';
import { deleteHandler } from './views/delete-item.js';
import { myFurnitureView } from './views/my-furniture.js';
import { createFurnitureView } from './views/create-furniture.js';



page('/', '/dashboard', dashboardView)
page('/dashboard', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/create', createFurnitureView);
page('/my-furniture', myFurnitureView);
page('/catalog/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteHandler);

page.start();
