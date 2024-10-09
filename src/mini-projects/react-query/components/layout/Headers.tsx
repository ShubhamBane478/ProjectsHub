import React from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <header>
      <div>
        <NavLink to="/react-query">Home</NavLink>
        <ul>
          <li>
            <NavLink to="/react-query/fetch-new">Fetch New</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/fetch-old">Fetch Old</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Headers;
