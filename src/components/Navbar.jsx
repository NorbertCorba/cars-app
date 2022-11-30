import React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const history = useHistory();
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();

  };

  const { user } = useAuth();

  return (
    <div>
      <ul>
        {user ? (
          <>
            <button onClick={handleLogout}>Logout</button>
                  <h1>Hello, {user && user.name}</h1>

            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/add">Add a car</Link>
            </li>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </ul>
    </div>
  );
}
