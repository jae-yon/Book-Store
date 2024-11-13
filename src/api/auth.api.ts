import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

// 회원 정보를 서버로 전송

export const signup = async(userData: SignupProps) => {
  const response = await httpClient.post("/user/join", userData);
  return response.data;
}