function solve() {
    
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const info = document.getElementById('info');
    const busStop = {id: 'depot', name: 'Depot'}    
    
    function depart() {
        console.log('Depart TODO...');
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.id}`)
            .then(res => res.json())
            .then(data => {
                busStop.name = data.name;
                busStop.id = data.next;
                info.textContent = 'Next stop ' + busStop.name;
            })
            .catch(err => {
                info.textContent = 'Error';
            })
    }

    function arrive() {
        console.log('Arrive TODO...');
        arriveBtn.disabled = true;
        departBtn.disabled = false;

        info.textContent = 'Arriving at ' + busStop.name;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();