import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { TextareaAutosize } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
    
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  

const Popup = () => {
    const [open, setOpen] = React.useState(false);
    

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
          <div>
        <Button variant="outlined" color="primary" style={{borderRadius:50  }} onClick={handleClickOpen}>
          Add Coverage
        </Button>
        <Dialog  
  fullWidth
  maxWidth="sm" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <strong>Cancellation Date</strong>
          </DialogTitle>
            <Typography gutterBottom>
              Please Select the date which you want your plan to end.
            </Typography>
            <Button variant="outlined" color="primary" style={{width:"200px", height:"40px"}} onClick={handleClickOpen}>
          Add Coverage <ExpandMoreIcon />
        </Button>
        <br/>
            <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Write your reason here" />            
        <DialogActions>
          <Button autoFocus onClick={handleClose}  variant="contained"
color="primary" style={{borderRadius:50,  color: "white"}}>
              Go Back
            </Button>
            <Button autoFocus onClick={handleClose} variant="outlined" color="primary" style={{borderRadius:50  }}>
              Proceed to Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  
    )
}

export default Popup




