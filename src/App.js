import React, { useState, useEffect } from "react";
import SortTable from "./components/SortTable";
import UserInfo from "./components/UserInfo";
import { fetchData } from "./utilities/getData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [userList, setUserList] = useState();

  useEffect(() => {
    fetchData(USERS_URL, setUserList);
  }, []);

  let routeList = [];
  if (userList) {
    routeList = userList.map((user) => {
      return (
        <Route
          exact
          key={user.id}
          path={`/user/${user.id}`}
          component={() => <UserInfo user={user} />}
        />
      );
    });
  }

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <SortTable userlist={userList} />}
          />
          {routeList}
        </Switch>
      </Router>
    </>
  );
};

export default App;
