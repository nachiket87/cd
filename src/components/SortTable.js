import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import SearchFields from "./SearchFields";
import { fetchData } from "../utilities/getData";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const SortTable = () => {
  const [userList, setUserList] = useState();
  const [sortBy, setSortBy] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData(USERS_URL, setUserList);
  }, []);

  let listOfCards = [];
  if (userList) {
    const filteredUsers = userList.filter(
      (user) =>
        user["name"].includes(searchTerm) ||
        user["email"].includes(searchTerm) ||
        user["username"].includes(searchTerm)
    );
    let sortedUsers = filteredUsers;
    if (sortBy) {
      sortedUsers = filteredUsers.sort((a, b) => {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      });
    }

    listOfCards = sortedUsers.map((user) => {
      return <UserCard user={user} key={user.name} />;
    });
  }

  return (
    <>
      <SearchFields sortBy={setSortBy} setSearchTerm={setSearchTerm} />
      {listOfCards}
    </>
  );
};
export default SortTable;
