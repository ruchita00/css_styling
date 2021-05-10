import React from 'react'
import { withStyles,AppBar, Toolbar,Grid, InputBase,Badge ,IconButton } from '@material-ui/core'
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';

const style=(theme=>({
    root:{
        backgroundColor:"#ffff",
        border: '2px solid #ECF0F1'
    },
    searchInput:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'0.8rem',
        border:'3px solid #B7BDBF',
        borderRadius: '5px',
        '&.hover':{
            backgroundColor:'#ffff'
        },
        '& .MuiSvgIcon-root':{

           marginRight:theme.spacing(1)

        }
    }

}))

const HeaderMenu=(props)=>{
    const{classes}=props;

    return (
    <AppBar position="static" className={classes.root}>
        <Toolbar>  
        <Grid container alignItems="center">
            <Grid item>
            <InputBase placeholder="Search" className={classes.searchInput} startAdornment={<SearchIcon fontSize="small" />}/>
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
            <IconButton classes={{root:classes}}>
                <Badge  >
                <HelpIcon fontSize="medium" />    
              </Badge>
                </IconButton>
            <IconButton>
                <Badge badgeContent={3} color='secondary' ><NotificationsIcon />
                </Badge> </IconButton>                           
              <IconButton><Badge  >
                <AccountCircleIcon />    
              </Badge></IconButton>
              <IconButton><Badge >
              <ExpandMoreIcon />   
              </Badge></IconButton>            
            </Grid>
        </Grid>
        </Toolbar>
    </AppBar>
    )
}

export default withStyles(style)(HeaderMenu);