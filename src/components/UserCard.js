/* eslint-disable react/prop-types */
import React from "react";
import "../styles.css";

const UserCard = ({ props }) => {
  const { name, email, username } = props;
  return (
    <div className="card-user">
      <div className="card-user-infos">
        <div>
          <h2>{name}</h2>
          <p>{username}</p>
        </div>
      </div>
      <div className="card-user-infos">{email}</div>
    </div>
  );
};

export default UserCard;
