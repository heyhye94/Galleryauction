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


function RegisterPage() {

  useEffect(() => {
    axios
      .get("https://367d83dd-db5f-4b62-91da-a8c94aecc563.mock.pstmn.io/testlist")
      .then((result) => {
        console.log(result.data);
      })
      .catch(() => { });
  }, []);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const [passwordrp, setPwrp] = useState("");

  const register = () => (
    axios
      .post("https://367d83dd-db5f-4b62-91da-a8c94aecc563.mock.pstmn.io/testlist"), {
        username: username,
        email: email,
        password: password,
        passwordrp: passwordrp,
      }
        .then((response) => {
          console.log('well done');
          console.log(response.data);
        })
        .catch(() => { })
  )


  return (
    <div>
      <div className="signupbox">
        <div className="signuptext">SIGN UP</div>
        <div className="signuptext2">⦁&nbsp;&nbsp;USERNAME</div>
        <form><input className="signupinput" value={username} onChange={
          (event) => {
            setUserName(event.target.value);
          }
        }></input></form>
        <div class="line2"></div>
        <div className="signuptext2">⦁&nbsp;&nbsp;EMAIL ADDRESS</div>
        <form><input className="signupinput" value={email} onChange={
          (event) => {
            setEmail(event.target.value);
          }
        }></input></form>
        <div class="line2"></div>
        <div className="signuptext2">⦁&nbsp;&nbsp;PASSWORD</div>
        <form><input className="signupinput" value={password} onChange={
          (event) => {
            setPw(event.target.value);
          }
        }></input></form>
        <div class="line2"></div>
        <div className="signuptext2">⦁&nbsp;&nbsp;REPEAT PASSWORD</div>
        <form><input className="signupinput" value={passwordrp} onChange={
          (event) => {
            setPwrp(event.target.value);
          }
        }></input></form>
        <div class="line2"></div>
        <Button title="SIGN UP" onChangeMode={function () {
          window.location.href = "/RegisterPage2"
        }}></Button>
        <button onClick={register}>통신테스트버튼</button>
      </div>
    </div >
  )
}

export default RegisterPage