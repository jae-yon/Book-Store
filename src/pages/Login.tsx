import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { SignupStyle } from "./Signup";
import { useAuthStore } from "../store/authStore";

export interface SignupProps {
  email: string;
  password: string;
}

function Login() {

  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const { storeLogin } = useAuthStore();

  const { 
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => {
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

  return (
    <>
      <Title size="large">로그인</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <fieldset>
            <InputText 
              inputType="email" 
              {...register("email", { required: true })}
              placeholder="이메일"
            />
            { errors.email && <p className="error-text">이메일을 입력해주세요.</p> }
          </fieldset>
          <fieldset>
            <InputText 
              inputType="password"
              {...register("password", { required: true })}
              placeholder="비밀번호" 
            />
            { errors.password && <p className="error-text">비밀번호를 입력해주세요.</p> }
          </fieldset>

          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              로그인
            </Button>
          </fieldset>

          <div className="info">
            <Link to="/signup">회원가입</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  )
}


export default Login;