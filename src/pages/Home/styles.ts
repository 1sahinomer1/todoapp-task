import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 45%;
  margin: 150px auto 0 auto;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 40px 40px 20px 40px;
  border: 4px solid ${(p) => p.theme.primaryColor};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const DateInfo = styled.div`
  display: flex;
  color: ${(p) => p.theme.primaryColor};
  cursor: pointer;
`;

export const Day = styled.p`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`;

export const MonthAndYear = styled.section`
  margin-left: 10px;
`;

export const Month = styled.p`
  font-size: 16px;
`;

export const Year = styled.p`
  font-size: 16px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 50%;
  padding: 5px;
  border: 2px solid ${(p) => p.theme.primaryColor};
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const AllTasksRemove = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: ${(p) => p.theme.primaryColor};
  color: white;
`;
