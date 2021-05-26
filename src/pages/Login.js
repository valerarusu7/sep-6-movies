import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../store/reducers/authReducer";
import style from "../styles/Login.module.css";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className={style.container}>
      <div className={style.login}>
        <Link to="/" className={style.button}>
          <div onClick={() => dispatch(signIn())}>Login with Google</div>
        </Link>
      </div>
      <div className={style.drops}>
        <div className={style.drop1}></div>
        <div className={style.drop2}></div>
        <div className={style.drop3}></div>
        <div className={style.drop4}></div>
        <div className={style.drop5}></div>
      </div>
    </div>
  );
};

export default Login;
