import https from 'services/axiosClient';

const authApis = {
  login: (user) => {
    return https.post('/user/login', user);
  },
  register: (user) => {
    return https.post('/user/register', user);
  },
  logout: () => {
    return https.post('/user/logout');
  },
  getUser: () => {
    return https.get('/user/infor');
  },
};

export default authApis;
