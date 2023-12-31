import COOKIES from "@/constants/cookie";
import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "https://api.tnbmar.ru/api/";

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
      Authorization: headers?.Authorization
        ? headers?.Authorization
        : Cookies.get(COOKIES.TOKEN),
    },
  });

export default httpClient;
