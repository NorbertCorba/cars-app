import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import useAuth from "../hooks/useAuth";

export default function AppLogin() {
    
    const [user,setUser] = useState({email: "", password: ""})
    const history = useHistory();
    const {login} = useAuth();


    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const response = await login(user);
        if(response) {
            // alert(response.data.status);
            history.push("/cars");

        }
    };

    return (
        <LoginForm
        user= {user}
        setUser={setUser}
        handleOnLogin = {handleSubmitForm}
        />
    )
}