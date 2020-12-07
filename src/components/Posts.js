/* eslint-disable react/prop-types */
import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const Post = ({ post }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{post.title}</CardTitle>
        {post.body}
      </CardBody>
    </Card>
  );
};

export default Post;
