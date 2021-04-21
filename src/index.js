import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './index.css';
import App from './components/App';

localStorage.clear();
sessionStorage.clear();

ReactDOM.render(<App store={store} />, document.getElementById("root"));

