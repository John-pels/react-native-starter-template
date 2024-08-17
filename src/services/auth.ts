import { TOKEN_KEY } from '@config/env'
import { setCookie } from '@lib/cookies'
import { Fetch } from '.'
import type {
  LoginResponse,
  RegisterResponse,
  UserLogin,
  UserRegister,
} from '../types/auth'
import { AUTH_ROUTES } from './routes'

class AuthService {
  async CreateUser(data: UserRegister) {
    const response = await Fetch.post<RegisterResponse>(
      AUTH_ROUTES.register,
      data
    )
    return response.data
  }

  async UserLogin(payload: UserLogin) {
    const { data } = await Fetch.post<LoginResponse>(AUTH_ROUTES.login, payload)
    await setCookie(data.access_token, TOKEN_KEY)
    return data
  }
}

export const authService: AuthService = new AuthService()
