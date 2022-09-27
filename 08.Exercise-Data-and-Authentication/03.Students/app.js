const submitBtn = document.getElementById('submit');
const formEl = document.getElementById('form');
const tableBodyEl = document.querySelector('#results tbody');
const inputsEls = document.querySelectorAll('.inputs input')

fetch('http://localhost:3030/jsonstore/collections/students')
    .then(res => res.json())
    .then(students => {
        displayStudents(students);
    })

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const studentInfo = {};

    let isSomeFiledEmpty = Array.from(inputsEls).some(x => x.value === '');

    if (!Number(inputsEls[3].value)) {
        return
    }
    if (isSomeFiledEmpty) {
        return;
    };

    tableBodyEl.innerHTML = '';

    const formData = new FormData(formEl);
    for (const [key] of formData) {
        // if (key === 'grade') {
        //     studentInfo[key] = Number(Number(formData.get(key)).toFixed(2));
        // } else {
        //     studentInfo[key] = formData.get(key);
        // }
        studentInfo[key] = formData.get(key);
    }

    Array.from(inputsEls).forEach(x => x.value = '');

    fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(studentInfo)
    })
        .then(res => fetch('http://localhost:3030/jsonstore/collections/students'))
        .then(res => res.json())
        .then(students => {
            displayStudents(students);
        })
})

function displayStudents(students) {

    Object.values(students)
        .forEach(student => {
            
            const tr = document.createElement('tr');
            Object.entries(student)
                .forEach(([key, val]) => {
                    if (key === '_id') {
                        return;
                    }
                    const td = document.createElement('td');
                    td.textContent = val;
                    td.setAttribute('name', key)
                    tr.appendChild(td);
                })
            tableBodyEl.appendChild(tr);
        })
}