import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const LinkComponent = () => {
  return (
    <div
      style={{
        background: "gray",
        padding: "10px",

        fontWeight: "bold",
      }}
    >
      <Link to="/gmail" style={{ color: "white", margin: "10px" }}>
        Gmail
      </Link>
      <Link to="/todo" style={{ color: "white", margin: "10px" }}>
        To DO
      </Link>
      <Link to="/userData" style={{ color: "white", margin: "10px" }}>
        User Data
      </Link>
      <Link to="/HocComponent" style={{ color: "white", margin: "10px" }}>
        HOC
      </Link>
      <Link to="/calculator" style={{ color: "white", margin: "10px" }}>
        Calculator
      </Link>
    </div>
  );
};

export default LinkComponent;
