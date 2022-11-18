import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

function Button(props) {
  return <button className="btn1" onClick={
    function (event) {
      event.preventDefault();
      props.onChangeMode();
    }
  }>
    {props.title}
  </button>
}

function BlankButton(props) {
  return <button className="btn2" onClick={
    function (event) {
      event.preventDefault();
      props.onChangeMode();
    }
  }>
    {props.title}
  </button>
}

function LoginPage() {


  useEffect(() => {
    axios
      .get("https://367d83dd-db5f-4b62-91da-a8c94aecc563.mock.pstmn.io/testlist")
      .then((result) => {
        console.log(result.data);
      })
      .catch(() => { });
  }, []);

  return (
    <div>
      <div className="loginbox">
        <div className="logintext">LOGIN</div>
        <form><input className="putid" placeholder="username"></input></form>
        <div class="line2"></div>
        <form><input className="putpw" placeholder="password"></input></form>
        <div class="line2"></div>
        <Button title="LOGIN" onChangeMode={function () {
          window.location.href = "/"
        }}></Button>
        <BlankButton className="btn2" title="Dont't have an account yet? SIGN UP" onChangeMode={function () {
          window.location.href = "/RegisterPage"
        }}></BlankButton>
      </div>
    </div>
  )
}



export default LoginPage