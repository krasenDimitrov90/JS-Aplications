function attachEvents() {
    console.log("TODO...");

    const locationInputEl = document.getElementById('location');
    const getWeatherBtn = document.getElementById('submit');
    const forecastEl = document.getElementById('forecast');
    const currentWeatherEl = document.getElementById('current');
    const upcomingWeatherEl = document.getElementById('upcoming');

    const conditionTypes = {
        Sunny: '&#x2600', // ☀
        'Partly sunny': '&#x26C5', // ⛅
        Overcast: '&#x2601', // ☁
        Rain: '&#x2614', // ☂
        Degrees: '&#176' // °
    }

    getWeatherBtn.addEventListener('click', () => {
        forecastEl.style.display = 'block';
        const city = locationInputEl.value;
        getLocation(city)
            .then(code => {
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
                    .then(res => res.json())
                    .then(data => {
                        createCurrentDayElements(data)
                    })
            })

        getLocation(city)
            .then(code => {
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
                    .then(res => res.json())
                    .then(data => createUpcommingDaysElements(data))
            })
    })

    function getLocation(city) {
        return fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(res => res.json())
            .then(data => {
                const index = data.findIndex(x => x.name === city);
                return data[index].code;
            })
    }

    function createUpcommingDaysElements(data) {
        const foreCastInfo = document.querySelector('.forecast-info');
        if (foreCastInfo) {
            foreCastInfo.remove();
        }
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('forecast-info');
        data.forecast.forEach(x => {
            const span = document.createElement('span');
            span.classList.add('upcoming');
            const conditionSymbolEl = document.createElement('span');
            conditionSymbolEl.classList.add('symbol');
            const currentCondition = x.condition;
            conditionSymbolEl.innerHTML = conditionTypes[currentCondition];
            span.appendChild(conditionSymbolEl)

            const degreesEl = document.createElement('span');
            degreesEl.classList.add('forecast-data');
            degreesEl.innerHTML = `${x.low + '&#176'}/${x.high + '&#176'}`;
            span.appendChild(degreesEl);

            const conditionEl = document.createElement('span');
            conditionEl.classList.add('forecast-data');
            conditionEl.textContent = currentCondition;
            span.appendChild(conditionEl);

            mainDiv.appendChild(span)

            upcomingWeatherEl.appendChild(mainDiv);
        })

    }

    function createCurrentDayElements(data) {
        const foreCastsEl = document.querySelector('.forecasts');
        if (foreCastsEl) {
            foreCastsEl.remove()
        }
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('forecasts');
        const conditionSymbolEl = document.createElement('span');
        conditionSymbolEl.className = 'condition symbol';
        const currentCondition = data.forecast.condition;
        conditionSymbolEl.innerHTML = conditionTypes[currentCondition];
        mainDiv.appendChild(conditionSymbolEl);

        let spanCondition = document.createElement('span');
        spanCondition.classList.add('condition');
        let cityNameEl = document.createElement('span');
        cityNameEl.classList.add('forecast-data');
        cityNameEl.textContent = data.name;
        const degreesEl = document.createElement('span');
        degreesEl.classList.add('forecast-data');
        degreesEl.innerHTML = `${data.forecast.low + '&#176'}/${data.forecast.high + '&#176'}`;
        const conditionEl = document.createElement('span');
        conditionEl.classList.add('forecast-data');
        conditionEl.textContent = currentCondition;
        spanCondition.appendChild(cityNameEl);
        spanCondition.appendChild(degreesEl);
        spanCondition.appendChild(conditionEl);

        mainDiv.appendChild(spanCondition);
        currentWeatherEl.appendChild(mainDiv);
        
    }

}

attachEvents();