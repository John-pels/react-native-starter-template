import { BACKEND_BASE_URL, TOKEN_KEY } from '@config/env'
import Cookies from '@react-native-cookies/cookies'

export const setCookie = async (value: string, name: string) => {
  await Cookies.set(BACKEND_BASE_URL, {
    name,
    value,
    path: '/',
    expires: new Date(Date.now() + 86400 * 1000 * 3).toISOString(),
  })
}

export const getCookie = async (): Promise<{ access_token: string } | null> => {
  const cookies = await Cookies.get(BACKEND_BASE_URL)

  if (cookies[TOKEN_KEY]?.value === '') return null

  return {
    access_token: cookies[TOKEN_KEY]?.value,
  }
}

export const removeCookie = async () => {
  await Cookies.clearAll()
}
