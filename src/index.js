import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

const store = createStore(reducer);

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
      <Provider store={store}>
      <App />
      </Provider>
  </Router>,
  document.getElementById('root')
);
