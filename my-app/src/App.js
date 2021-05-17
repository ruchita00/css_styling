import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import DropdownMenu from "./components/DropdownMenu";
import Popup from "./components/Popup";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import title from "./assets/title.png";
import home from "./assets/home.png";
import download from "./assets/download.png";
import utilities from "./assets/utilities.png";
import circles from "./assets/circles.png";
import Services from "./components/Services";
import Home from "./components/Home";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#E5E5E5",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: { textDecoration: "none", color: theme.palette.text.primary, },
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
    left: "45.5%",
    right: "53.75%",
    top: "3.25%",
    bottom: "1.25%",
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
    // position:'relative',
    // left: "50px",
    // top: "80px",
    // height: "20px",
    width: "30px",
    
    padding: "5px",
    // margin: "10px 10px 10px 50px",
  },
  listitemtext: {
    // position:'relative',
    // left: "99px",
    // top: "80px",
    padding: "5px",
    // height: "20px",
    width: "20px",
    // color:'4B4B4B'
  },
  linkelements: {
    color:'#4B4B4B',
    left: "50px",
    top: "10px",
    height: "10px",
    width: "10px",
    marginTop: "90px",
    marginBottom:"-50px"
  },
  // appMain: {
  //   paddingLeft: "320px",
  //   width: "100%",
  // },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <RemoveScrollBar />

      <div className={classes.appMain}> </div>
      <CssBaseline />
      <Header />
      <Main />
      {/* <Sidebar /> */}
      <Router>
        <div style={{ display: "flex" }}>
          <Drawer
            style={{ width: "240px" }}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{ paper: classes.drawerPaper }}
          >
            <List>
              <ListItem>
                <img src={title} alt="title-img" className={classes.title} />
                <ListItemText></ListItemText>
              </ListItem>

              <Link to="/home" className={classes.link}>
                <ListItem button className={classes.linkelements}>
                  <img src={home} alt="home-img" className={classes.img} />
                  <ListItemText
                    primary={"Home"}
                    className={classes.listitemtext}
                  />
                </ListItem>
              </Link>
              <Link to="/circles" className={classes.link} >
                <ListItem button className={classes.linkelements}>
                  <img src={circles} alt="circle-img" className={classes.img} />
                  <ListItemText
                    primary={"Circles"}
                    className={classes.listitemtext}
                  />
                </ListItem>
              </Link>
              <Link to="/services" className={classes.link}>
                <ListItem button className={classes.linkelements}>
                  <img
                    src={download}
                    alt="services-img"
                    className={classes.img}
                  />
                  <ListItemText
                    primary={"Services"}
                    className={classes.listitemtext}
                  />
                </ListItem>
              </Link>
              <Link to="/utilities" className={classes.link}>
                <ListItem button className={classes.linkelements}>
                  <img
                    src={utilities}
                    alt="utilities-img"
                    className={classes.img}
                  />
                  <ListItemText
                    primary={"Utilities"}
                    className={classes.listitemtext}
                  />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/circles">
              Circles
            </Route>{" "}
            <Route exact path="/services">
              <Services />
            </Route>{" "}
            <Route exact path="/utilities">
              Utilities
            </Route>
          </Switch>
        </div>
      </Router>

      <Popup />
      <DropdownMenu />
    </ThemeProvider>
  );
}

export default App;
