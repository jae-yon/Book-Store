import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { SignupStyle } from "@/pages/Signup";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import InputText from "@/components/common/InputText";

export interface SignupProps {
  email: string;
  password: string;
}

function ResetPassword() {

  const { userResetPassword, userResetRequest, resetRequested } = useAuth();

  const { 
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => {
    resetRequested ? userResetPassword(data) : userResetRequest(data);
  }

  return (
    <>
      <Title size="large">비밀번호 초기화</Title>
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

          { resetRequested && (
            <fieldset>
              <InputText 
                inputType="password"
                {...register("password", { required: true })}
                placeholder="비밀번호" 
              />
              { errors.password && <p className="error-text">비밀번호를 입력해주세요.</p> }
            </fieldset>
          )}

          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              { resetRequested ? "비밀번호 초기화" : "초기화 요청" }
            </Button>
          </fieldset>

        </form>
      </SignupStyle>
    </>
  )
}


export default ResetPassword;