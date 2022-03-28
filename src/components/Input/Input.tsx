import * as S from './styles';
interface InputProps {
  placeholder: string;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const Input = ({ placeholder, inputValue, setInputValue }: InputProps) => {
  return (
    <S.Input
      placeholder={placeholder}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default Input;
