import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

 const handleChange = (e) => {
    const {name , value } = e.target;

    setForm({
        ...form, 
        [name] : value
    })
 }

  const handleSubmit = (e) => {
    e.preventDefault();   //per evitare il caricamento della pagina e svolgiamo cosi le operazioni che ci servono
    alert(`email: ${form.email}password: ${form.password}`);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={form.email}  onChange={handleChange}/>
        <input type="password" name="password" value={form.password} onChange={handleChange}/>
        <button type="submit" >Submit</button>
    </form>
    </>
  );
};
export default LoginForm;
