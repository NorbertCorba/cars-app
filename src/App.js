import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import Router from './Router';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li class = "li">
            <Link class = "link" to="/cars">Cars list</Link>
          </li>
          <li class = "li">
            <Link class = "link" to="/add">Click here to add new car</Link>
          </li>
        </ul>
      </nav>
      <Router />
    </div>

  );
}

export default App;
