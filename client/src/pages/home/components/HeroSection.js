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
      padding:'120px 100px 0px 100px',
      backgroundColor:'#F2F2F2',
      [theme.breakpoints.down('md')]: {
        padding:'120px 10px 50px 10px',
    }
    },
    heroContainer:{
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
       }
      },
    heroCta:{
      
    padding:'0 20px',
    marginTop:50,
    height:'250px',
    backgroundColor:'#fff',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
      height:'280px',
    padding:'0 10px',
      }

    },
    title:{
      fontSize: '2.1rem',
      fontWeight: 700,
      color:'#3C3B37',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
        }
    },
    subTitle:{
      fontSize: '18px',
      lineHeight: '28px',
      fontWeight: 400,
      color:theme.palette.primary.text,
    },
    drapeau:{
        width:32,
        marginLeft:5,
        verticalAlign:'middle',
        [theme.breakpoints.down('sm')]: {
          marginLeft:10,
          width:30,
      }
    },
    heroImage:{
    //  position:'relative',
    //  top:-200
    marginTop:'-50px',
    [theme.breakpoints.down('sm')]: {
      marginTop:-250,
  },
    [theme.breakpoints.down('xs')]: {
      marginTop:-120,
  }
    },
    image:{
      width:'90%',
      marginLeft:50,
      [theme.breakpoints.down('md')]: {
        width:'90%',
        marginLeft:20,
        marginBottom:20,
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft:0,
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
        [theme.breakpoints.down('xs')]: {
         marginLeft:'20%'
      }
    },
      vedio:{
        color:theme.palette.primary.main,
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '2.625rem',
        userSelect: 'none',
        marginTop:4,
        marginLeft:30,
        [theme.breakpoints.down('md')]: {
          display:'none'
        }
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div  className={classes.root}> 
       <Grid container className={classes.heroContainer}>
         <Grid item md={5} className={classes.heroCta}>
            <h1 className={classes.title}>Révolutionnons l'éducation</h1>
             <p className={classes.subTitle}>Commencez nos cours en ligne de haut qualité.<br />
             Nos cours sont conforme à l'éducation national <img src={drapeau} className={classes.drapeau} alt="Tunisie" /></p>
              <div style={{display:'flex', marginTop:30}}>
                <Link to='/signup'color="inherit" style={{textDecoration:'none'}}>
                  <Button className={classes.ctaBtn}>Rejoignez Nous</Button>
                </Link>
                {/* <p className={classes.vedio}>
                  < PlayCircleFilledIcon fontSize="large" style={{verticalAlign:'middle', marginRight:10}}/>
                    Regardez la védio
                </p> */}
              </div>
         </Grid>
         <Grid item md={7}  className={classes.heroImage}>
            <img src="https://drouci-images.s3.us-east-2.amazonaws.com/hero.png" alt="drouci" className={classes.image}/>
         </Grid>
       </Grid>
    </div>
  );
}

