function attachEvents() {
    const phoneBookEl = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const personInputEl = document.getElementById('person');
    const phoneInputEl = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');

    createBtn.addEventListener('click', () => {
        const person = personInputEl.value;
        const phone = phoneInputEl.value;

        fetch(`http://localhost:3030/jsonstore/phonebook`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({person, phone})
        })
            .then(res => getPhoneBook())
    })

    loadBtn.addEventListener('click', () => {
        
        getPhoneBook()
    })

    function getPhoneBook() {
        phoneBookEl.innerHTML = '';
        fetch('http://localhost:3030/jsonstore/phonebook')
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(([key, x]) => {
                    phoneBookEl.appendChild(createElement(x.person, x.phone, key));
                    console.log(x.person);
                });
            })
    }

    function createElement(person, phone, key) {
        const li = document.createElement('li');
        li.innerText = `${person}: ${phone}`;
        li.key = key;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteBtnListener)

        li.appendChild(deleteBtn);
        console.log(li.key);
        return li;
    }

    function deleteBtnListener(e) {
        const key = e.currentTarget.parentNode.key;
        
        fetch(`http://localhost:3030/jsonstore/phonebook/${key}`, { method: 'DELETE'})
    }

}

attachEvents();