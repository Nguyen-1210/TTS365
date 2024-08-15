import { getAccessToken } from "@app/utils/localstorage";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL as string}/api/`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Add a request interceptor
apiInstance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    const accessToken = getAccessToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    } as typeof config.headers;

    config.paramsSerializer = (params) => {
      const searchParams = new URLSearchParams();
      for (const [key, element] of Object.entries(params)) {
        searchParams.append(key, element);
      }

      return searchParams.toString();
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// // Add a response interceptor
apiInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default apiInstance;

// import axios, { AxiosInstance } from 'axios'

// class Http {
//   instance: AxiosInstance
//   constructor() {
//     this.instance = axios.create({
//       baseURL: 'http://localhost:5000/api/',
//       timeout: 10000,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//   }
// }

// const http = new Http().instance
// export default http
