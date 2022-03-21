import React, { useState } from "react";
import Form from "./Components.js/Form";
import Results from "./Components.js/Results";
import AdvancedForm from "./Components.js/advanceForm";
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "", 
    lastName: "", 
    email: "", 
    password: "",
    confirmPassword: "",
    firstNameError: "ErroR"
  });
  return (
    <div className="App">
    <AdvancedForm />
    </div>
  );
}

export default App;
