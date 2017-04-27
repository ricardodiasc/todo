import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { todoReducer } from './reducer/todo-reducer';


const store = createStore(todoReducer);

ReactDOM.render(<App store={store}/>, document.getElementById('app'));


