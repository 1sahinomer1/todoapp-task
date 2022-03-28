import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme, GlobalStyles, lightTheme } from 'theme';
import { Provider } from 'react-redux';
import { store } from 'store';
import { Home } from 'pages';
import 'react-datepicker/dist/react-datepicker.css';
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Home theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
