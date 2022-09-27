function getInfo() {
    const busStopId = document.getElementById('stopId');
    const busStopNameEl = document.getElementById('stopName');
    const busListEl = document.getElementById('buses');

    const busId = busStopId.value;
    
    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            busStopNameEl.textContent = data.name;
            busListEl.innerHTML = '';
            Object.entries(data.buses)
                .forEach(([bus, min]) => {
                    const li = document.createElement('li');
                    li.textContent = `Bus ${bus} arrives in ${min} minutes`;
                    busListEl.appendChild(li);
                })
        })
        .catch(err => {
            busStopNameEl.textContent = 'Error';
            console.log('What the Fuck');
        })
}