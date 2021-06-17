import "./App.css";
// import StateCheck from "./Component/StateCheck";
// import StateFun from "./Component/StateFun.jsx";
// import FuncNew from "./Component/FuncNew";
import Todo from "./Component/Todo";
import ReactRouting from "./Component/ReactRouting";
import { Switch, Route, Router } from "react-router-dom";
// import LinkReact from "./Component/LinkReact";
import UserData from "./Component/UserData";
import LinkComponent from "./Component/LinkComponent";
import HOCComponent from "./Component/HOCComponent";
import Calculator from "./Component/Calculator";
import AppComponent from "./GmailClone/AppComponent";
function App() {
  return (
    <div className="App">
      <LinkComponent></LinkComponent>
      {/* <LinkReact></LinkReact> */}
      {/* <StateCheck></StateCheck>
      <StateFun></StateFun>
      <FuncNew></FuncNew> */}
      <Switch>
        <Route path="/gmail">
          <AppComponent />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/Routing">
          <ReactRouting />
        </Route>
        <Route path="/userData">
          <UserData></UserData>
        </Route>
        <Route path="/HocComponent">
          <HOCComponent></HOCComponent>
        </Route>
        <Route path="/Calculator">
          <Calculator></Calculator>
        </Route>

        {/* <Todo></Todo> */}
        {/* <ReactRouting></ReactRouting> */}
      </Switch>
    </div>
  );
}

export default App;
