import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import HEADER from './layouts';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <HEADER/>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);