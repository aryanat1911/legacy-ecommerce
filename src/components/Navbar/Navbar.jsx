import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/e-commerce.png";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./style";
import "./Navbar.css";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commer.js"
              height="25px"
              className={classes.image}
            />
            Legacy
          </Typography>
          {/* <div className="nav-category">
            <Link to="/category?type=top-offers">Top Offers</Link>
            <Link to="/category?type=grocery">Grocery</Link>
            <Link to="/category?type=shoes">Mobiles</Link>
            <Link to="/category?type=shoes">Fashion</Link>
            <Link to="/category?type=shoes">Electronics</Link>
          </div> */}
          <div className={classes.grow} />
          {location.pathname === "/cart" ? (
            ""
          ) : (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge
                  overlap="rectangular"
                  badgeContent={totalItems}
                  color="secondary"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
