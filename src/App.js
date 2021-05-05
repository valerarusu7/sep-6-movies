import { useSelector } from "react-redux";
import Login from "./pages/Login";
import * as Sentry from "@sentry/react";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { user } = useSelector((state) => state.auth);

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
