/* eslint-disable react/prop-types */
import React from "react";

const UserInfo = (props) => {
  const id = props.match.params;
  console.log(id);
  return (
    <div>
      <h2>{`User >`}</h2>
    </div>
  );
};

export default UserInfo;
