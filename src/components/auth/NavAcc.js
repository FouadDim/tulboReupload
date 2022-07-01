import { Button, Divider, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import "./sign.css";
import app from "./base";

function NavAcc() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const user = app.auth().currentUser._delegate.email;
  const one = user.split("@")
  const two = one[0]

  return (
    <div className="nav">
      <div className="main">
        <div className="logo">
          <svg
            width="44"
            height="30"
            viewBox="0 0 58 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 0C0.447715 0 0 0.447715 0 1V10.5C0 11.0523 0.447715 11.5 1 11.5H4.5H6H15L3 44H18L30 11.5H42.5H46.5C52.8513 11.5 58 6.35127 58 0H47.5H24H6H4.5H1ZM48 14H32L27.7 25.5H36.5C42.8513 25.5 48 20.3513 48 14ZM37 28C37 34.3513 31.8513 39.5 25.5 39.5H22.7L27 28H37Z"
              fill="url(#paint0_linear_59_148)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_59_148"
                x1="58"
                y1="-6.86537e-06"
                x2="4"
                y2="44"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF0000" />
                <stop offset="1" stopColor="#CE0000" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Welcome, {two}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem><a style={{textDecoration: "none", color: "black", fontWeight: "500"}}href="/">Go to homepage</a></MenuItem>
          <MenuItem><a style={{textDecoration: "none", color: "black", fontWeight: "500"}}href="/blog/contact">Contact us</a></MenuItem>
          <Divider />
          <MenuItem onClick={() => app.auth().signOut()} style={{color: "red", fontWeight: "500"}}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default NavAcc;
