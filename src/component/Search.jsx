import React from "react";
import { Divider, Input } from "antd";

function Search({ search, setSearch }) {
  return (
    <div style={{ width: "50%" }}>
      <Divider>Search</Divider>
      <Input
        value={search}
        type="text"
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;
