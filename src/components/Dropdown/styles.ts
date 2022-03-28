import styled from 'styled-components';

export const Dropdown = styled.div`
  padding: 10px 17px;
  position: relative;
`;

export const DropdownButton = styled.button`
  font-weight: bold;
  display: flex;
  justify-content: center;
  border: none;
  background: none;
  align-items: center;
`;

interface ContentProps {
  ref?: any;
}
export const DropdownContent = styled.div<ContentProps>`
  position: absolute;
  background: white;
  box-sizing: border-box;
  top: 80%;
  right: 70%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const DropdownItem = styled.button`
  cursor: pointer;
  transition: all 0.2s;
  color: #000000;
  border: none;
  background: none;
  text-align: start;
  background-color: ${(p) => p.theme.primaryColor};
  :hover {
    background-color: #eb3d3d;
  }
  white-space: nowrap;
  border-radius: 10px;
  padding: 10px;
  color: white;
`;
