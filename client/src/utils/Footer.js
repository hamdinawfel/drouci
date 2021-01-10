import React from 'react';
import { Link } from 'react-router-dom'
//M-UI
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
    <Typography variant="body2" className={classes.copyright}>
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
    fontWeight: 300,
    margin:'5px 0',
    color:'#fff',
    '&:hover': {
     opacity:0.7
  },
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
    marginTop:25,
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
           {/* <img src={logo}  alt={logo} style={{ width : 120, margin:'10px 0 -10px 0'}}/> */}
           <p className={classes.title}>Qui Somme Nous?</p>
          <p style={{fontSize: '18px', fontWeight: 300, color:'#fff'}}>Nous construisons l'avenir de l'apprentissage numérique en Afrique et de Monyen Orient.</p>
          <p style={{fontSize: '18px', fontWeight: 300, color:'#fff'}}>La platforme drouci vise à personnaliser l'éducation national et à mettre en oeuvre des contenus de haute qualité pour les étudiants.</p>
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
           <Link to={{ pathname: "https://www.linkedin.com/company/drouci/" }} target="_blank"  style={{color:'inherit', textDecoration:'none'}}>
             <p className={classes.subTitle}> <LinkedInIcon style={{verticalAlign:'middle', marginRight:10}}/>Lenkedin</p>
           </Link>          
        </Grid>
        <Grid item xs={12} sm={3}>
          <p className={classes.title}>Contactez Nous</p>
             <p style={{fontSize: '18px', fontWeight: 300, color:'#fff'}}><PhoneAndroidIcon style={{verticalAlign:'middle', marginRight:10}}/> +216 36 100 100</p>
             <p style={{fontSize: '18px', fontWeight: 300, color:'#fff'}}><MailOutlineIcon style={{verticalAlign:'middle', marginRight:10}}/> contact.drouci@gmail.com</p>
           
        </Grid>
      </Grid>
      <Divider />
      <Grid container className={classes.footer}>
        <Grid item xs={12} sm={5} className={classes.diplay}>
          <div style={{display:'flex'}}>
            <img src={logo} alt ="logo" style={{ width:50 , height:50 ,userSelect:'none', marginTop:15 }}/>
            <h1 style={{color:'#fff', fontSize:'2rem', margin:'15px 0 0 0', fontWeight:700, userSelect:'none'}}>drouci</h1>
          </div>
{/* 
          <Typography variant="body2" color="#fff" style={{color:'#fff'}}>
             Condition d'utilisation
            </Typography> */}
        </Grid>
        <Grid item xs={12} sm={4} className={classes.diplay} style={{paddingLeft:70}}>
            {/* <Typography variant="body2" color="#fff" style={{color:'#fff'}}>
               Confidentialité
            </Typography> */}
        </Grid>
        <Grid item xs={12} sm={3}>
          <Copyright />
        </Grid>
      </Grid>
      </React.Fragment>
  );
}