import React, { useEffect, useState } from "react";

export default function RegisterForm({
  SubmitOnRegister,
  newUser,
  setNewUser,
}) {
  const [confirmPassword, setConfirmPassword] = useState({ password: "" });
  const [passwordConfirmed, setPasswordConfirmed] = useState(false);

  useEffect(() => {
    checkPasswords();
  }, [confirmPassword]);

  const checkPasswords = () => {
    if (confirmPassword === newUser.password) {
      setPasswordConfirmed(true);
    }
    console.log('da li ovo radi?');
    console.log(passwordConfirmed);
  
  };



  const handleUnmatchedPasswords = (e) => {
    e.preventDefault()
    alert('Passwords do not match');
  };

  return (
    <div>
      <form
        onSubmit={
          passwordConfirmed ? SubmitOnRegister : handleUnmatchedPasswords
        }
      >
        <label>Name:</label>
        <input
          required
          placeholder="Enter your name"
          type="text"
          value={newUser.name}
          onChange={({ target }) =>
            setNewUser({ ...newUser, name: target.value })
          }
        />
        <br/>
        <label>Email:</label>
        <input
          required
          placeholder="Enter your email"
          type="email"
          value={newUser.email}
          onChange={({ target }) =>
            setNewUser({ ...newUser, email: target.value })
          }
        />
        <br/>
        <label>Password:</label>
        <input
          required
          placeholder="Enter your password"
          type="password"
          value={newUser.password}
          onChange={({ target }) =>
            setNewUser({ ...newUser, password: target.value })
          }
        />
        <br/>
        <label>Confirm password:</label>
        <input
          required
          placeholder="Repeat your password"
          type="password"
          value={confirmPassword.confirmPassword}
          onChange={({ target }) => {
            setConfirmPassword(target.value);
          }}
        />
        <br/>
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
}
