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
      <Create  className="btn" onClick={handleClickOpen}>
      Create Account.<span style={{color: 'blue'}}>It's free!</span>
      </Create>
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


const Create = styled.div`
    
    height: 21px;
    cursor: pointer;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    /* identical to box height */
    color: #2E2E2E;
    text-align: right;

    @media (max-width: 1100px)
    {
      font-size: 14px;
    }

    @media (max-width: 741px)
    {
      display: none;
    }
`;