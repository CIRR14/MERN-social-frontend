import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("Passwords do not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
              ref={email}
              className="loginInput"
              required
              type="email"
            />
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
              required
            />

            <input
              placeholder="Password"
              ref={password}
              className="loginInput"
              required
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              className="loginInput"
              required
              type="password"
              minLength="6"
            />

            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to={"/login"}>
              <button className="loginRegisterButton">Log Into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
