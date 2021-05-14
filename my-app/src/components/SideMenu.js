import React from "react";
import { withStyles } from "@material-ui/core";

const style = {
  SideMenu: {
    position: "absolute",
    left: "0px",
    top: "0px",
    width: "320px",
    height: "1024px",
    backgroundColor: "#fff",
    border: "2px solid #ECF0F1",
  },
  services: {
    left: "27.5%",
    right: "48.12%",
    top: "31.25%",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
    mixBlendMode: "normal",
    opacity: "0.87",
  },
};

const SideMenu = (props) => {
  const { classes } = props;

  return (
    <div className={classes.SideMenu}>
      <div className={classes.services}>Services</div>
    </div>
  );
};

export default withStyles(style)(SideMenu);
