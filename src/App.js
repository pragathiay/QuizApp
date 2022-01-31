import React from "react";
import "./App.css";
import Result1 from "./components/Result1";
import { Route, Switch } from "react-router-dom";
import Start from "./components/Start";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Start} />
      </Switch>
      <Switch>
        <Route exact path="/result" component={Result1} />
      </Switch>
    </div>
  );
}

export default App;
