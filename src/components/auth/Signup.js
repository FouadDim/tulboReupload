import React, { useCallback, useState } from "react";
import "./sign.css";
import { Divider } from "@material-ui/core";
import { withRouter } from "react-router";
import app from "./base";
import emailjs from "emailjs-com";

function Signup({ history }) {
  const initialize = () => {
    emailjs.init(process.env.REACT_APP_USER_ID);
  };
  initialize();

  function sendEmail() {
    var userEmail = document.getElementById("email").value;
    var name = document.getElementById("name").value;

    var contactParams = {
      to_email: userEmail,
      to_name: name,
    };

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      contactParams
    );
  }

  function newSignup() {
    var userEmail = document.getElementById("email").value;
    var name = document.getElementById("name").value;

    var contactParams2 = {
      from_email: userEmail,
      from_name: name,
    };

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID2,
      process.env.REACT_APP_TEMPLATE_ID2,
      contactParams2
    );
  }

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        sendEmail();
        newSignup();
        history.push("/account");
      } catch (err) {
        if(err == "FirebaseError: Firebase: The email address is already in use by another account. (auth/email-already-in-use)."){
          alert('Email address is already in use.')
        }else if(err == "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password)."){
          alert('Password too short. It should be atleast 6 characters')
        }else{
          alert('An error occurred. Please review the form.')
        }
      }
    },
    [history]
  );

  return (
    <div className="signup">
      <div className="allup">
        {" "}
        <div className="svgcon">
          <a href="/">
            <svg
              style={{ alignSelf: "center" }}
              width="62"
              height="38"
              viewBox="0 0 62 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2_23)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 0C2.44772 0 2 0.447715 2 1V10.5C2 11.0523 2.44772 11.5 3 11.5H6.5H8H17L5 44H20L32 11.5H44.5H48.5C54.8513 11.5 60 6.35127 60 0H49.5H26H8H6.5H3ZM50 14H34L29.7 25.5H38.5C44.8513 25.5 50 20.3513 50 14ZM39 28C39 34.3513 33.8513 39.5 27.5 39.5H24.7L29 28H39Z"
                  fill="url(#paint0_linear_2_23)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2_23"
                  x="0"
                  y="0"
                  width="62"
                  height="48"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0.47 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2_23"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2_23"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2_23"
                  x1="60"
                  y1="-6.86537e-06"
                  x2="6"
                  y2="44"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF0000" />
                  <stop offset="1" stop-color="#CE0000" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
        <form autocomplete="off" id="form01001" onSubmit={handleSubmit}>
          <div className="uphead">Sign up for free</div>
          <div className="selector">
            <input
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              className="inpup1"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              className="inpup1"
              required
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              className="inpup1"
              required
            />
            <button id="btn01001" type="submit" className="upbtn">
              Sign up
            </button>
            <span className="spanup">
              Already have an account?<a href="/login"> Login?</a>
            </span>
            <Divider />
            <div className="upearly">
              *&nbsp;Google Authentication is not supported for early access
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Signup);
