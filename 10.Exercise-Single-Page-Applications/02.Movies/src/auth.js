
export const saveUser = (data) => localStorage.setItem('user', data);

export const getToken = () => JSON.parse(localStorage.getItem('user')).accessToken;

export const deleteUser = () => localStorage.removeItem('user');

