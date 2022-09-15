function lockedProfile() {
    const mainEl = document.getElementById('main');
    const btns = [];
    mainEl.innerHTML = '';
    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(res => res.json())
        .then(data => {
            
            Object.keys(data).forEach((x , index) => {
                const id = index + 1;
                const div = document.createElement('div');
                div.classList.add('profile');
                div.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${id}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${id}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${id}Username" value="${data[x].username}" disabled readonly />
				<div id="user${id}HiddenFields" style="display:none">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${id}Email" value="${data[x].email}" disabled readonly />
					<label>Age:</label>
					<input type="text" name="user${id}Age" value="${data[x].age}" disabled readonly />
				</div>
				
				<button>Show more</button>`;
                const btn = div.querySelector('button');
                btn.addEventListener('click', (e) => {
                    const lock = e.currentTarget.parentNode.querySelector('input[value=lock]');
                    const unlock = e.currentTarget.parentNode.querySelector('input[value=unlock]');
                    if (lock.checked) return;
                    const age = e.currentTarget.parentNode.querySelector(`div input[name=user${id}Age]`)
                    console.log(age);
                    btn.textContent = btn.textContent === 'Show more' ? 'Hide it' : 'Show more';
                    if (e.currentTarget.parentNode.querySelector('div').style.display === 'block') {
                        e.currentTarget.parentNode.querySelector('div').style.display = 'none';
                    } else {
                        e.currentTarget.parentNode.querySelector('div').style.display = 'block';
                    }
                })
                mainEl.appendChild(div);
            })
            // const showHideBtns = document.querySelectorAll('#main button');
            // Array.from(showHideBtns).forEach(btn => {
            //     btn.addEventListener('click', (e) => {
            //         const lock = e.currentTarget.parentNode.querySelector('input[value=lock]');
            //         const unlock = e.currentTarget.parentNode.querySelector('input[value=unlock]');
            //         if (lock.checked) return;
            //         const age = e.currentTarget.parentNode.querySelector(`div input[name=user${id}Age]`)
            //         console.log(age);
            //         btn.textContent = btn.textContent === 'Show more' ? 'Hide it' : 'Show more';
            //         if (e.currentTarget.parentNode.querySelector('div').style.display === 'block') {
            //             e.currentTarget.parentNode.querySelector('div').style.display = 'none';
            //         } else {
            //             e.currentTarget.parentNode.querySelector('div').style.display = 'block';
            //         }
            //     })
            // })
        })
}