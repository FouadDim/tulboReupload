import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, Drawer, ListItemText } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./Menu.css";
import GavelIcon from "@material-ui/icons/Gavel";
import PloicyIcon from "@material-ui/icons/Policy";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import MessageIcon from "@material-ui/icons/Message";
import MoneyIcon from "@material-ui/icons/LocalAtm";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CartIcon from "@material-ui/icons/ShoppingCart";
import AccountIcon from "@mui/icons-material/Login";

function Menu() {
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  return (
    <div>
      <div className="div002">
        <Button className="btn002" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
      </div>
      <div className="div02">
        <Button className="btn02" onClick={toggleDrawer(true)}>
          <MoreVertIcon />
        </Button>
      </div>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        <List className="list">
          <ListItem className="listItem">
            <CartIcon className="iconz" />
            <a href="/">Online Store</a>
          </ListItem>
          <ListItem className="listItem">
            <InfoIcon className="iconz" />
            <a href="/blog/about">About Us</a>
          </ListItem>
          <ListItem className="listItem">
            <MessageIcon className="iconz" />
            <a href="/blog/contact">Contact Us</a>
          </ListItem>
          <ListItem className="listItem">
            <StoreFrontIcon className="iconz" />
            <a href="/blog/become-a-seller">Become a Seller on Tulbo</a>
          </ListItem>
          <Divider />
          <ListItem className="listItem">
            <GavelIcon className="iconz" />
            <a href="/blog/terms">Terms & Conditions</a>
          </ListItem>
          <ListItem className="listItem">
            <PloicyIcon className="iconz" />
            <a href="/blog/privacy">Privacy & Protection Policy</a>
          </ListItem>
          <ListItem className="listItem">
            <MoneyIcon className="iconz" />
            <a href="/blog/refund">Refund & Return Policy</a>
          </ListItem>
          <Divider />
          <ListItem className="listItem">
            <AccountIcon className="iconz" />
            <a href="/signup">Sign up</a>
          </ListItem>
        </List>
        <div className="tulboiconz">
          <svg
            width="64"
            height="50"
            viewBox="0 0 58 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
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
                <stop stop-color="#FF0000" />
                <stop offset="1" stop-color="#CE0000" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Drawer>
    </div>
  );
}

export default Menu;
