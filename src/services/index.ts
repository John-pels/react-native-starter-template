import { BACKEND_BASE_URL } from '@config/env'
import Cookies from '@react-native-cookies/cookies'
import axios, { type AxiosInstance } from 'axios'

export const Fetch: AxiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  timeout: 5000,
  timeoutErrorMessage:
    'Request timeout there is maybe a problem with the server!',
  withCredentials: true,
})

Fetch.interceptors.request.use(
  async (config) => {
    const cookie = await Cookies.get(BACKEND_BASE_URL)

    if (cookie?.value) {
      config.headers.Authorization = `Bearer ${cookie.value}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
