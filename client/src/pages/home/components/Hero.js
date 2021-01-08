import React from 'react';
import { Link } from 'react-router-dom'
//M-UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//images
import drapeau from '../assets/drapeau.png'

const useStyles = makeStyles((theme) => ({
    root:{
      padding:'120px 100px 45px 100px',
      margin:0,
      width:'100%',
      userSelect:'none',
      backgroundColor:'#D7EEF7',
      display:'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('md')]: {
        padding:'120px 10px 45px 10px',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      padding:'100px 10px 45px 10px',
     }
    },
    heroCta:{
    padding:'0 20px',
    marginTop:50,
    minWidth:360,
    maxWidth:480,
    backgroundColor:'#fff',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
      margin:'0 auto',
      padding:'0 10px',
      },
    [theme.breakpoints.down('xs')]: {
      minWidth:340,
      },
    },
    title:{
      fontSize: '2rem',
      fontWeight: 700,
      color:'#3C3B37',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.8rem',
        },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
        }
    },
    subTitle:{
      fontSize: '18px',
      lineHeight: '28px',
      fontWeight: 400,
      color:theme.palette.primary.text,
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
        }
    },
    drapeau:{
        width:32,
        marginLeft:5,
        verticalAlign:'middle',
        [theme.breakpoints.down('xs')]: {
          marginLeft:2,
          width:20,
      }
    },
    image:{
      [theme.breakpoints.down('sm')]: {
        marginLeft:-80
    },
      [theme.breakpoints.down('xs')]: {
        width:'300px',
        marginBottom:0,
        marginLeft:-80
    }
  
    },
      ctaBtn:{
        backgroundColor:theme.palette.primary.main,
        boxShadow:' 8px 10px 20px 0 rgba(46,61,73,.15)',
        width: '13.75rem',
        verticalAlign: 'middle',
        height: '3rem',
        padding: '0 .5rem',
        textTransform: 'capitalize',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '2.625rem',
        letterSpacing: '.125rem',
        userSelect: 'none',
        cursor: 'pointer',
        borderRadius: '.25rem',
        appearance: 'none',
        textAlign: 'center',
        color:'#fff',
        
        '&:hover': {
            backgroundColor:'#016682',
            boxShadow:' 5px 5px 5px 0 rgba(46,61,73,.15)',
        },
        transition:' 0.1s',
    },
    centerBtn:{
      [theme.breakpoints.down('sm')]: {
        margin:'0 auto',
        marginBottom:20
    }
    }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6} className={classes.heroCta}>
        <h1 className={classes.title}>Révolutionnons l'éducation</h1>
        <p className={classes.subTitle}>Commencez nos cours en ligne de haut qualité.<br />
          Nos cours sont conformes à l'éducation nationale <img src={drapeau} className={classes.drapeau} alt="Tunisie" /></p>
        <div style={{display:'flex', marginTop:30}}>
          <div className={classes.centerBtn}>
            <Link to='/signup'color="inherit" style={{textDecoration:'none'}}>
              <Button className={classes.ctaBtn}>Rejoignez Nous</Button>
            </Link>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6} style={{height:300,  display:'flex', justifyContent:'center', alignItems:'center'}}> 
          <img src="https://drouci-images.s3.us-east-2.amazonaws.com/hero.png" alt="drouci" className={classes.image}/>
      </Grid>
    </Grid>
  );
}

