const url = 'localhost';
const port = '1234';
const ssl = false ? 'https' : 'http';
const API = `${ssl}://${url}:${port}/`;
export default API; // URL de la api