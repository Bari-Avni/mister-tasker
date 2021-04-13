import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { TaskApp } from "./pages/TaskApp/TaskApp";
import { HomePage } from "./pages/HomePage/HomePage";
import { About } from "./pages/About/About";
// import { StatisticPage } from "./pages/StatisticPage/StatisticPage";
import { AppHeader } from "./cmps/AppHeader/AppHeader";
import { TaskDetails } from "./pages/TaskDetails/TaskDetails";
import { Signup } from "./pages/Signup/Signup";
import { TaskEdit } from "./pages/TaskEdit/TaskEdit";
import { userService } from "./services/userService";
import "./App.scss";

function setValid(){
  return userService.getLoggedinUser();
}
export function App() {
    const PrivateRoute = (props) => {
      const isSignup = setValid()
      console.log('props', props);
    return isSignup ? <Route component={props.component} path={props.path} /> : <Redirect to="/signup" />
  }
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route component={TaskEdit} path="/task/edit/:id?" />
          <Route component={TaskDetails} path="/task/:id" />
          <PrivateRoute component={TaskApp} path="/task" />
          {/* <PrivateRoute component={StatisticPage} path="/stats" /> */}
          <PrivateRoute component={About} path="/about" />
          <Route component={Signup} path="/signup" />
          <PrivateRoute isUser={true} component={HomePage} path="/" />
          {/* <Route component={HomePage} path="/" /> */}
        </Switch>
      </div>
    </Router>
  );
}
