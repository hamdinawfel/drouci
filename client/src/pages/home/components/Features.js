import React from 'react'
//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        // marginTop:-100, 
        backgroundColor:'#fff',
        position:'relative'
    },
    cardContainer:{
        display:'flex',
        margin:'50px auto',
        justifyContent:'center'
    },
    card:{
        // boxShadow: '0px 0px 10px rgba(91, 137, 158, 0.5)',
        // border:`1px solid ${theme.palette.primary.main}`,
        borderRadius:'5px',
        padding:'20px',
        margin:'0 20px',
        [theme.breakpoints.down('xs')]: {
            margin:'20px 20px',
         }
    },
    icon:{
        fontSize:'50px',
        display:'block',
        margin:'0 auto',
        textAlign:'center'
    },
    title:{
       textAlign:'center',
       marginTop:30,
       fontWeight:700,
       fontSize: '1.5rem',
       color:theme.palette.primary.main
    },
    text:{
       textAlign:'center',
       fontWeight:400,
       fontSize: '1rem',
       lineHeight: '28px',
       color:theme.palette.primary.text
    }
  }));
  
export default function Features() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.cardContainer}>
              <Grid item sm={3} className={classes.card} >
                  <img src="https://drouci-images.s3.us-east-2.amazonaws.com/education.svg" alt="seo word" style={{width:200}} className={classes.icon} />
                  <h3 className={classes.title}>Qualité</h3>
                  <p className={classes.text}>Nos cours sont conçus avec des enseignants de haut niveau</p>
              </Grid>
              <Grid item sm={3} className={classes.card} >
              <img src="https://drouci-images.s3.us-east-2.amazonaws.com/learning.svg" alt="seo word" style={{width:200}} className={classes.icon} />
                  <h3 className={classes.title}>Disponibilité</h3>
                  <p className={classes.text}>Un accès à tous le contenus grâce à notre site internet : 24h/24h et 7j/7j.</p>
              </Grid>
              <Grid item sm={3} className={classes.card}>
              <img src="https://drouci-images.s3.us-east-2.amazonaws.com/message.svg" alt="seo word" style={{width:250}} className={classes.icon} />
                  <h3 className={classes.title}> Conformité</h3>
                  <p className={classes.text}>Le contenu le plus complet pour l'éducation national.</p>
              </Grid>
            </Grid>
        </div>
        
    )
}
