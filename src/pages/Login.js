import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../store/reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="Login">
      <Link to="/">
        <button onClick={() => dispatch(signIn())}>Login</button>
      </Link>
    </div>
  );
};

export default Login;
