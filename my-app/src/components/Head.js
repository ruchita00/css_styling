import React from "react";
import { withStyles, AppBar, Toolbar } from "@material-ui/core";

const style = (theme) => ({
  header: {
    position: "static",
    width: "1100px",
    // heigh:'90px',
    left: "270px",
    top: "0px",
    border: "#FFFFFF",
    backgroundColor: "#ffff",
  },
});

const Head = (props) => {
  const { classes } = props;
  return <div className={classes.header}>hi</div>;
};

export default withStyles(style)(Head);
