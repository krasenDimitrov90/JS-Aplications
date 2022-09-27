function loadRepos() {

	const inputEl = document.getElementById('username');
	const listEl = document.getElementById('repos');
	const userName = inputEl.value;
	
	fetch(`https://api.github.com/users/${userName}/repos`)
		.then(res => res.json())
		.then(data => {
			data.forEach(repo => {
				let li = document.createElement('li');
				let a = document.createElement('a');
				a.textContent = repo.full_name;
				a.href = repo.html_url;
				li.appendChild(a);
				listEl.appendChild(li);
				console.log(repo.full_name + '<--->' + repo.html_url);
			});
		})
}