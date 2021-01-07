import React from 'react';
import { Link } from 'react-router-dom'
//M-UI
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
//M-UI ICONS

import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import logo from '../pages/home/assets/logoFooter.png'
function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" className={classes.copyright} color="#fff">
      {'Copyright © '} drouci.com {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{
    marginTop:100,
    width:'100%',
    padding:'20px 100px',
    backgroundColor:'#333',
    [theme.breakpoints.down('md')]: {
      padding:'50px 20px',
    },
  },
  footer:{
    width:'100%',
    padding:'20px 100px',
    backgroundColor:'#333',
    [theme.breakpoints.down('md')]: {
      padding:'50px 20px',
    },
  },
  title:{
    fontSize: '1.8rem',
    fontWeight: 600,
    color:'#fff'
  },
  subTitle:{
    fontSize: '18px',
    fontWeight: 400,
    color:'#fff'
  },
  social:{
    paddingLeft:70,
    [theme.breakpoints.down('sm')]: {
      paddingLeft:20,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft:0,
    },
  },
  diplay:{
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
  },
  copyright:{
    color:'#fff' ,
    // textAlign:'end',
     [theme.breakpoints.down('xs')]: {
    //  float:'left',
     textAlign:'center'
    },
  }
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={5}>
           <img src={logo}  alt={logo} style={{ width : 120, margin:'10px 0 -10px 0'}}/>
          <p className={classes.subTitle}>Nous construisons l'avenir de l'apprentissage numérique en Afrique du Nord et de Monyen-Orient (réqion MENA).</p>
          <p className={classes.subTitle}>La platforme drouci vise à personnaliser l'éducation national et à mettre en oeuvre des contenus de haute qualité pour les étudiants.</p>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.social}>
          <p className={classes.title}>Suivez Nous</p>
          <a href='/' style={{color:'inherit', textDecoration:'none'}}>
             <p className={classes.subTitle}> <FacebookIcon style={{verticalAlign:'middle', marginRight:10}}/>Facebook</p>
           </a>
           <a href='/' style={{color:'inherit', textDecoration:'none'}}>
             <p className={classes.subTitle}> <InstagramIcon style={{verticalAlign:'middle', marginRight:10}}/>Instagram</p>
           </a>
             <a href='/' style={{color:'inherit', textDecoration:'none'}}>
           <p className={classes.subTitle}> <YouTubeIcon style={{verticalAlign:'middle', marginRight:10}}/>Youtube</p>
           </a>
           <a href='/' style={{color:'inherit', textDecoration:'none'}}>
             <p className={classes.subTitle}> <LinkedInIcon style={{verticalAlign:'middle', marginRight:10}}/>Lenkedin</p>
           </a>          
        </Grid>
        <Grid item xs={12} sm={3}>
          <p className={classes.title}>Contactez Nous</p>
          <a href='/' style={{color:'inherit', textDecoration:'none'}}>
             <p className={classes.subTitle}><PhoneAndroidIcon style={{verticalAlign:'middle', marginRight:10}}/> +216 36 100 100</p>
           </a>
           <a href='/' style={{color:'inherit', textDecoration:'none'}}>
             <p className={classes.subTitle}><MailOutlineIcon style={{verticalAlign:'middle', marginRight:10}}/> contact.drouci@gmail.com</p>
           </a>
        </Grid>
      </Grid>
      <Divider />
      <Grid container className={classes.footer}>
        <Grid item xs={0} sm={5} className={classes.diplay}>
          <Typography variant="body2" color="#fff" style={{color:'#fff'}}>
             Condition d'utilisation
            </Typography>
        </Grid>
        <Grid item xs={0} sm={4} className={classes.diplay} style={{paddingLeft:70}}>
            <Typography variant="body2" color="#fff" style={{color:'#fff'}}>
               Confidentialité
            </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Copyright />
        </Grid>
      </Grid>
      </React.Fragment>
  );
}