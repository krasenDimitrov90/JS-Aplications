import page from "../node_modules/page/page.mjs";
import { renderMiddleWare } from "./middleWares/renderMiddleWare.js";
import { renderCatalog } from "./views/catalogView.js";
import { renderCreate } from "./views/createVeiw.js";
import { deleteAlbumHandler } from "./views/deleteHandler.js";
import { renderDetails } from "./views/detailsView.js";
import { renderEdit } from "./views/editVeiw.js";
import { renderHome } from "./views/homeView.js";
import { renderLogin } from "./views/loginView.js";
import { logoutHandler } from "./views/logoutHandler.js";
import { renderNavigation } from "./views/navigationView.js";
import { renderRegister } from "./views/registerView.js";
import { renderSearch } from "./views/searchView.js";

page(renderMiddleWare);
page('/', renderHome);
page('/login', renderLogin);
page('/register', renderRegister);
page('/logout', logoutHandler);
page('/catalog', renderCatalog);
page('/create', renderCreate);
page('/details/:id', renderDetails);
page('/edit/:id', renderEdit);
page('/delete/:id', deleteAlbumHandler)
page('/search', renderSearch)

page.start();