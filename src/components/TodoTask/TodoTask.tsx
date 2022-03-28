import dayjs from 'dayjs';
import { MdDone } from 'react-icons/md';
import { CgTrash } from 'react-icons/cg';
import { ImInfo } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { deleteTask, updatedTask } from 'store/taskSlice';

import { Task } from 'types';

import * as S from './styles';

interface TodoTaskProps {
  todo: Task;
}

const TodoTask = ({ todo }: TodoTaskProps) => {
  const days = useAppSelector((state) => state.tasks.days);
  const dispatch = useDispatch();
  const changeTodoCompleted = () => {
    dispatch(updatedTask(days, todo.id));
  };
  const deleteHandle = () => {
    dispatch(deleteTask(days, todo.id));
  };
  return (
    <S.TodoContainer id={todo.id} completed={todo.completed} data-testid="todo">
      <S.Right>{todo.name}</S.Right>
      <S.Left>
        <S.Tooltip>
          <ImInfo size={25} />
          <S.TooltipText>
            was created {dayjs(todo.createdTime).format('HH:mm')}
          </S.TooltipText>
        </S.Tooltip>
        <S.DoneContainer
          completed={todo.completed}
          onClick={changeTodoCompleted}
        >
          <MdDone size={20} color={todo.completed ? 'white' : '#3D82EB'} />
        </S.DoneContainer>
        <S.DeleteButton data-testid="deleteTodo" onClick={deleteHandle}>
          <CgTrash size={30} cursor="pointer" color="white" />
        </S.DeleteButton>
      </S.Left>
    </S.TodoContainer>
  );
};

export default TodoTask;
