const BASE_URL = "https://api.github.com/";

const fetchAPI = endpoint => fetch(BASE_URL + endpoint);

export default fetchAPI;