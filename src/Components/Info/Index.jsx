import React from "react";
import { BsInstagram } from "react-icons/bs";
import ImageOne from "../../Images/banner16.jpg";
import ImageTwo from "../../Images/banner3.jpg";
import ImageThree from "../../Images/banner4.jpg";
import ImageFour from "../../Images/banner5.jpg";
import ImageFive from "../../Images/banner1.jpg";
import ImageSix from "../../Images/m1.jpg";
import ImageSeven from "../../Images/m2.jpg";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <>
      <div className="conntainer-fluid mx-3 my-5">
        <div className="row">
          <div className="col-md-9 d-flex flex-row flex-wrap mt-3">
            <div className="col-md-6">
              <div className="card border-0 mb-3">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={ImageOne}
                      className="img-fluid rounded-start h-100"
                      alt="banner..."
                    ></img>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body text-start">
                      <h5 className="card-title fst-italic fw-bold border-bottom border-danger border-2 p-2">
                        Men’s Fashion
                      </h5>
                      <Link
                        to="/"
                        className="btn btn-outline-danger btn-sm card-text mt-5 mb-2"
                      >
                        See More...!
                      </Link>
                      <p className="card-text">
                        <small className="text-muted">Show the gallery</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 mb-3">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={ImageTwo}
                      className="img-fluid rounded-start h-100"
                      alt="banner..."
                    ></img>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body text-start">
                      <h5 className="card-title fst-italic fw-bold border-bottom border-danger border-2 p-2">
                        Men’s Fashion
                      </h5>
                      <Link
                        to="/"
                        className="btn btn-outline-danger btn-sm card-text mt-5 mb-2"
                      >
                        See More...!
                      </Link>
                      <p className="card-text">
                        <small className="text-muted">Show the gallery</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 mb-3">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={ImageThree}
                      className="img-fluid rounded-start h-100"
                      alt="banner..."
                    ></img>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body text-start">
                      <h5 className="card-title fst-italic fw-bold border-bottom border-danger border-2 p-2">
                        Women fashion
                      </h5>
                      <Link
                        to="/"
                        className="btn btn-outline-danger btn-sm card-text mt-5 mb-2"
                      >
                        See More...!
                      </Link>
                      <p className="card-text">
                        <small className="text-muted">Show the gallery</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 mb-3">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={ImageFour}
                      className="img-fluid rounded-start h-100"
                      alt="banner..."
                    ></img>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body text-start">
                      <h5 className="card-title fst-italic fw-bold border-bottom border-danger border-2 p-2">
                        Women fashion
                      </h5>
                      <Link
                        to="/"
                        className="btn btn-outline-danger btn-sm card-text mt-5 mb-2"
                      >
                        See More...!
                      </Link>
                      <p className="card-text">
                        <small className="text-muted">Show the gallery</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0">
              <img
                src={ImageFive}
                className="card-img h-100"
                alt="banner..."
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-2 m-0 p-0">
            <div className="container m-0 p-0">
              <img src={ImageSix} alt="Avatar" className="image"></img>
              <div className="middle">
                <span className="inner-text text-center fs-6">
                  <BsInstagram />
                  <p>@Fashion_Shop</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-2 m-0 p-0">
            <div className="container m-0 p-0">
              <img src={ImageSeven} alt="Avatar" className="image"></img>
              <div className="middle">
                <span className="inner-text text-center fs-6">
                  <BsInstagram />
                  <p>@Fashion_Shop</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-2 m-0 p-0">
            <div className="container m-0 p-0">
              <img src={ImageSix} alt="Avatar" className="image"></img>
              <div className="middle">
                <span className="inner-text text-center fs-6">
                  <BsInstagram />
                  <p>@Fashion_Shop</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-2 m-0 p-0">
            <div className="container m-0 p-0">
              <img src={ImageSeven} alt="Avatar" className="image"></img>
              <div className="middle">
                <span className="inner-text text-center fs-6">
                  <BsInstagram />
                  <p>@Fashion_Shop</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-2 m-0 p-0">
            <div className="container m-0 p-0">
              <img src={ImageSix} alt="Avatar" className="image"></img>
              <div className="middle">
                <span className="inner-text text-center fs-6">
                  <BsInstagram />
                  <p>@Fashion_Shop</p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-2 m-0 p-0">
            <div className="container m-0 p-0">
              <img src={ImageSeven} alt="Avatar" className="image"></img>
              <div className="middle">
                <span className="inner-text text-center fs-6">
                  <BsInstagram />
                  <p>@Fashion_Shop</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
