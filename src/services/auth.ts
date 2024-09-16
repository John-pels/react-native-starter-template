import { TOKEN_KEY } from "@config/env";
import { setCookie } from "@lib/cookies";
import * as SecureStore from "expo-secure-store";
import { Fetch } from ".";
import type {
  LoginResponse,
  RegisterResponse,
  UserLogin,
  UserRegister,
} from "../types/auth";
import { AUTH_ROUTES } from "./routes";

class AuthService {
  async CreateUser(data: UserRegister) {
    const response = await Fetch.post<RegisterResponse>(
      AUTH_ROUTES.register,
      data
    );
    return response.data;
  }

  async UserLogin(payload: UserLogin) {
    try {
      const { data } = await Fetch.post<LoginResponse>(
        AUTH_ROUTES.login,
        payload
      );
      await SecureStore.setItemAsync(TOKEN_KEY, data.access_token);
      return data;
    } catch (err) {
      throw err;
    }
  }
}

export const authService: AuthService = new AuthService();
