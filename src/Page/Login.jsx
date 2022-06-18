import React from "react";
import ImageOne from "../Images/bn.jpg";
import { BiSend } from "react-icons/bi";
import "../Components/Main/Main.css";
const Login = () => {
  return (
    <>
      <div className="container color-grade mt-2">
        <div className="row">
          <h1 className="fst-italic fw-bold text-center mt-3">FASHION</h1>
          <div className="col-md-4">
            <div
              className="card border-0"
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src={ImageOne}
                className="card-img"
                style={{ height: "400px" }}
                alt="banner..."
              ></img>
            </div>
          </div>
          <div className="col-md-8">
            <form className="my-3 w-75">
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg border-0 rounded-0 rounded-pill shadow-none border-bottom border-2"
                  id="formGroupExampleInput"
                  placeholder="Name"
                ></input>
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg border-0 rounded-0 rounded-pill shadow-none border-bottom border-2"
                  id="formGroupExampleInput2"
                  placeholder="LastName"
                ></input>
              </div>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg border-0 rounded-0 rounded-pill shadow-none border-bottom border-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                ></input>
                <small id="emailHelp" className="form-text text-muted px-3">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group mb-5">
                <input
                  type="password"
                  className="form-control form-control-lg border-0 rounded-0 rounded-pill shadow-none border-bottom border-2"
                  id="exampleInputPassword1"
                  placeholder="Password"
                ></input>
              </div>
              <div className="d-grid ">
                <button type="submit" className="btn btn-primary rounded-pill">
                  Send <BiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
