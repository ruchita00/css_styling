import React from "react";
import { withStyles } from "@material-ui/core";
import home from "../assets/home.png";
import download from "../assets/download.png";
import utilities from "../assets/utilities.png";
import circles from "../assets/circles.png";
import title from "../assets/title.png";

const style = {
  SideMenu: {
    position: "absolute",
    left: "0px",
    top: "0px",
    width: "250px",
    height: "1024px",
    backgroundColor: "#fff",
    border: "2px solid #ECF0F1",
  },
  title: {
    position: "absolute",
    width: "210.99px",
    height: "24px",
    left: "10px",
    top: "15px",
    bottom: "31.25",
  },

  home: {
    position: "absolute",
    left: "27.5%",
    right: "53.75%",
    top: "-43.25%",
    bottom: "31.25%",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    color: "#4B4B4B",
    mixBlendMode: "normal",
    opacity: "0.87",
  },
  Circles: {
    position: "absolute",
    left: "27.5%",
    right: "53.75%",
    top: "-33.25%",
    bottom: "31.25%",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    color: "#4B4B4B",
    mixBlendMode: "normal",
    opacity: "0.87",
  },
  Services: {
    position: "absolute",
    left: "27.5%",
    right: "53.75%",
    top: "-23.25%",
    bottom: "31.25%",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    color: "#4B4B4B",
    mixBlendMode: "normal",
    opacity: "0.87",
  },
  Utilities: {
    position: "absolute",
    left: "27.5%",
    right: "53.75%",
    top: "-13.25%",
    bottom: "31.25%",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    color: "#4B4B4B",
    mixBlendMode: "normal",
    opacity: "0.87",
  },
  img: {
    height: "20px",
    width: "20px",
    margin: "24px 15px 20px -20px",
  },
};

const Sidebar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.SideMenu}>
      <div className={classes.title}>
        <img src={title} className={classes.title} />
      </div>

      <div className={classes.home}>
        <img src={home} className={classes.img} />
        Home
      </div>

      <div className={classes.Circles}>
        <img src={download} className={classes.img} />
        Circles
      </div>
      <div className={classes.Services}>
        <img src={circles} className={classes.img} />
        Services
      </div>
      <div className={classes.Utilities}>
        <img src={utilities} className={classes.img} />
        Utilities
      </div>
    </div>
  );
};

export default withStyles(style)(Sidebar);
