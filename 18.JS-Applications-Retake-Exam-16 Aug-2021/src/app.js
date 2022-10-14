import page from "../node_modules/page/page.mjs";
import { renderMiddleWare } from "./middleWares/renderMiddleWare.js";
import { prepareNavigation } from "./middleWares/navigationMiddleWare.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { createView } from "./views/createView.js";
import { catalogView } from "./views/catalogView.js";
import { detailsView } from "./views/detailsView.js";
import { prepareUser } from "./middleWares/prepareUserMiddleWare.js";



page(renderMiddleWare);
page(prepareUser);
page(prepareNavigation);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/catalog', catalogView);
page('/details/:id', detailsView);

page.start();