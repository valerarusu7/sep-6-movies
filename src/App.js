import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Favorite from "./pages/Favorite";
import { Route, Switch } from "react-router";
import Movie from "./pages/Movie";
import Genre from "./pages/Genre";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      {user != null ? (
        <Layout>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/genre/:type" exact component={Genre} />
            <Route path="/favorite-movies" component={Favorite} />
            <Route path="/movie/:id" component={Movie} />
          </Switch>
        </Layout>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
