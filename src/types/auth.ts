export type UserRegister = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserLogin = Pick<UserRegister, "email" | "password">;

export type LoginResponse = {
  access_token: string;
  success: true;
  message: string;
  data: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    profileImage: string;
  };
};

export interface RegisterResponse {
  message: string;
  success: boolean;
}

export interface GenericResponse {
  message: string;
  success: boolean;
}

export type ErrorResponse = {
  response: {
    data: GenericResponse;
  };
};
