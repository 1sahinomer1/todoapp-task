import styled from 'styled-components';

export const Input = styled.input`
  width: 80%;
  outline: none;
  border: none;
  ::placeholder {
    color: ${(p) => p.theme.primaryColor};
  }
`;
