const loadBtn = document.getElementById('loadBooks');
const tbody = document.querySelector('tbody');
const formHeaderEl = document.querySelector('form h3');
const titleInput = document.querySelector('form input[name=title]');
const authorInput = document.querySelector('form [name=author]');
const submitBtn = document.querySelector('form button');

let bookID = null;

fetch('http://localhost:3030/jsonstore/collections/books')
    .then(res => res.json())
    .then(data => updateDisplay(data))

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.currentTarget.textContent === 'Submit') {
        createBook();
    } else if (e.currentTarget.textContent === 'Save') {

        formHeaderEl.textContent = 'FORM';
        e.currentTarget.textContent = 'Submit';

        updateBookData();
    }

    titleInput.value = '';
    authorInput.value = '';
})

function createBook() {
    let author = authorInput.value;
    let title = titleInput.value;
    
    console.log(author);
    console.log(title);
    fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            author,
            title
        })
    })
        .then(res => fetch('http://localhost:3030/jsonstore/collections/books'))
        .then(res => res.json())
        .then(data => updateDisplay(data))
}

function updateBookData() {

    let author = authorInput.value;
    let title = titleInput.value;

    if (authorInput.value === '') {
        author = document.querySelectorAll(`#${bookID} td`)[1].textContent;
    }
    if (titleInput.value === '') {
        title = document.querySelectorAll(`#${bookID} td`)[0].textContent;
    }
    fetch(`http://localhost:3030/jsonstore/collections/books/${bookID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            author,
            title
        })
    })
        .then(res => fetch('http://localhost:3030/jsonstore/collections/books'))
        .then(res => res.json())
        .then(data => updateDisplay(data))
}

function editBookBtn(e) {
    formHeaderEl.textContent = 'Edit FORM';
    submitBtn.textContent = 'Save';
    bookID = e.currentTarget.parentNode.parentNode.id;

}

function deleteBook(e) {
    bookID = e.currentTarget.parentNode.parentNode.id;
    
    fetch(`http://localhost:3030/jsonstore/collections/books/${bookID}`, {
        method: 'DELETE'
    })

    e.currentTarget.parentNode.parentNode.remove();
}

function updateDisplay(data) {

    tbody.innerHTML = '';

    Object.entries(data)
        .forEach(([id, bookData]) => {

            const tr = document.createElement('tr');
            tr.setAttribute('id', id);
            // Object.entries(bookData)
            //     .forEach(([key, val]) => {

            //         if (key === '_id') return;

            //         const td = document.createElement('td');
            //         td.textContent = val;
            //         tr.appendChild(td);
            //     })

            const authorTd = document.createElement('td');
            authorTd.textContent = bookData.author;

            const titleTd = document.createElement('td');
            titleTd.textContent = bookData.title;

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            editBtn.addEventListener('click', editBookBtn);

            deleteBtn.addEventListener('click', deleteBook);

            const td = document.createElement('td');

            td.appendChild(editBtn);
            td.appendChild(deleteBtn);

            tr.appendChild(titleTd);
            tr.appendChild(authorTd);
            tr.appendChild(td);

            tbody.appendChild(tr);

        })
}