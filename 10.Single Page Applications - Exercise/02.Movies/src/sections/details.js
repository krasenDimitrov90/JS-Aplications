import { getMovie } from '../requests.js';

const movieSection = document.getElementById('movie');
const movieExample = document.getElementById('movie-example');

export function renderDetails(id) {
    getMovie(id)
        .then(movie => {
            movieExample.replaceChildren();
            movieExample.appendChild(renderMovie(movie))
            renderButtons(movie['_ownerId'])
            movieExample.style.display = 'block';
        })
}

function renderMovie(movie) {

    const div = document.createElement('div');
    div.classList.add('container');
    div.innerHTML = `
    <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="${movie.img}"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>${movie.description}</p>
            </div>
          </div>
    `;
    return div;
}

function renderButtons(ownerID) {
    const btnsConteiner = document.querySelector('.col-md-4.text-center')
    const fragment = document.createDocumentFragment();
    const user = JSON.parse(localStorage.getItem('user'));

    const span = document.createElement('span');
    span.classList.add('enrolled-span')
    span.textContent = 'Liked 1'

    if (!user) {
        fragment.appendChild(span)

    } else if (user['_id'] == ownerID) {
        console.log('owner'+ ' || '+ user['_id'] + ' || ' + ownerID);
        const deleteBtn = document.createElement('a');
        const editBtn = document.createElement('a');

        deleteBtn.classList.add('btn')
        deleteBtn.classList.add('btn-danger')
        deleteBtn.textContent = 'Delete'

        editBtn.classList.add('btn')
        editBtn.classList.add('btn-warning')
        editBtn.textContent = 'Edit'

        fragment.appendChild(deleteBtn)
        fragment.appendChild(editBtn)
        fragment.appendChild(span)

    } else {
        console.log('user' + ' || '+ user['_id'] + ' || ' + ownerID);
        console.log(user['_id'] == ownerID);
        const likeBtn = document.createElement('a');
        likeBtn.classList.add('btn')
        likeBtn.classList.add('btn-primary')
        likeBtn.textContent = 'Like'
        fragment.appendChild(likeBtn)
        fragment.appendChild(span)

    }
    btnsConteiner.appendChild(fragment);
}


//   <a class="btn btn-danger" href="#">Delete</a>
            //   <a class="btn btn-warning" href="#">Edit</a>
            //   <a class="btn btn-primary" href="#">Like</a>
            //   <span class="enrolled-span">Liked 1</span>