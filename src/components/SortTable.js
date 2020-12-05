import React, { useEffect, useState } from "react";
import { fetchData } from "../utilities/getdata";
import UserCard from "./UserCard";
import SearchFields from "./SearchFields";

const USERS_URL = "http://jsonplaceholder.typicode.com/users";

const SortTable = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchData(USERS_URL, setUsers);
  }, []);

  let listOfCards = [];
  if (users) {
    listOfCards = users.map((user) => {
      return <UserCard props={user} key={user.name} />;
    });
  }

  /*const handleChange = (e) => {
    console.log(e.target.value);
  };*/
  return (
    <div>
      <div>
        <h2> Users </h2>
        <SearchFields />
      </div>
      {listOfCards}
    </div>
  );
};

export default SortTable;
