import React, { useState } from "react";
import { Nav, NavLink, NavMenu, Bars, Logo } from "./NavbarElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <Logo>Logo</Logo>
        <Bars onClick={toggleMenu} />
        <NavMenu isOpen={isOpen}>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact Us
          </NavLink>
          <NavLink to="/blogs" activeClassName="active">
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeClassName="active">
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;