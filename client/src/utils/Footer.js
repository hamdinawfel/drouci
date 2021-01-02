import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{marginBottom:20}}>
      {'Copyright © '} drouci.com {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    marginTop:50,
  },
  social:{
    margin:'20px',
    display:'flex',
    justifyContent:'center'
  }
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Divider />
        <div className={classes.social}>
           <YouTubeIcon style={{fontSize:30, marginRight:10, color:'#FF0000'}}/>
           <FacebookIcon style={{fontSize:30, marginRight:10, color:'#1877F2'}}/>
           <InstagramIcon style={{fontSize:30, marginRight:10, color:'#f940f9'}}/>
        </div>
        <Box  >
          <Copyright />
        </Box>
      </div>
  );
}