import * as S from './styles';

interface ButtonProps {
  children: string | any;
  testid: string;
}

const Button = ({ children, testid, ...props }: ButtonProps) => {
  return (
    <S.Button data-testid={testid} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
