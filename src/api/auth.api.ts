import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

// 회원 정보를 서버로 전송

// 회원가입
export const signup = async(userData: SignupProps) => {
  const response = await httpClient.post("/user/join", userData);
  return response.data;
}

// 이메일 확인
export const resetRequest = async (data: SignupProps) => {
  const response = await httpClient.post("/user/reset", data);
  return response.data;
}

// 비밀번호 초기화
export const resetPassword = async (data: SignupProps) => {
  const response = await httpClient.put("/user/reset", data);
  return response.data;
}