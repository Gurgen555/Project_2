import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Login/Login.scss";
export default function Login() {
  const initialValid = {email:'', password:''}
  const[formaValues, SetFormValues] = useState(initialValid)
  const[formaErrors, SetFormErrors] = useState({})
  const[isSubmit, setIsSubmit] = useState(false)
  function handleChange(e){
    const {name, value} = e.target
    SetFormValues({...formaValues, [name]: value})
  }
  function handleSubmit(e){
    e.preventDefault();
    SetFormErrors(validate(formaValues)) 
    setIsSubmit(true)
  };
  useEffect(() => {
    if(Object.keys(formaErrors).length === 0 && isSubmit){
      console.log(formaValues);
    }

  },[formaErrors])
  function validate(values){
    const errors = {};
    const regax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!values.email){
      errors.username = 'Email is required!'
    } else if(!regax.test(values.email)){
      errors.email = 'This is not valid email format'
    }
    if(!values.password){
      errors.password = 'Password is required!'
    }else if(values.password < 6){
      errors.password = 'Password must be more than 6 characters'
    }else if(values.password > 10){
      errors.password = 'Password cannot exceed more than 10 characters'
    }
    return errors;
  }
  return (
    <div className="loginBody">
      <div className="loginTitle">
        <h2>Login</h2>
        <div className="line"></div>

      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type={"emial"} className="emailinp" value={formaValues.email}/>
        <label>Password</label>
        <input type={"password"} 
          className="passwoedinp"
          value={formaValues.password}
          onChange={handleChange}         
         />
        <p>
          <NavLink  to={"/forgotpsw"} className="forgotpsw">Forgot Your Password?</NavLink>
        </p>
        <div className="signin" aria-valuemax={"Sign IN"}>
          <input className="signinInp" type={"submit"} value="SIGN IN"/>
          <NavLink className={"create"} to={"/create"}>CREATE ACCOUNT</NavLink>
        </div>
      </form>
    </div>
  );
}
