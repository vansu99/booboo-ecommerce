import https from 'services/axiosClient';

const categoryApis = {
  getCategory: () => {
    return https.get(`/api/category`);
  },
  getCategoryById: (id) => {
    return https.get(`/api/category/${id}`);
  },
};

export default categoryApis;
