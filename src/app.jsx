import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import '../assets/css/app.css';

import { configureStore } from './store';
import { App } from './pages';

// import { PersistGate } from 'redux-persist/integration/react'


const store = configureStore({ }, thunk);


ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <Router>
        <App />
      </Router>
    {/* </PersistGate> */}
  </Provider>
  , document.getElementById('app'),
);


console.log('Ready to roll!');
