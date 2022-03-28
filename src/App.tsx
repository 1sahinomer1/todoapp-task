import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme, GlobalStyles, lightTheme } from 'theme';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { Provider } from 'react-redux';
import { store } from 'store';
import { Home } from 'pages';
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Provider store={store}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Home theme={theme} setTheme={setTheme} />
        </ThemeProvider>
      </Provider>
    </LocalizationProvider>
  );
}

export default App;
