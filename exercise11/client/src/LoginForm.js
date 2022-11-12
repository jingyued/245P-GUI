import "./LoginForm.css";
import React, { useState, useRef } from "react";

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

// states
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
};
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
};  
  <LoginForm/>

  // we are calling the LoginForm component in the actual render of the App
  // we are also writing a handleSubmit function that will be the output of our form and
  // that could be the interface to a connected backend service
  const handleSubmit = (e) => {
    e.preventDefault(); // this prevents the browser to refresh when the submit button is clicked
    const formData = {
      username: usernameRef.current.value, // we are accessing the value of the input field through the ref's current instance
      password: passwordRef.current.value,
    };
    const json = JSON.stringify(formData, null, 4);
    console.clear(); // clearing previous console logs
    console.log(json); // showing what we actually submitted thru the form
  };
  // render method
    return(
        <> 
        
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
        <p>Username:</p>
        <input
        ref={usernameRef}
        label="username"
        id="username"
        type="text"
        value={usernameValue}
        onChange={handleUsernameChange}
        />
        <p>Password:</p>
        <input
        ref={passwordRef}
        label="password"
        id="password"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
        />
        
        <button id="login-button" type="submit"> 
            <b>Submit</b>
        </button>
        
        </form>
        </>
    )
};

export default LoginForm;