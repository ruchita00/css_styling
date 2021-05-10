import React from 'react'
import {withStyles} from "@material-ui/core"

const style=({
    SideMenu:{
        display: 'flex',
    flexDirection:'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#fff' ,
    border: '2px solid #ECF0F1'
  
    }
})


const SideMenu=(props)=> {
   const{classes}=props;

    return (
        <div className={classes.SideMenu}>
            
        </div>
    )
}

export default withStyles(style)(SideMenu);