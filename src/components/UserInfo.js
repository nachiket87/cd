/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { fetchData } from "../utilities/getData";
import Posts from "./Posts";
import { CardColumns, Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import contactInfoLister from "../utilities/contactInfoLister";

const UserInfo = (props) => {
  const id = props.match.params.id;
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const postUrl = `http://jsonplaceholder.typicode.com/posts?userId=${id}`;

  useEffect(() => {
    fetchData(url, setUser);
    fetchData(postUrl, setPosts);
  }, []);

  if (user && posts) {
    console.log(user);
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
              <CardTitle tag="h5">Contact Info </CardTitle>
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
        <Posts allposts={posts} />
      </>
    );
  }
};

export default UserInfo;
