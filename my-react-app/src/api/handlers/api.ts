import axios from "axios";
export const BASE_URL = import.meta.env.VITE_BACKEND_HOST_URL;
// export const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;
const createAPI = () => {
  const apiHeader = {
    "Content-Type": "application/json",
  };
  const api = axios.create({
    baseURL: BASE_URL,
    headers: apiHeader,
  });

  api.interceptors.request.use(
    (request) => {
      const token: any = localStorage.getItem("token") 
      if (token) {
        request.headers["x-access-token"] = token;
      }
      return request;
    },
    (error) => {
      if (
        401 === error?.response?.status ||
        403 === error?.response?.status ||
        400 === error?.response?.status
      ) {
        console.log(error?.response.data, "error");
      }
      throw error?.response?.data;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        401 === error?.response?.status ||
        403 === error?.response?.status ||
        400 === error?.response?.status
      ) {
        console.error(error?.response.data, "error");
      }
      throw error?.response?.data;
    }
  );
  return api;
};

export default createAPI();
