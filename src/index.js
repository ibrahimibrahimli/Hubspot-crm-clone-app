import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './features/root/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import store from './app/store';

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
  <Provider store={store}>
     <App/>
  </Provider>
   
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
