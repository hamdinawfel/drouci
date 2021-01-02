import React from 'react'
//M-UI
import { makeStyles } from "@material-ui/core/styles"
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
    root: {
        padding:'120px 100px',
        [theme.breakpoints.down('md')]: {
            padding:'20px 20px',
        }
    },
    image:{
      width:'100%'
    },
    titre:{
        color:'#fff',
        fontSize:'2rem',
        width:600,
       
    },
    subTitle:{
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: 400,
        color:theme.palette.primary.text,
        [theme.breakpoints.down('md')]: {
          
        }
    },
    description:{
        padding:'65px 0 0 40px'
       
    }
  }));

export default function Teacher() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item sm={12} md={6}>
               <img src="https://drouci-images.s3.us-east-2.amazonaws.com/teaching.svg" alt='teacher' className={classes.image}/>
            </Grid>
            <Grid item sm={12} md={6} className={classes.description}>
              <h2 className={classes.titre}><span style={{ backgroundColor: '#003668', padding:'5px'}}>Devenir parmi nos enseignants</span></h2>
              <p className={classes.subTitle}>Drouci travaille avec plusieurs enseignants de tous horizons pour proposer des contenus 100% conformes et trés complets.</p>
              <p className={classes.subTitle}>Si vous voulez rejoindre notre équipe d'enseignants envoiyer une lettre de motivation sur ce email.</p>
              <p style={{fontWeight:600, color:'#003668'}}className={classes.subTitle}>Email : contact.drouci@gmail.com</p>
            </Grid>
        </Grid>
      
    )
}
