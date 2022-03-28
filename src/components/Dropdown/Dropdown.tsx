import { useRef, useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { useAppDispatch, useAppSelector } from 'store';
import { deleteAllTasks } from 'store/taskSlice';

import { useOutsideClick } from 'hooks';

import * as S from './styles';

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();
  const days = useAppSelector((state) => state.tasks.days);
  const dispatch = useAppDispatch();

  const RemoveAll = () => {
    setIsActive(!isActive);
    dispatch(deleteAllTasks(days));
  };
  useOutsideClick(ref, () => {
    if (isActive) setIsActive(false);
  });

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
            Delete all today's tasks
          </S.DropdownItem>
        )}
      </S.DropdownContent>
    </S.Dropdown>
  );
};

export default Dropdown;
