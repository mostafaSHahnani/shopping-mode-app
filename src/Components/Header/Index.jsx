import React from "react";
import { Link } from "react-router-dom";
import ImageOne from "../../Images/banner0.jpg";
import ImageTwo from "../../Images/banner13.jpg";
import ImageThree from "../../Images/banner14.jpg";
import ImageFour from "../../Images/banner12.jpg";
import ImageFive from "../../Images/banner11.jpg";
const Header = () => {
  return (
    <>
      <div className="container-fluid my-1">
        <div className="row">
          <div className="col-md-6 my-1">
            <div className="card border-0 rounded-0">
              <img
                src={ImageOne}
                className="card-img"
                style={{ backgroundColor: "#FFDAB9", height: "450px" }}
                alt="banner..."
              ></img>
              <div className="card-img-overlay text-end text-dark">
                <h6 className="card-title fst-italic fw-bold">FASHION</h6>
                <p className="card-text text-muted">
                  Sitamet, consectetur adipiscing elit,<br></br> sed do eiusmod
                  tempor incidid-unt<br></br> ultrices.
                </p>
                <Link
                  to="/"
                  className="btn btn-sm border-0 rounded-0 border-2 border-bottom border-danger p-0"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <div className="card border-0 rounded-0 my-1">
                  <img
                    src={ImageTwo}
                    style={{ height: "220px" }}
                    className="card-img"
                    alt="Banner..."
                  ></img>
                  <div className="card-img-overlay text-end text-dark w-100">
                    <h6 className="card-title fst-italic fw-bold">
                      Men’s fashion
                    </h6>
                    <p className="card-text text-muted">273 items</p>
                    <Link
                      to="/"
                      className="btn btn-sm border-0 rounded-0 border-2 border-bottom border-danger p-0"
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 rounded-0 my-1">
                  <img
                    src={ImageThree}
                    style={{ height: "220px" }}
                    className="card-img"
                    alt="Banner..."
                  ></img>
                  <div className="card-img-overlay text-end text-dark">
                    <h6 className="card-title fst-italic fw-bold">Cosmetics</h6>
                    <p className="card-text text-muted">189 items</p>
                    <Link
                      to="/"
                      className="btn btn-sm border-0 rounded-0 border-2 border-bottom border-danger p-0"
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 rounded-0 my-1">
                  <img
                    src={ImageFour}
                    style={{ height: "220px" }}
                    className="card-img"
                    alt="Banner..."
                  ></img>
                  <div className="card-img-overlay text-end text-dark">
                    <h6 className="card-title fst-italic fw-bold">
                      Women’s fashion
                    </h6>
                    <p className="card-text text-muted ">213 items</p>
                    <Link
                      to="/"
                      className="btn btn-sm border-0 rounded-0 border-2 border-bottom border-danger p-0"
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-0 rounded-0 my-1">
                  <img
                    src={ImageFive}
                    style={{ height: "220px" }}
                    className="card-img"
                    alt="Banner..."
                  ></img>
                  <div className="card-img-overlay text-end text-dark">
                    <h6 className="card-title fst-italic fw-bold">
                      Accessories
                    </h6>
                    <p className="card-text text-muted">387 items</p>
                    <Link
                      to="/"
                      className="btn btn-sm border-0 rounded-0 border-2 border-bottom border-danger p-0"
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
