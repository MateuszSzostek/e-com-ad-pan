export interface IUserState {
  accessToken: string;
  refreshToken: string;
  name: string;
  surname: string;
}

export interface IActionByKey {
  key: "accessToken" | "refreshToken" | "name" | "surname";
  value: string;
}
