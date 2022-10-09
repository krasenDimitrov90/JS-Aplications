export const saveUser = (data) => localStorage.setItem('user', data);

export const getUser = () => JSON.parse(localStorage.getItem('user')) || false;

export const getToken = () => JSON.parse(localStorage.getItem('user')).accessToken;

export const deleteUser = () => localStorage.removeItem('user');