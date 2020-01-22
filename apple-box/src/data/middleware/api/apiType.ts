export interface AccessToken {
  accessToken: string;
}

export interface LoginRequestType {
  id: string;
  password: string;
}
export interface LoginResponseType {
  accessToken: string;
}

export interface ApiPayload<T = null> {
  data?: T;
  status?: number;
}
