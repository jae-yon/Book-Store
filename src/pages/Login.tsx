import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { SignupStyle } from "@/pages/Signup";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import InputText from "@/components/common/InputText";

export interface LoginProps {
  email: string;
  password: string;
}

function Login() {

  const { userLogin } = useAuth();

  const { 
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit = (data: LoginProps) => {
    userLogin(data);
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