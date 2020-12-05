/* eslint-disable react/prop-types */
import React from "react";
import { Col, Row, Form, Label, Input } from "reactstrap";

const SORTBYOPTIONS = ["", "name", "email", "username"];

const SearchFields = (props) => {
  const { sortBy, setSearchTerm } = props;

  const handleChange = (event) => {
    event.target.id === "sortby"
      ? sortBy(event.target.value)
      : setSearchTerm(event.target.value);
  };
  return (
    <>
      <Form>
        <Row form style={{ margin: "1rem 0" }}>
          <Col>
            <h2> Users</h2>{" "}
          </Col>
          <Col sm={12} lg={4} md={12} style={{ padding: "0" }}>
            <Label htmlFor="Search">Search </Label>
            <Input onChange={handleChange} id="search" />
          </Col>
          <Col sm={6} lg={2} md={12}>
            <Label for="exampleSelectMulti">Sort By</Label>
            <Input
              type="select"
              name="select"
              id="sortby"
              onChange={handleChange}
            >
              {SORTBYOPTIONS.map((options) => {
                return <option key={options}>{options}</option>;
              })}
            </Input>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SearchFields;
