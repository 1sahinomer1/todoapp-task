import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '.';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from 'theme';
import { Provider } from 'react-redux';
import { store } from 'store';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

describe('home test', () => {
  const dummyfnc = jest.fn();
  const setup = () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <Home theme="light" setTheme={dummyfnc} />
          </ThemeProvider>
        </Provider>
      </LocalizationProvider>
    );
  };
  it('luminous theme', async () => {
    setup();
    const moonIcon = screen.getByTestId('moon');
    expect(moonIcon).toBeInTheDocument();
  });
  //   it('change theme', async () => {
  //     await waitFor(() => setup());
  //     const moonIcon = screen.getByTestId('moon');
  //     userEvent.click(moonIcon);
  //     const sunIcon = screen.getByTestId('sun');
  //     expect(sunIcon).toBeInTheDocument();
  //   });
  it('add todo', async () => {
    await waitFor(() => {
      setup();
    });
    const addTodoInput = screen.getByTestId('todoInput');
    userEvent.type(addTodoInput, 'Write Test');
    const todoAddButton = await screen.findByTestId('todoAddButton');
    userEvent.click(todoAddButton);
    const todo = await screen.findAllByTestId('todo');
    expect(todo[0]).toHaveTextContent('Write Test');
  });
  it('remove todo', async () => {
    await waitFor(() => {
      setup();
    });

    // userEvent.type(addTodoInput, 'Task Two');
    // userEvent.click(todoAddButton);
    // const todo = await screen.findAllByTestId('todo');
    const todoDeleteButton = await screen.findByTestId('deleteTodo');
    userEvent.click(todoDeleteButton);
    // screen.debug(undefined, 300000);
  });
});
