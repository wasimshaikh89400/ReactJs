import "./App.css";
// import StateCheck from "./Component/StateCheck";
// import StateFun from "./Component/StateFun.jsx";
// import FuncNew from "./Component/FuncNew";
import Todo from "./Component/Todo";
import ReactRouting from "./Component/ReactRouting";
import { Switch, Route } from "react-router-dom";
import LinkReact from "./Component/LinkReact";
import UserData from "./Component/UserData";

function App() {
  return (
    <div className="App">
      <LinkReact></LinkReact>
      {/* <StateCheck></StateCheck>
      <StateFun></StateFun>
      <FuncNew></FuncNew> */}
      <Switch>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/Routing">
          <ReactRouting />
        </Route>
        <Route path="/userData">
          <UserData></UserData>
        </Route>
        {/* <Todo></Todo> */}
        {/* <ReactRouting></ReactRouting> */}
      </Switch>
    </div>
  );
}

export default App;
