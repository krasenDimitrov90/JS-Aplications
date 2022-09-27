function solution() {
    console.log('To dooo');

    const mainSection = document.getElementById('main');

    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(res => res.json())
        .then(data => {
            data.forEach(list => {
                const id = list._id;
                const div = document.createElement('div');
                div.classList.add('accordion');
                div.innerHTML = `<div class="head">
                <span>${list.title}</span>
                <button class="button" id="${id}">More</button>
                </div>
                <div class="extra">
                    <p></p>
                </div>`;
                mainSection.appendChild(div);

                const btn = document.getElementById(id);
                btn.addEventListener('click', btnMoreLess)

            })
        })

    function btnMoreLess(e) {
        const currentDiv = e.currentTarget.parentNode.parentNode.querySelector('div .extra');
        const currentID = e.currentTarget.id;
        const p = e.currentTarget.parentNode.parentNode.querySelector('.extra p');
        if (!p.textContent) {
            fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${currentID}`)
            .then(res => res.json())
            .then(data => {
                p.textContent = data.content;
            })
        }

        if (e.currentTarget.textContent === 'More') {
            currentDiv.style.display = 'block';
            e.currentTarget.textContent = 'Less';
        } else {
            currentDiv.style.display = 'None';
            e.currentTarget.textContent = 'More';
        }
    }
}

solution()