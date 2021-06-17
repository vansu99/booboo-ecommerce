import { localStorageService } from 'hooks/useLocalStorage';
import { StorageKeys, pathNames } from 'constants/index';
import axios from 'axios';
import history from 'helpers/history';
import queryString from 'query-string';

const { clearTokens, getRefreshToken } = localStorageService;
const API_URL = 'https://api-booboo-shopping.herokuapp.com/';

const https = axios.create({
  baseURL: API_URL,
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },

  paramsSerializer: (params) => queryString.stringify(params),
});

https.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(StorageKeys.TOKEN);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { status } = error.response;
    if (status !== 401) {
      return Promise.reject(error);
    }

    if (error.config.url === '/api/auth/refresh') {
      clearTokens();
      return Promise.reject(error);
    }

    if (status === 401) {
      history.push(pathNames.LOGIN);
      forceRenewToken();
    }

    return Promise.reject(error);
  }
);

async function forceRenewToken() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    history.push(pathNames.LOGIN);
  }
  return https
    .post('/api/auth/refresh', { refresh: refreshToken })
    .then((res) => {
      // save token new and update header
      https.defaults.headers['Authorization'] = `Bearer ${res.data.refToken}`;
      localStorage.setItem(StorageKeys.TOKEN, res.data.refToken);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default https;
