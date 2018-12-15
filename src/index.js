import React from 'react';
import ReactDOM from 'react-dom';
// all in js(react设计理念)
// import App from './App';
import TodoList from './TodoList'
// PWA  progressive web application
//https协议的服务器上，断网后，依旧可以看到之前的网页
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// serviceWorker.unregister();
