import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://192.168.1.47:3000/api/";

const httpClient = <T>({
  method = "GET",
  url,
  data,
  params,
  headers,
}: AxiosRequestConfig) =>
  axios<T>({
    method,
    url,
    data,
    params,
    headers: {
      ...headers,
    },
  });

export default httpClient;
