import React from "react";
import { Link } from "gatsby";
// Styles
import "./Success.scss";

// Gatsby Link Component style
const linkStyle = {
  color: "#ffaf29",
  padding: "10px 0 0 0",
};

const success = () => {
  return (
    <div className="success">
      <p className="success-message">
        Success! Your message has been delivered.
      </p>
      <Link to="/" style={linkStyle}>
        Return Home
      </Link>
    </div>
  );
};

export default success;
