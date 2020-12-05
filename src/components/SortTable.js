import React, { useEffect, useState } from "react";
import { fetchData } from "../utilities/getdata";
import UserCard from "./UserCard";
import SearchFields from "./SearchFields";

const USERS_URL = "http://jsonplaceholder.typicode.com/users";

const SortTable = () => {
  const [userList, setUserList] = useState();
  const [sortBy, setSortBy] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData(USERS_URL, setUserList);
  }, []);

  let listOfCards = [];
  if (userList) {
    const filteredUsers = userList.filter((user) =>
      user[`${sortBy}`].includes(searchTerm)
    );
    listOfCards = filteredUsers.map((user) => {
      return <UserCard props={user} key={user.name} />;
    });
  }

  return (
    <div>
      <h2>Users</h2>
      <SearchFields sortBy={setSortBy} setSearchTerm={setSearchTerm} />
      {listOfCards}
    </div>
  );
};

export default SortTable;
