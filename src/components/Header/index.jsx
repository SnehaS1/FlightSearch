import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
// import IconButton from "@material-ui/core/IconButton";
// import "./index.scss";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    height: "55px",
    backgroundColor: "#333",
    textAlign: "center",
    margin: "0 auto"
  },
  appbar: {
    alignItems: "center"
  },
  title: {
    margin: "0 auto"
  }
}));

export default function Header() {
  const { header } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar>
        <span className="header-title">Hi From Desktop Header</span>

        <NavLink to="/book" className="link" activeClassName="active" exact>
          Books List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Book
        </NavLink>
      </Toolbar>
    );
  };

  return (
    <header classname="header-wrapper">
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
