import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login/Login";
import { signOut } from "./store/reducers/authReducer";
import * as Sentry from "@sentry/react";
import Avatar from "@material-ui/core/Avatar";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      {user != null ? (
        <Layout>
          <Navbar />
          <Home />
        </Layout>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Sentry.withProfiler(App);
