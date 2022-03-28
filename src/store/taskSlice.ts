import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from 'store';
import { v4 as uuid } from 'uuid';

import { Day, DefaultState, Task } from 'types';

const initialState: DefaultState = {
  days: JSON.parse(localStorage.getItem('days') || '[]') || {
    days: [],
  },
};
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<Day[]>) => {
      state.days = action.payload;
    },
  },
});

export const { setTodo } = taskSlice.actions;
export default taskSlice.reducer;

export const addTask =
  (todos: Day[], name: string, date: string) =>
  async (dispatch: AppDispatch) => {
    //The original series was copied so as not to spoil
    const copyArray = [...todos];
    //have the same day
    const isDateExist = copyArray.find((copyTodo) => copyTodo.date === date);
    if (isDateExist) {
      //If there is a same day, todos are added to the todos section by visiting that day.
      copyArray.forEach((copyTodo, index) => {
        if (copyTodo.date === date) {
          const newDay = { ...copyTodo };
          newDay.todos = [
            ...newDay.todos,
            { id: uuid(), name, completed: false, createdTime: new Date() },
          ];
          //As the selected index will be on the same day, it is assigned as newday.
          copyArray[index] = newDay;
        }
      });
      dispatch(setTodo(copyArray));
    } else {
      const newDay: Day = {
        date,
        todos: [
          { id: uuid(), name, completed: false, createdTime: new Date() },
        ],
      };
      copyArray.push(newDay);
      dispatch(setTodo(copyArray));
    }
  };

export const updatedTask =
  (days: Day[], id: string) => async (dispatch: AppDispatch) => {
    const copyDays = [...days];
    days.forEach((day, index) => {
      const copyDay = { ...day };
      const copyTodos = [...day.todos];
      day.todos.forEach((todo, index) => {
        if (todo.id === id) {
          const updatedTodo = { ...todo, completed: !todo.completed };
          copyTodos[index] = updatedTodo;
          copyDay.todos = copyTodos;
        }
      });
      copyDays[index] = copyDay;
    });
    dispatch(setTodo(copyDays));
  };
export const deleteAllTasks =
  (days: Day[]) => async (dispatch: AppDispatch) => {
    const copyDays = [...days];
    copyDays.forEach((day, index) => {
      const copyDay = { ...day };
      const filteredTasks = copyDay.todos.filter(
        (task) => task.completed === false
      );
      copyDay.todos = filteredTasks;
      copyDays[index] = copyDay;
    });
    dispatch(setTodo(copyDays));
  };
export const deleteTask =
  (days: Day[], id: string) => async (dispatch: AppDispatch) => {
    const copyDays = [...days];
    copyDays.forEach((day, index) => {
      const copyDay = { ...day };
      const filteredTasks = copyDay.todos.filter((task) => task.id !== id);
      copyDay.todos = filteredTasks;
      copyDays[index] = copyDay;
    });
    dispatch(setTodo(copyDays));
  };
export const orderTask =
  (days: Day[], orderedTodos: Task[], date: string) =>
  async (dispatch: AppDispatch) => {
    const copyDays = [...days];
    copyDays.forEach((day, index) => {
      const copyDay = { ...day };
      if (copyDay.date === date) {
        copyDay.todos = orderedTodos;
        copyDays[index] = copyDay;
      }
    });
    dispatch(setTodo(copyDays));
  };
