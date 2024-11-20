import { useState } from "react";
import { LoginProps } from "@/pages/Login";
import { useAlert } from "@/hooks/useAlert";
import { SignupProps } from "@/pages/Signup";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { login, resetPassword, resetRequest, signup } from "@/api/auth.api";

export const useAuth = () => {
  // 상태
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { storeLogin } = useAuthStore();

  // 메소드
  const userLogin = (data: LoginProps) => {
    login(data).then((res) => {
      // 로그인 성공
      storeLogin(res.token);
      showAlert("로그인이 완료되었습니다.");
      navigate("/");
    }, (error) => {
      // 로그인 실패
      showAlert("계정 또는 패스워드가 일치하지 않습니다.");
    });
  }

  const userSignup = (data: SignupProps) => {
    signup(data).then((res) => {
      // 성공
      showAlert("성공");
      navigate("/login");
    });
  }

  const [resetRequested, setResetRequested] = useState(false);

  const userResetPassword = (data: SignupProps) => {
    resetPassword(data).then(() => {
      showAlert("비밀번호가 초기화 되었습니다.");
      navigate("/login");
    });
  }

  const userResetRequest = (data: SignupProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    })
  }

  // 리턴
  return { userLogin, userSignup, userResetPassword, userResetRequest, resetRequested }
}