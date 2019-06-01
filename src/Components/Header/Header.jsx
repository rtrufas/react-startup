import React from "react";
import { NavLink, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./Header.scss";

function Header(props) {
  return (
    <AppBar position="static" className="header">
      <Toolbar
        style={{
          fontWeight: "bold",
          fontSize: "large"
        }}
      >
        <Typography variant="h6" color="inherit" className="header-title">
          <Link to={props.titleUrl}>{props.title}</Link>
        </Typography>
        <nav className="header-navigation">
          {props.links.map(link => {
            return (
              <NavLink
                key={link.label}
                to={link.url}
                className="nav-link"
                activeClassName="nav-link-active"
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
