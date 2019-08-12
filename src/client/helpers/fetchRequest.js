import axios from 'axios';

const getTokens = () => localStorage.getItem('_token') || false;
const removeTokens = () => localStorage.removeItem('_token');
const putToken = token => localStorage.setItem('_token', token);

const fetchRequest = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

fetchRequest.interceptors.request.use((config) => {
  const token = getTokens();
  if (token) config.headers['X-Access-Token'] = token;

  return config;
}, error => Promise.reject(error));

fetchRequest.interceptors.response.use((res) => {
  try {
    const { data: { token } } = res;

    if (token) {
      putToken(token);
    }

    return res;
  } catch (err) {
    console.warn(err);
    return res;
  }
}, (error) => {
  if (error.response.status === 403) {
    removeTokens();
    window.location = '/';
  }

  return Promise.reject(error);
});

export default fetchRequest;
