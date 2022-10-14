export const serializedUser = () => localStorage.getItem('user');

export const user = () => serializedUser() ? JSON.parse(serializedUser()) : undefined;

export const getToken = () => user()?.accessToken || undefined; 

export const saveUser = (user) => localStorage.setItem('user', JSON.stringify(user));

export const clearStorage = () => localStorage.clear();