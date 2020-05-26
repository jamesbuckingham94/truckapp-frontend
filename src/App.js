import React from "react";
import { Button } from "semantic-ui-react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Client from "./views/Client";
import Consumer from "./views/Consumer";
import Home from "./views/Home";
import { List } from "semantic-ui-react";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <List bulleted horizontal>
            <List.Item as="a">
              <Link to="/">Home</Link>
            </List.Item>
            <List.Item as="a">
              <Link to="/consumer">Consumer</Link>
            </List.Item>

            <List.Item as="a">
              <Link to="/client">Client</Link>
            </List.Item>
          </List>
        </nav>

        <Switch>
          <Route path="/client">
            <Client />
          </Route>
          <Route path="/consumer">
            <Consumer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
