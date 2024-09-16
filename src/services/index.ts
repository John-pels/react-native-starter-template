import { BACKEND_BASE_URL, TOKEN_KEY } from "@config/env";
import axios, { type AxiosInstance } from "axios";
import * as SecureStore from "expo-secure-store";

export const Fetch: AxiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  timeout: 50000,
  timeoutErrorMessage:
    "Request timeout there is maybe a problem with the server!",
  withCredentials: true,
});

Fetch.interceptors.request.use(
  async (config) => {
    const accessToken = await SecureStore.getItemAsync(TOKEN_KEY);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
