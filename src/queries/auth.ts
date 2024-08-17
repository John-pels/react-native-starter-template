import { useGenericMutation } from '../hooks/useGenericMutation'
import { authService } from '../services/auth'
import type {
  ErrorResponse,
  LoginResponse,
  RegisterResponse,
  UserLogin,
  UserRegister,
} from '../types/auth'

export const useUserCreate = () => {
  return useGenericMutation<RegisterResponse, ErrorResponse, UserRegister>(
    'CREATE_USER_KEY',
    (newUser: UserRegister) => authService.CreateUser(newUser),
    undefined,
    undefined
  )
}

export const useUserLogin = () => {
  return useGenericMutation<LoginResponse, ErrorResponse, UserLogin>(
    'LOGIN_USER_KEY',
    (newUser: UserLogin) => authService.UserLogin(newUser),
    undefined,
    undefined
  )
}
