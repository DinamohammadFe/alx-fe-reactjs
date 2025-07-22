import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#333",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/about">
        About
      </Link>
      <Link style={linkStyle} to="/services">
        Services
      </Link>
      <Link style={linkStyle} to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
