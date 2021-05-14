import React from "react";
import {
  withStyles,
  AppBar,
  Toolbar,
  Grid,
  Badge,
  IconButton,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import avatar from "../assets/avatar.png";

const style = (theme) => ({
  root: {
    backgroundColor: "#ffff",

    // width:'1120px',
    heigh: "80px",
    // left:'320px',
    // top:'0px',
    boxShow: "0px 0px 0px 0px",
    // backgroundColor:'white'
    // border: '2px solid #ECF0F1',
  },

  img: {
    height: "20px",
    width: "20px",
    margin: "24px 15px 20px -20px",
  },
});

const HeaderMenu = (props) => {
  const { classes } = props;
  return (
    <AppBar
      position="static"
      className={style.root}
      style={{
        boxShow: "0px 0px 0px 0px",
        height: "50px",
        backgroundColor: "white",
      }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item></Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton classes={{ root: classes }}>
              <Badge>
                <HelpIcon
                  style={{
                    color: "black",
                    position: "relative",
                    top: "-5px",
                    left: "50px",
                  }}
                  fontSize="medium"
                />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge color="secondary">
                <NotificationsIcon
                  style={{
                    color: "black",
                    position: "relative",
                    top: "-5px",
                    left: "40px",
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton></IconButton>
            <IconButton>
              <div>
                <img alt='img'
                  src={avatar}
                  style={{
                    position: "relative",
                    top: "-5px",
                    left: "35px",
                    borderRadius: "10",
                  }}
                  className={classes.img}
                />
              </div>
              <ExpandMoreIcon
                style={{
                  color: "black",
                  position: "relative",
                  top: "-5px",
                  left: "30px",
                }}
              />
            </IconButton>
            <IconButton>
              <Badge></Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(style)(HeaderMenu);
