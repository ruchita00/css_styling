import React from "react"
import {withStyles } from '@material-ui/core'


const style=(theme=>({
    root:{
        position: 'absolute',
width: '112px',
height: '40px',
left: '517px',
top: '256px',

background: '#FFFFFF',
border:' 1px solid #036FCB',
boxSizing: 'border-box',
boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
borderRadius: '8px',
    }
}))

const Dropdown=(props)=>{
    const {classes}=props;
   return(
       <div>
       <div>
 
           <select className={classes.root}>       
              <option value="all status">All Status</option>
               <option value="active">Active</option>
               <option value="pending">Pending</option>
               <option value="past">Past</option>

           </select>
        
       </div>
       </div>
   )
}
export default withStyles(style)(Dropdown);