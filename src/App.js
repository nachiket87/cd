import React from "react";
import SortTable from "./components/SortTable";
import UserInfo from "./components/UserInfo";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={SortTable} />
          <Route exact path={`/user/:id`} component={UserInfo} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
