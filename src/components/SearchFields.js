import React from "react";
import { Form, Label, Input } from "reactstrap";

const SORTBYOPTIONS = ["name", "email", "username"];

const SearchFields = () => {
  return (
    <Form>
      <Label htmlFor="Search">Search </Label>
      <Input onChange={() => console.log("h")} id="search" />
      <Label for="exampleSelectMulti">Sort By:</Label>
      <Input
        type="select"
        name="select"
        onChange={(e) => console.log(e.target.value)}
      >
        {SORTBYOPTIONS.map((options) => {
          return <option key={options}>{options}</option>;
        })}
      </Input>
    </Form>
  );
};

export default SearchFields;
