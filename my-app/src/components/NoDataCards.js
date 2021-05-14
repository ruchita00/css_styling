import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withWidth } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  data: {
    btn: {
      [theme.breakpoints.down("md")]: {
        marginTop: 15,
        backgroundColor: "blue",
      },
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "8px",
      alignItems: "center",
      [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      },
    },
  },
});

const propTypes = {};

const NoDataCards = (props) => {
  const {
    classes,
    onClick,
    text,
    btnTitle,
  } = props;

  return (
    <div className={classes.card}>
      <div className={classes.container}>
        <span className={classes.data}>{text}</span>
        <Button
          className={classes.btn}
          color="primary"
          //variant="outlined"
          variant="contained"
          style={{ borderRadius: 50, fontWeight: 100 }}
          title={btnTitle}
          onClick={onClick}
        >
          Button
        </Button>
      </div>
    </div>
  );
};
NoDataCards.propTypes = propTypes;

export default withWidth()(
  withStyles(styles, { withTheme: true })(NoDataCards)
);
