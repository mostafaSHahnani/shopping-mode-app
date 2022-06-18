import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsSuitHeartFill,
} from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="row">
          <div className="col-md-4">
            <h1 className="fst-italic fw-bold mb-3">FASHION</h1>
            <p className="text-muted mb-4">
              Lorem, ipsum dolor sit molestias! amet consectetur elit. Veniam
              recusandae ipsam neque molestias!
            </p>
            <Link
              to="/"
              className="btn btn-warning rounded-circle"
              style={{
                width: "40px",
                height: "40px",
              }}
            ></Link>
            <Link
              to="/"
              className="btn btn-danger rounded-circle mx-1"
              style={{
                width: "40px",
                height: "40px",
              }}
            ></Link>
            <Link
              to="/"
              className="btn btn-secondary rounded-circle "
              style={{
                width: "40px",
                height: "40px",
              }}
            ></Link>
            <Link
              to="/"
              className="btn btn-primary rounded-circle mx-1"
              style={{
                width: "40px",
                height: "40px",
              }}
            ></Link>
          </div>
          <div className="col-md-2">
            <ul className="list-group ">
              <Link to="/" className="list-group-item border-0 fs-6">
                QUICK LINKS
              </Link>
              <Link to="/" className="list-group-item text-muted border-0">
                About
              </Link>
              <Link to="/" className="list-group-item text-muted border-0">
                Blogs
              </Link>
              <Link to="/" className="list-group-item text-muted border-0">
                Contact
              </Link>
              <Link to="/" className="list-group-item text-muted border-0">
                FAQ
              </Link>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="list-group">
              <Link to="/" className="list-group-item border-0 fs-6">
                ACCOUNT
              </Link>
              <Link to="/" className="list-group-item text-muted border-0">
                My Account
              </Link>
              <Link to="/" className="list-group-item text-muted border-0">
                Tracking
              </Link>
              <Link to="/" className="list-group-item text-muted border-0">
                Checkout
              </Link>
              <Link to="/" className="list-group-item text-muted border-0">
                Wishlist
              </Link>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="fs-5 mt-1">NEWSLETTER</p>
            <div className="input-group w-100 my-4">
              <input
                type="email"
                className="form-control rounded-pill shadow-none"
                style={{
                  marginRight: "-112px",
                  height: "46px",
                }}
                placeholder="Email"
                aria-label="Email"
                aria-describedby="button-addon2"
              ></input>
              <button
                className="btn btn-danger rounded-pill"
                style={{
                  marginTop: "3px",
                  marginRight: "30px",
                  height: "40px",
                }}
                type="button"
                id="button-addon2"
              >
                SUBSCRIBE
              </button>
            </div>
            <div className="mt-5">
              <span className="text-muted fs-2 mr-3">
                <BsFacebook />
              </span>
              <span className="text-muted fs-2 mx-3">
                <BsTwitter />
              </span>
              <span className="text-muted fs-2 mx-3">
                <BsYoutube />
              </span>
              <span className="text-muted fs-2 mx-3">
                <BsInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-top">
        <div className="row">
          <p className="text-center text-muted my-3">
            copyright{" "}
            <span className="mx-1">
              <BiCopyright />
            </span>
            2022 All rights reserved | This template is made with
            <span className="text-danger mx-1">
              <BsSuitHeartFill />
            </span>
            Suscipit, officia.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
