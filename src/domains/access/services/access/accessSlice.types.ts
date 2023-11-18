export interface IAuthenticationResponse {
  access_token: string;
  refresh_token: string;
  name: string;
  surname: string;
}

export interface IRegisterResponse extends IAuthenticationResponse {}

export interface IAuthenticationRequest {
  email: string;
  password: string;
}

export type Role = "ADMIN" | "MANAGER" | "GUEST";

export interface IRegisterRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: Role;
}
