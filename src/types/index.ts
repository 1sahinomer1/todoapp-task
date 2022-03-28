export interface Task {
  id: string;
  name: string;
  completed: boolean;
  createdTime: Date;
}
export interface Day {
  date: string;
  todos: Task[];
}
export interface DefaultState {
  days: Day[];
}
export interface addTodoType {
  calendarDate: Date;
  inputValue: string;
}
