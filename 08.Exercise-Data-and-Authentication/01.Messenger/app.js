function attachEvents() {
    const nameInputEl = document.querySelectorAll('#controls input')[0];
    const massageInputEl = document.querySelectorAll('#controls input')[1];
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const massagesAreaEl = document.getElementById('messages');
    
    sendBtn.addEventListener('click',() => {
        fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                author: nameInputEl.value,
                content: massageInputEl.value
            })
        })
    })

    refreshBtn.addEventListener('click', () => {
        fetch('http://localhost:3030/jsonstore/messenger')
            .then(res => res.json())
            .then(data => {
                const massages = [];
                Object.values(data).forEach(x => massages.push(`${x.author}: ${x.content}`));
                massagesAreaEl.textContent = massages.join('\n');
            })
    })
}

attachEvents();