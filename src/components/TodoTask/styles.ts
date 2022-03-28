import styled from 'styled-components';

interface TodoProps {
  completed: boolean;
}

export const TodoContainer = styled.div<TodoProps>`
  padding: 10px;
  background-color: ${(p) => (p.completed ? '#00C897' : p.theme.primaryColor)};
  color: white;
  margin: 3px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TooltipText = styled.span`
  visibility: hidden;
  text-align: center;
  background-color: white;
  color: ${(p) => p.theme.primaryColor};
  z-index: 1;
  position: absolute;
  top: -5px;
  right: 105%;
  white-space: nowrap;
  padding: 5px;
`;

export const Tooltip = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    ${TooltipText} {
      visibility: visible;
    }
  }
`;
export const Right = styled.div`
  display: flex;
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface DoneProps {
  completed: boolean;
}
export const DoneContainer = styled.div<DoneProps>`
  width: 24px;
  height: 24px;
  margin-left: 5px;
  border-radius: 3px;
  border: 1px solid ${(p) => (p.completed ? '#00C897' : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(p) => (p.completed ? '#00C897' : 'white')};
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  outline: none;
  border: none;
`;
