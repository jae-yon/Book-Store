import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

// 회원 정보를 서버로 전송

// 회원가입
export const signup = async(userData: SignupProps) => {
  const response = await httpClient.post("/users/join", userData);
  return response.data;
}

// 이메일 확인
export const resetRequest = async (data: SignupProps) => {
  const response = await httpClient.post("/users/reset", data);
  return response.data;
}

// 비밀번호 초기화
export const resetPassword = async (data: SignupProps) => {
  const response = await httpClient.put("/users/reset", data);
  return response.data;
}

interface LoginResponse {
  token: string;
}

// 로그인
export const login = async(data: SignupProps) => {
  const response = await httpClient.post<LoginResponse>("/users/login", data);
  return response.data;
}