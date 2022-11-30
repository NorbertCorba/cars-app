import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { authService } from "../services/AuthService";
import { useHistory } from "react-router-dom";

export default function AppRegister() {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const history = useHistory();

  const handleOnRegister = async (e) => {
    e.preventDefault();
    console.log(newUser);
    const response = await authService.register(newUser);
    if(response.status === 200) {
      alert("Registration successful.");
      history.push("/login");
    }
    
  };

  return (
    <RegisterForm
      SubmitOnRegister={handleOnRegister}
      newUser={newUser}
      setNewUser={setNewUser}
    />
  );
}
