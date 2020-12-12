/* eslint-disable react/prop-types */
import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { name, email, username, id } = user;
  return (
    <div className="card-user">
      <div className="card-user-infos">
        <Link to={`user/${id}`} style={{ color: "black" }}>
          <div style={{ display: "flex" }}>
            <div className="avatar">
              {name.split(" ")[0].charAt(0)}
              {name.split(" ")[1].charAt(0)}
            </div>
            <div>
              <h2>{name}</h2>
              <p>{username}</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="card-user-infos">
        <a href={`mailto:${email}`}> {email}</a>
      </div>
    </div>
  );
};

export default UserCard;
