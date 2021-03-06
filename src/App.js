import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import { Route, Switch, useLocation } from "react-router";
import Movie from "./pages/Movie";
import Genre from "./pages/Genre";
import Networks from "./pages/Networks";
import Network from "./pages/Network";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles/App.css";
import NotFound from "./pages/404";
import Statistics from "./pages/Statistics";
import Person from "./pages/Person";
import Profile from "./pages/Profile";

function App() {
  const { user } = useSelector((state) => state.auth);
  let location = useLocation();
  const currentKey = location.pathname;

  return (
    <div>
      {user != null ? (
        <Layout>
          <TransitionGroup>
            <CSSTransition
              key={currentKey}
              timeout={{ appear: 400, enter: 1000, exit: 500 }}
              classNames="pagefade"
              mountOnEnter={true}
              unmountOnExit={true}
            >
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/genre/:type" exact component={Genre} />
                <Route path="/favorite-movies" component={Favorite} />
                <Route path="/networks" component={Networks} />
                <Route path="/statistics" component={Statistics} />
                <Route path="/network/:id" component={Network} />
                <Route path="/movie/:id" component={Movie} />
                <Route path="/person/:id" component={Person} />
                <Route path="/*" component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Layout>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
