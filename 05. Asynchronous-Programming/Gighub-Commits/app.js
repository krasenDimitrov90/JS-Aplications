function loadCommits() {
    // Try it with Fetch API
    const inputUserName = document.getElementById('username');
    const inputRepo = document.getElementById('repo');
    const listEl = document.getElementById('commits');
    const userName = inputUserName.value;
    const repo = inputRepo.value;

    fetch(`https://api.github.com/repos/${userName}/${repo}/commits`)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status + ' (Not Found)');
            }
            return res.json()
        })
        .then(comits => {
            comits.forEach(data => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = data.commit.author.name + ' : ' + data.commit.message;
                li.appendChild(a);
                listEl.appendChild(li);
                console.log(data.commit.author.name + ' : ' + data.commit.message);
            });
        })
        .catch(err => {

            console.log(err);
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = err;
            li.appendChild(a);
            listEl.appendChild(li);
        })
}