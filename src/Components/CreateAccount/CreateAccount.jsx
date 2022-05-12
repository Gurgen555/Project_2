import React from "react";
import { NavLink } from "react-router-dom";
import "../CreateAccount/CreateAccount.scss";

export default function CreateAccount() {
  return (
    <div className="accountBody">
      <div className="accountTitle">
        <h2>Create Account</h2>
        <div className="line"></div>
      </div>
      <form className="form">
        <div className="fslsNames">
          <div className="frstName">
            <label>First Name</label>
            <input className="fsInp" />
          </div>

          <div className="lastName">
            <label>Last Name</label>
            <input className="lstInp" />
          </div>
        </div>
        <div className="emialpwwsInp">
          <div>
            <label>Email</label>
            <input />
          </div>
          <div>
            <label>Password</label>
            <input />
          </div>
        </div>
        <div className="accountBtn">
          <input className="create" type={"submit"} value="CREATE" />
          <NavLink className={"return"} to={"/"}>RETURN TO STORE</NavLink>
        </div>
      </form>
    </div>
  );
}
