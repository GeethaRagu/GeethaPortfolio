import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar fluid rounded className="dark:bg-black mb-10">
        <div className="flex md:order-2"><Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 rounded-full bg-gradient-to-r from-fuchsia-950 via-fuchsia-800 to-fuchsia-500 text-white">
            Geetha
          </span>
          Portfolio
        </Link>
        <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link as={"div"} className="mt-2">
            <Link to="/home">Home</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"} className="mt-2">
            <Link to="/about">About me</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"} className="mt-2">
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"} className="mt-2">
            <Link to="/contact">Contact me</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
