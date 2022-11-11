import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import Router from './Router';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li className= "li">
            <Link className="link" to="/cars">Cars list</Link>
          </li>
          <li className="li">
            <Link className="link" to="/add">Click here to add new car</Link>
          </li>
        </ul>
      </nav>
      <Router />
    </div>

  );
}

export default App;
