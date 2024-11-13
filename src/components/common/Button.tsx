import styled from "styled-components";
import { ButtonScheme, Buttonsize } from "../../style/theme";

interface Props extends 
React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: Buttonsize;
  scheme: ButtonScheme;
  disabled?: boolean;
  isLoading?: boolean;
}


function Button({ children, size, scheme, disabled, isLoading }: Props) {
  return (
    <Buttonstyle 
      size={size} 
      scheme={scheme} 
      disabled={disabled}
      isLoading={isLoading}
    >
      {children}
    </Buttonstyle>
  )
}

const Buttonstyle = styled.button<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  padding: ${({ theme, size }) => theme.button[size].padding};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  background-color: ${({ theme, scheme }) => theme.buttonScheme[scheme].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export default Button;