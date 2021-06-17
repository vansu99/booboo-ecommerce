import { StorageKeys } from 'constants/index';

function setAccessToken(tokenObj) {
  localStorage.setItem(StorageKeys.TOKEN, tokenObj);
}

function setRefreshToken(tokenObj) {
  localStorage.setItem(StorageKeys.REFRESH_TOKEN, tokenObj);
}

function setTokens(tokenObj) {
  setRefreshToken(tokenObj);
  setAccessToken(tokenObj);
}

function getAccessToken() {
  return localStorage.getItem(StorageKeys.TOKEN);
}

function getRefreshToken() {
  return localStorage.getItem(StorageKeys.REFRESH_TOKEN);
}

function clearTokens() {
  localStorage.removeItem(StorageKeys.TOKEN);
  localStorage.removeItem(StorageKeys.REFRESH_TOKEN);
  localStorage.removeItem(StorageKeys.USER);
}

function setCurrentUser(user) {
  localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
}

export const localStorageService = {
  setAccessToken,
  setRefreshToken,
  setCurrentUser,
  setTokens,
  getAccessToken,
  getRefreshToken,
  clearTokens,
};

const useLocalStorage = () => {
  return [localStorageService];
};

export default useLocalStorage;
