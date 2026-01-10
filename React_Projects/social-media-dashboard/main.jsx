import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);