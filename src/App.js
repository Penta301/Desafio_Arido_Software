import React from "react";
import ProtectedRouter from "./helpers/ProtectedRouter/ProtectedRouter";
import Loading from "./components/Loading/LoadingPage";
import { useApi } from "./context/ApiContext";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const Login = React.lazy(() => import("./routes/Login/Login"));
const Signup = React.lazy(() => import("./routes/Singup/Signup"));
const Home = React.lazy(() => import("./routes/Home/Home"));
const Container = React.lazy(() => import("./routes/groups/Container"));

function App() {
  const { user } = useApi();

  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <ProtectedRouter
            path="/"
            exact
            Component={Home}
            isAuth={user}
            routeRedirect="/login"
          />
          <ProtectedRouter
            path="/groups"
            Component={Container}
            isAuth={user}
            routeRedirect="/login"
          />
          <ProtectedRouter
            path="/login"
            Component={Login}
            isAuth={!user}
            routeRedirect="/"
          />
          <ProtectedRouter
            path="/signup"
            Component={Signup}
            isAuth={!user}
            routeRedirect="/"
          />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
