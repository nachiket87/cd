/* eslint-disable react/prop-types */
import React from "react";
import { CardColumns, Card, CardBody, CardTitle } from "reactstrap";

const Posts = ({ allposts }) => {
  const listofPosts = allposts.map((posts) => {
    return (
      <Card key={posts.id}>
        <CardBody>
          <CardTitle tag="h5">{posts.title}</CardTitle>
          {posts.body}
        </CardBody>
      </Card>
    );
  });

  return <CardColumns>{listofPosts}</CardColumns>;
};

export default Posts;
