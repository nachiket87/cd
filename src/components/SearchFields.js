/* eslint-disable react/prop-types */
import React from "react";
import { Form, Label, Input } from "reactstrap";

const SORTBYOPTIONS = ["name", "email", "username"];

const SearchFields = (props) => {
  const { sortBy, setSearchTerm } = props;

  const handleChange = (event) => {
    event.target.id === "sortby"
      ? sortBy(event.target.value)
      : setSearchTerm(event.target.value);
  };
  return (
    <Form>
      <Label htmlFor="Search">Search </Label>
      <Input onChange={handleChange} id="search" />
      <Label for="exampleSelectMulti">Sort By:</Label>
      <Input type="select" name="select" id="sortby" onChange={handleChange}>
        {SORTBYOPTIONS.map((options) => {
          return <option key={options}>{options}</option>;
        })}
      </Input>
    </Form>
  );
};

export default SearchFields;
