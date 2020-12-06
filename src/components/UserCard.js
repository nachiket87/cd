/* eslint-disable react/prop-types */
import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { name, email, username, id } = user;
  return (
    <div className="card-user">
      <div className="card-user-infos">
        <Link
          to={`user/${id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <h2>{name}</h2>
          <p>{username}</p>
        </Link>
      </div>
      <div className="card-user-infos">
        <a href={`mailto:${email}`}> {email}</a>
      </div>
    </div>
  );
};

export default UserCard;
