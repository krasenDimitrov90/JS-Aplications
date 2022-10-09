export const saveUser = (user) => localStorage.setItem('user', JSON.stringify(user));

export const getUser = () => JSON.parse(localStorage.getItem('user')) || null;

export const deleteUser = () => localStorage.removeItem('user');

export const getToken = () => JSON.parse(localStorage.getItem('user')).accessToken || false;