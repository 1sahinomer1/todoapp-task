import dayjs from 'dayjs';
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { useEffect, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import DesktopDatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

import { useAppDispatch, useAppSelector } from 'store';
import { addTask, orderTask } from 'store/taskSlice';

import { Button, Footer, Input, TodoTask, Dropdown } from 'components';
import { Moon, Sun } from 'icons';

import * as S from './styles';

interface HomeProps {
  theme: string;
  setTheme: (value: string) => void;
}

const Home = ({ theme, setTheme }: HomeProps) => {
  const [calendarDate, setCalendarDate] = useState<Date | null>(new Date());
  const [inputValue, setInputValue] = useState('');
  const state = useAppSelector((state) => state.tasks);

  const dispatch = useAppDispatch();
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    localStorage.setItem('theme', theme);
  };
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme === 'light' ? setTheme('dark') : setTheme('light');
  }, [setTheme]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue === '') return;
    dispatch(
      addTask(state.days, inputValue, dayjs(calendarDate).format('DD/MM/YYYY'))
    );
    setInputValue('');
  };
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    state.days.forEach((day) => {
      if (day.date === dayjs(calendarDate).format('DD/MM/YYYY')) {
        const items = Array.from(day.todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        result.destination &&
          items.splice(result.destination.index, 0, reorderedItem);
        dispatch(
          orderTask(state.days, items, dayjs(calendarDate).format('DD/MM/YYYY'))
        );
      }
    });
  };
  localStorage.setItem('days', JSON.stringify(state.days));

  return (
    <S.HomeContainer>
      <S.Header>
        <DesktopDatePicker
          label="Select Date"
          value={calendarDate}
          inputFormat={'dd/MM/yyyy'}
          onChange={(newValue) => {
            setCalendarDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              sx={{
                svg: {
                  color: '#3D82EB',
                },
                input: { color: '#3D82EB' },
                label: { color: '#3D82EB' },
              }}
              {...params}
            />
          )}
        />
        <S.Flex>
          <div onClick={themeToggler}>
            {theme === 'dark' ? (
              <Button testid="sun">
                <Sun />
              </Button>
            ) : (
              <Button testid="moon">
                <Moon />
              </Button>
            )}
          </div>
          <Dropdown />
        </S.Flex>
      </S.Header>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {state.days.map(
                (selectedDayTasks) =>
                  selectedDayTasks.date ===
                    dayjs(calendarDate).format('DD/MM/YYYY') &&
                  selectedDayTasks.todos.map((todo, index) => (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id}
                      index={index}
                    >
                      {(providedDraggable: DraggableProvided) => (
                        <div
                          ref={providedDraggable.innerRef}
                          {...providedDraggable.draggableProps}
                          {...providedDraggable.dragHandleProps}
                        >
                          <TodoTask todo={todo} />
                        </div>
                      )}
                    </Draggable>
                  ))
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <S.Form onSubmit={handleSubmit}>
        <Input
          placeholder="Create New Item"
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Button testid="todoAddButton">
          <AiOutlinePlusCircle cursor="pointer" size={25} color="#3D82EB" />
        </Button>
      </S.Form>
      <Footer />
    </S.HomeContainer>
  );
};

export default Home;
