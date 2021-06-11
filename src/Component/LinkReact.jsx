import React from "react";
import { Link } from "react-router-dom";
const LinkReact = () => {
  return (
    <div style={{ background: "gray" }}>
      <Link to="/todo" style={{ color: "white", margin: "100px" }}>
        ToDo
      </Link>
      <Link to="/routing" style={{ color: "white", margin: "100px" }}>
        Routing
      </Link>
      <Link to="/userData" style={{ color: "white", margin: "100px" }}>
        {" "}
        UserData
      </Link>
    </div>
  );
};

export default LinkReact;
