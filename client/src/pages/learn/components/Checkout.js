import React from 'react';
import { Link } from 'react-router-dom'

//M-UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
//Icons
import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ margin: '15px 0'}}>
         Réserver ce cours
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Réserver ce cours
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Ce cours est en cours de construction, il sera disponible dans quelques jours. Réservez le pour bénéficier d’une réduction de 50 %.
          </Typography>
          <Typography gutterBottom>
          Pour réserver ce cours, nous vous invitons à nous contacter sur notre
          </Typography>
             <p style={{fontSize: '18px', fontWeight: 300}}><MailOutlineIcon style={{verticalAlign:'middle', marginRight:10}}/> contact.drouci@gmail.com</p>
             <p style={{fontSize: '18px', fontWeight: 300}}><PhoneAndroidIcon style={{verticalAlign:'middle', marginRight:10}}/> +336 16 595 491</p>
            
             <Link to={{ pathname: "https://www.facebook.com/drouci-%D8%AF%D8%B1%D9%88%D8%B3%D9%8A-100166455403093/?view_public_for=100166455403093" }} target="_blank"  style={{color:'inherit', textDecoration:'none'}}>
             <p style={{fontSize: '18px', fontWeight: 300}}> <FacebookIcon style={{verticalAlign:'middle', marginRight:10}}/>Facebook</p>
           </Link> 
           {/* <Link to={{ pathname: "https://www.facebook.com/drouci-%D8%AF%D8%B1%D9%88%D8%B3%D9%8A-100166455403093/?view_public_for=100166455403093" }} target="_blank"  style={{color:'inherit', textDecoration:'none'}}>
             <p style={{fontSize: '18px', fontWeight: 300}}> <InstagramIcon style={{verticalAlign:'middle', marginRight:10}}/>Instagram</p>
           </Link>  */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
