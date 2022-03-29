import { useRef } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { useAppDispatch, useAppSelector } from 'store';
import { deleteAllTasks } from 'store/taskSlice';

import { useOutsideClick } from 'hooks';

import * as S from './styles';

const Dropdown = () => {
  const ref = useRef();
  const days = useAppSelector((state) => state.tasks.days);
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useOutsideClick(ref);

  const RemoveAll = () => {
    setIsActive(!isActive);
    dispatch(deleteAllTasks(days));
  };

  return (
    <S.Dropdown>
      <S.DropdownButton
        data-testid="dropdown"
        onClick={() => setIsActive(!isActive)}
      >
        <FiMoreHorizontal cursor="pointer" color="#3D82EB" size={25} />
      </S.DropdownButton>
      <S.DropdownContent ref={ref}>
        {isActive && (
          <S.DropdownItem onClick={RemoveAll}>
            Delete all completed tasks for today
          </S.DropdownItem>
        )}
      </S.DropdownContent>
    </S.Dropdown>
  );
};

export default Dropdown;
