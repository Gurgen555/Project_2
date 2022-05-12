import React from "react";
import { NavLink } from "react-router-dom";
import "../ForgotPassword/ForgotPassword.scss";

export default function ForgotPassword() {
  return (
    <div className="forgotBody">
      <div className="forgotTitle">
        <h2>Reset your password</h2>
        <div className="line"></div>
      </div>
      <form className="inputForm">
        <label>Email</label>
        <input type={"emial"} className="emailinp" />
        <p>We will send you an email to reset your password.</p>
        <div className="forgotBtn" >
        <input className="submit" type={"submit"} value="SUBMIT" />
        <NavLink className={"cancel"} to={"/login"}>CANCEL</NavLink>
      </div>
      </form>
     
    </div>
  );
}
