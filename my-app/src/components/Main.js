import React from "react";
import { withStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Main.css";
import Button from "@material-ui/core/Button";
import Select from "react-select";
import Table from "./Table";
// import Table1 from "./Table1"
import Popupwindow from "./Popupwindow"

const style = (theme) => ({
  root: {
    position: "absolute",
    width: "150px",
    height: "24px",
    left: "280px",
    top: "70px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "11px",
    lineHeight: "24px",
    color: "#4B4B4B",
  },
  sub: {
    position: "absolute",
    width: "131px",
    height: "32px",
    left: "280px",
    top: "110px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "20px",
    lineHeight: "32px",
    display: "flex",
    alignItems: "center",
    color: "#000000",
  },
  button: {
    position: "absolute",
    width: "135px",
    height: "40px",
    left: "87.09%",
    border: "hidden",
    right: "0%",
    top: "220.17%",
    bottom: "29.17%",
    fontFamily: "Inter",
    color: "#ffffff",
    background: "#036FCB",
    borderRadius: "40px",
  },
  container: {
    position: "absolute",
    height: "40px",
    width: "140px",
    left: "280px",
    top: "170px",
    border: "hidden",
    background: "#ffffff",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
    borderRadius: "8px",
  },
  dropdown: {
    position: "absolute",
    width: "112px",
    height: "40px",
    left: "435px",
    top: "170px",
    background: "#ffffff",
    border: "1px solid #036FCB",
    boxSizing: "border-box",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
    borderRadius: "8px",
  },
  dropdowncontainer: {
    position: "absolute",
    width: "160px",
    height: "168px",
    left: "517px",
    top: "300px",
    background: "#ffffff",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
    borderRadius: "8px",
  },
  icon: {
    position: "absolute",
    left: "78.74%",
    right: "56.6%",
    top: "18.17%",
    bottom: "70.27%",
    fontSize: "24px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
  },
  
});

const Main = (props) => {
  const [open, setOpen] = React.useState(false);

  const { classes } = props;
  function clickHandler() {}
 
  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <div>
      <div className={classes.root} style={{ textDecorationLine: "underline" }}>
        Services/Coverage
      </div>
      <div className={classes.sub}>Coverage</div>
      <Popupwindow />
      <button className={classes.container}>
        <div
          style={{
            position: "absolute",
            width: "97px",
            height: "17px",
            left: "15px",
            top: "11px",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "16px",
            display: "flex",
            alignItems: "center",
            color: "#4B4B4B",
          }}
        >
          Past 3 months
        </div>
        <ExpandMoreIcon className={classes.icon} />
      </button>

      <div className={classes.table}>
        <span><Table /></span>
       
      </div>
    </div>
  );
};

export default withStyles(style)(Main);
