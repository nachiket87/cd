/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { CardColumns, Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

import contactInfoLister from "../utilities/contactInfoLister";
import { fetchData } from "../utilities/getData";

import Post from "./Posts";

const UserInfo = ({ user }) => {
  const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData(postUrl, setPosts);
  }, []);

  const postList = posts.map((post) => {
    return <Post post={post} key={post.id} />;
  });

  const contactKeys = ["username", "email", "phone", "website"];
  const addressKeys = ["suite", "street", "city", "zipcode"];
  const companyKeys = ["name", "bs", "catchPhrase"];

  const contactInfo = contactInfoLister(contactKeys, user, "contact");
  const addressInfo = contactInfoLister(addressKeys, user.address, "address");
  const companyInfo = contactInfoLister(companyKeys, user.company, "company");

  return (
    <>
      <h2>
        <Link to="/">{`User`}</Link> {`> ${user.name}`}
      </h2>
      <CardColumns>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Contact Info</CardTitle>
            {contactInfo}
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Address</CardTitle>
            {addressInfo}
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Company</CardTitle>
            {companyInfo}
          </CardBody>
        </Card>
      </CardColumns>

      <h3>Posts by {user.name}</h3>
      <CardColumns>{postList}</CardColumns>
    </>
  );
};

export default UserInfo;
