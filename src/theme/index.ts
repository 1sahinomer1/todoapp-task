import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#F9FAFB',
  fontColor: 'black',
  primaryColor: '#3D82EB',
};

export const darkTheme = {
  body: '#292C35',
  fontColor: '#fff',
  primaryColor: '#3D82EB',
};

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  body{
    background-color: ${(props: any) => props.theme.body};
    transition: background-color 0.5s ease
  }
`;
