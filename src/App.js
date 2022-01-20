import ProtectedRouter from "./helpers/ProtectedRouter/ProtectedRouter";
import Login from "./routes/Login/Login";
import Signup from "./routes/Singup/Signup";
import Home from "./routes/Home/Home";
import Container from "./routes/groups/Container";
import { useApi } from "./context/ApiContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const { user } = useApi();

  console.log("App");
  return (
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
  );
}

export default App;
