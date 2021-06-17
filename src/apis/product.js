import https from 'services/axiosClient';

const productApis = {
  getProducts: (params) => {
    return https.get(`/api/products`, { params });
  },
  get: (value) => {
    return https.get(`/api/products/${value}`);
  },
  getProductByCategory: (value) => {
    return https.get(`/api/products/category/${value}`);
  },
};

export default productApis;
