import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider} from "@material-ui/core";
import React from "react"
import './App.css';
import Header from "./components/Header";
//import PageHeader from "./components/PageHeader";
import SideMenu from "./components/SideMenu"
//import ReceiptIcon from '@material-ui/icons/Receipt';
import Cards from "./components/Cards"
import Popup from "./components/Popup"
import Radio from "./components/Radio"
import DropDown from "./components/DropDown"
import NoDataCards from "./components/NoDataCards"

const theme=createMuiTheme({
  palette:{
    secondary:{
     main:"#f83245",
     light:"#f8324526"
    },
    background:{
      default:'#ECF0F1'
    }
  }
})

const useStyles=makeStyles({
  appMain:{
    paddingLeft:"320px",
    width:"100%"
  }
})

function App() {
  const classes =useStyles();
  return (
    <ThemeProvider theme={theme}>
     <SideMenu />     
     <div className={classes.appMain}> </div>
     <CssBaseline />
     <Header />
     <Cards />
     <Popup />
     <Radio />
     <DropDown />
     <NoDataCards />
    
     {/* <PageHeader title="Page Header" subTitle="Page description" icon={<ReceiptIcon />} /> */}
    </ThemeProvider>

  );
}

export default App;
