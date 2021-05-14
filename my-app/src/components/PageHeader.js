import React from "react";
import { makeStyles, Paper, Card, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  PageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "$.MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyle();
  const { title, subTitle, icon } = props;
  return (
    <Paper elevation={3} className={classes}>
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
