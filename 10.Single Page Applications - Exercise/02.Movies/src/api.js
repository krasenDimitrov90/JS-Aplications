const baseURL = 'http://localhost:3030';

export const API = {
    get(url, id) {
        
        if (id) {
            return fetch(`${baseURL}${url}/${id}`)
            .then(res => res.json())
        }
        
        return fetch(`${baseURL}${url}`)
            .then(res => res.json())
    },
    post(url, method, data, token) {

        return fetch(`${baseURL}${url}`, {
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