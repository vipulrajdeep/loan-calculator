import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import {configureStore} from './redux/store';
import reportWebVitals from './reportWebVitals';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
