import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Registro } from "./components/Registro";

function App() {
  const [formErrors, setFormErrors] = useState({ text: "", color: "" });

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    repetPasword: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleErrors = ({text, color}) => {
    setFormErrors({ text, color });
  };

  return (
    <>
      <Registro onChange={onChange} handleErrors={handleErrors} formErrors={formErrors} />
    </>
  );
}

export default App;