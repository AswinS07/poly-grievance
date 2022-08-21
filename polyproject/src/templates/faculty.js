import React, { useState } from "react";
import ReactDOM from "react-dom";

import "F:/projectpoly/polyproject/src/css/front.css";

function App1() {

    
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
        <button className="LOGIN">LOGIN</button>
        </div>
      </form>
    </div>
  );
  

  return (
    <div className="app">
      
      <div className="login-form">
        <div className="title"><t></t>CARMEL<t></t><br></br>POLYTECHNIC
        <div className="loginval"><t>FACULTY LOGIN</t></div></div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

    
export default App1;