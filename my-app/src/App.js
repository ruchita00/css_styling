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
import Sidebar from "./components/Sidebar";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import DropdownMenu from "./components/DropdownMenu";
import Popup from "./components/Popup"


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

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <RemoveScrollBar />

      <div className={classes.appMain}> </div>
      <CssBaseline />
      <Header />
      <Main />
      <Sidebar />
      <Popup />
      <DropdownMenu />
    </ThemeProvider>
  );
}

export default App;
