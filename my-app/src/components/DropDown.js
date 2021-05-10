import {withStyles ,Select, MenuItem } from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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


const DropDown=(props)=> {
    const{classes}=props;

    return (
        <div>
            
            <Select value=""  displayEmpty  className={classes.root} >
            <MenuItem value="" >All Status</MenuItem>
                <MenuItem value={1}>Active</MenuItem>
                 <MenuItem value={2}>Pending</MenuItem>
            <MenuItem value={3}>Past</MenuItem>
            </Select>
        </div>
    )
}

export default withStyles(style)(DropDown);