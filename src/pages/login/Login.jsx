import "./login.css";
import { useState, useRef, useContext } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { loginCall } from "../../apiCalls.js";
import { AuthContext } from "../../context/AuthContext.js";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const [typeOfInput, setTypeOfInput] = useState("password");
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const typeOfInputHandler = (e) => {
    e.preventDefault();
    setTypeOfInput(typeOfInput === "password" ? "text" : "password");
  };

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">This is the slogan</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
              autoComplete="true"
            />
            <div className="passwordDiv">
              <input
                ref={password}
                placeholder="Password"
                type={typeOfInput}
                className="loginInput"
                required
                minLength="6"
                autoComplete="true"
              />
              <button className="showPassword" onClick={typeOfInputHandler}>
                {typeOfInput === "password" ? (
                  <Visibility />
                ) : (
                  <VisibilityOff />
                )}
              </button>
            </div>

            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create A New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
