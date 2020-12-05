/* eslint-disable react/prop-types */
import React from "react";
import { Col, Row, Form, Label, Input } from "reactstrap";

const SORTBYOPTIONS = ["name", "email", "username"];

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
        <Row form md={6}>
          <Col md={8}></Col>
          <Col sm={4}>
            <Label htmlFor="Search">Search </Label>
            <Input onChange={handleChange} id="search" />
          </Col>
          <Col sm={6}>
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
