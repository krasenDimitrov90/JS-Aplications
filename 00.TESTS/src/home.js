{/* <article class="preview">
    <div class="title">
        <h2>Title</h2>
    </div>
    <div class="small">
        <img src="/assets/lasagna.jpg" alt="">
    </div>
</article> */}


const homeSection = document.querySelector('.home');
const recipeList = homeSection.querySelector('.recipe-list');

const url = 'http://localhost:3030/data/recipes';

export function renderHome() {
    fetch(url)
        .then(res => res.json())
        .then(recipes => {
            renderRecipes(recipes);
            homeSection.style.display = 'block';
        })
}

function renderRecipes(recipes) {
    const fragment = document.createDocumentFragment();

    recipes.forEach(r => fragment.appendChild(renderRecipe(r)));

    recipeList.innerHTML = '';
    recipeList.appendChild(fragment);

}

function renderRecipe(recipe) {
    const resElement = document.createElement('article');
    resElement.classList.add('preview');

    resElement.innerHTML = `
    <div class="title">
        <h2>${recipe.name}</h2>
    </div>
    <div class="small">
        <img src="${recipe.img}" alt="">
    </div>
    `;

    return resElement
}