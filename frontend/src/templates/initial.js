import React, { useState } from "react";
import ReactDOM from "react-dom";

import "../css/front.css";

function App1() {
    const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
    
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
      <form className="form1">
        <div className="admin">
            <button className="ALOGIN">ADMIN LOGIN</button>
            <br></br>
        </div>
        <div className="input-container">
          <button className="FLOGIN" >FACULTY LOGIN</button>
    
        </div>
        <div className="student">
        <button className="SLOGIN">STUDENT LOGIN</button>
        </div>
      </form>
    </div>
  );
  

  return (
    <div className="app">
      
      <div className="login-form">
        <div className="title"><t></t>CARMEL<t></t><br></br>POLYTECHNIC
       </div>
        {renderForm}
      </div>
    </div>
  );
}

    
export default App1;