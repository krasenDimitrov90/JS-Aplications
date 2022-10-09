const baseURL = 'http://localhost:3030';

export const API = {
    get(url, id) {
        let currentURL = `${baseURL}${url}`;

        if (id) {
            currentURL += `/${id}`;
        }
        
        return fetch(currentURL)
            .then(res => res.json())
    },
    post(url, method, data, token, id) {
        let currentURL = id ? `${baseURL}${url}/${id}` : `${baseURL}${url}`;

        return fetch(currentURL, {
            method: method,
            headers: prepareHeaders(token),
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 403) {
                    throw new Error();
                }
    
                return res.json();
            })
    }
}

function prepareHeaders(token) {
    const headers = { 'content-type': 'aplication/json' }

    if (token) {
        headers['X-Authorization'] = token;
    }

    return headers;
}