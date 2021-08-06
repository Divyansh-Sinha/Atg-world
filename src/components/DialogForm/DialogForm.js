import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    background: 'transparent',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(0),
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

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({children}) {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     

      <PhoneView onClick={handleClickOpen}>

      <Icon className="fa fa-pencil " aria-hidden="true"></Icon>   
      

      </PhoneView>


      <Dialog aria-labelledby="customized-dialog-title" open={open}  onClose={handleClose}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          
        </DialogTitle>
        <DialogContent dividers>
            {children}
        </DialogContent>
  
      </Dialog>
    </div>
  );
}




const PhoneView = styled.div`
    display: none;
    position: fixed;
    bottom:20px;
    z-index: 3;

    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18), 0px 0px 2px rgba(0, 0, 0, 0.08);

    svg{
      color: black;
    }

    @media(max-width: 741px){
        display: block;
    }

`;

const Icon = styled.div`
    font-size: 2.4rem;
    margin-top:12px;
    color: white; 

`;