import axios from "axios";

import { LoginRequestType, AccessToken } from "./apiType";

export const STATUS_CODE = {
  success: 200,
  networkError: 511
};

const authorizationHeader = (accessToken: string) => ({
  Authorization: `Bearer ${accessToken}`
});

const instanceAxios = axios.create({
  baseURL: "url",
  headers: { "Content-Type": "application/json" }
});

export const loginApi = async (payload: LoginRequestType) => {
  const response = await instanceAxios.post("/login", payload);

  return [response.data, response.status];
};
