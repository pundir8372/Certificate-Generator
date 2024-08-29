import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext"; // Import the context
import "./Header.css";

const Header = () => {
  const { isDisabled } = useAppContext(); // Use context

  return (
    <header className="header">
      <div className="logo">
        <h1>Certificate Generator</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="underline-link">Home</Link>
        <Link
          to="/generate"
          className="underline-link generate-link"
          style={{
            pointerEvents: isDisabled ? 'none' : 'auto',
            opacity: isDisabled ? '0.5' : '1'
          }}
        >
          Generate Certificate
        </Link>
      </nav>
    </header>
  );
};

export default Header;
