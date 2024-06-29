import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { NEXT_CLIENT_API_PATH, NODE_ENV } from '@@configs';

const clientServices = axios.create({ baseURL: NEXT_CLIENT_API_PATH });

const respErrorHandler = (error: AxiosError) => {
  try {
    if (axios.isCancel(error)) {
      return Promise.reject({ error });
    }
    toast(error.response?.data?.message || error.message, { type: 'error' });
    return Promise.reject({ error });
  } catch (err) {
    return Promise.reject({ error });
  }
};

const reqAuthProtect = (axiosConfig: AxiosRequestConfig) => {
  // you can implement auth protection here
  if (NODE_ENV !== 'development') {
    const idToken = localStorage.getItem('ROCP_idToken');
    const token = localStorage.getItem('ROCP_token');
    if (idToken && token) {
      axiosConfig.headers = { ...axiosConfig.headers };
      axiosConfig.headers['idToken'] = idToken.substring(1, idToken.length - 1);
      axiosConfig.headers['Authorization'] = `Bearer ${token.substring(1, token.length - 1)}`;
    }
  }
  return new Promise((resolve) => setTimeout(() => resolve(axiosConfig), 1000));
};

clientServices.interceptors.request.use(reqAuthProtect, (error) => {
  console.error(error);
});

clientServices.interceptors.response.use((response) => response, respErrorHandler);

export default clientServices;
