import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaRegHeart } from "react-icons/fa";
import { LinkR } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fst-italic fw-bold mx-5">
            FASHION
          </Link>

          <ul className="navbar-nav ">
            <li className="nav-item">
              <LinkR
                to="/"
                className="nav-link active border-bottom border-danger border-2 px-2"
              >
                HOME
              </LinkR>
            </li>
            <li className="nav-item px-1">
              <LinkR to="/" className="nav-link text-dark">
                MEN
              </LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="/" className="nav-link text-dark">
                SHOP
              </LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="/" className="nav-link text-dark">
                PAGES
              </LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="/" className="nav-link text-dark">
                BLOG
              </LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="/" className="nav-link text-dark">
                CONTACT
              </LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="login" className="nav-link text-dark">
                LOGIN
              </LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="/" className="nav-link">
                /Register
              </LinkR>
            </li>
          </ul>
          <div className="px-5">
            <span>
              <FaSearch />
            </span>
            <span className="mx-3">
              <FaRegHeart />
            </span>
            <span>
              <FaShoppingCart />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
