import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { App } from './app';
import store from './redux/store/configureStore';
import { Provider } from 'react-redux';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        {/* <AppProvider> */}
        <App />
        {/* </AppProvider> */}
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
