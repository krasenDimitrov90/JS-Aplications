const baseURL = 'http://localhost:3030';

export const API = {
    get(url, id, token = null) {
        let currentURL = `${baseURL}${url}`;

        if (id) {
            currentURL += `/${id}`;
        }
        
        return fetch(currentURL, {
            method: 'GET',
            headers: prepareHeaders(token)
        })
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




// // const baseURL = 'http://localhost:3030';

// const request = (method, url, data) => {
    
//     const options = {}

//     if (method !== 'GET') {
//         options.method = method
//         options.headers = {
//             'Content-Type': 'aplication/json'

//         }
//         options.body = JSON.stringify(data);
//         console.log(data);
//     }

//     return fetch(url, options)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error();
//             }

//             return res.json();
//         })

// }

// export const get = request.bind(this, 'GET');
// export const put = request.bind(this, 'PUT');
// export const post = request.bind(this, 'POST');
// export const del = request.bind(this, 'DELETE');