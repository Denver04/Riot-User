import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"
import { createStore } from 'redux';
import { contactReducer } from './redux/Reducer/contactReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(contactReducer , composeWithDevTools() )

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>
, document.getElementById('root'));
