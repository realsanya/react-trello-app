// yarimport { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './styles.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-title">
          <div>
            <img src={logo} className="app-logo" alt="logo" />
          </div>
          <div className="app-title-text">Task Tracker</div>
        </div>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Создать проект
        </a>
      </header>
    </div>
  );
}

export default App;
