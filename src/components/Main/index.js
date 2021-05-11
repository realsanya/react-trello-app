import { Link } from 'react-router-dom';
import PrivateComponent from '../../common/PrivateComponent';
import logo from './logo.svg';
import './styles.css';

const Main = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-title">
          <div>
            <img src={logo} className="app-logo" alt="logo" />
          </div>
          <div className="app-title-text">Task Tracker</div>
        </div>
        <Link
          className="app-link"
          to="/"
        >
          Создать проект          
        </Link>
      </header>
    </div>
  );
}

export default Main;
