import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import { Divider } from "@material-ui/core";

function Signin() {
    const handleLogin = useCallback(
        async (event) => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await app
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
          } catch (err) {
            alert(err);
          }
        },
        []
      );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/account" />;
  }
  return (
    <div>
      {" "}
      <div className="signup">
        <div className="allup2">
          {" "}
          <div className="svgcon">
           <a href="/"><svg
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
          <form className="upform" onSubmit={handleLogin}>
            <div className="uphead">Login</div>
            <div className="selector">
              <input
                type="email"
                name="email"
                placeholder="Email"
                id=""
                className="inpup1"
              />
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
                className="inpup1"
              />
              <button type="submit" className="upbtn">
                Login
              </button>
              <span className="spanup">
                Don't have an account?<a href="/signup"> Make An Account?</a>
              </span>
              <Divider />
              <div className="upearly">
                *&nbsp;Google Authentication is not supported for early access
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
