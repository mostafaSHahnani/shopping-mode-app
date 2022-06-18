import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LinkR } from "./MainMenuElements";

const MainMenu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm m-5">
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand fst-italic fw-bold border-bottom border-danger border-2 mx-5"
          >
            NEW PRODUCT
          </Link>
          <ul className="navbar-nav px-5">
            <li className="nav-item active">
              <LinkR
                className="nav-link border-bottom border-danger border-2"
                to="/"
              >
                Men’s
              </LinkR>
            </li>
            <li className="nav-item px-1">
              <LinkR className="nav-link" to="women">
                Women’s
              </LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="accessories" className="nav-link">
                Accessories
              </LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="watch" className="nav-link">
                Wrist Watch
              </LinkR>
            </li>
            <li className="nav-item">
              <LinkR to="shoes" className="nav-link">
                Shoes
              </LinkR>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default MainMenu;
