import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login/Login";
import { signOut } from "./store/reducers/authReducer";
import * as Sentry from "@sentry/react";
import Avatar from "@material-ui/core/Avatar";

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      {user != null ? (
        <div>
          <div>email: {user.email}</div>
          <div>name: {user.displayName}</div>
          <div>id: {user.uid}</div>
          <Avatar src={user.photoURL} alt={user.displayName} />
          <button onClick={() => dispatch(signOut())}>Sign out</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Sentry.withProfiler(App);
