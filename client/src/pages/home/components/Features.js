import React from 'react'
//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        position:'relative'
    },
    cardContainer:{
        display:'flex',
        // margin:'35px auto',
        justifyContent:'center',

    },
    headerTitle:{
        margin:'80px 0 30px 0',
        textAlign:'center',
        color:theme.palette.primary.title,
        fontSize:'1.8rem',
        fontWeight:700,
        [theme.breakpoints.down('md')]: {
            fontSize:'1.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            margin:'50px 0 0 0',
            fontSize:'1.3rem',
        }
    },
    borderBottom:{
        borderBottom:'5px solid #017a9b', 
        paddingBottom:10,
        [theme.breakpoints.down('sm')]: {
            borderBottom:'0px solid #017a9b', 
           paddingBottom:0,
         }
    },
    card:{
        // boxShadow: '0px 0px 10px rgba(91, 137, 158, 0.5)',
        // border:`1px solid ${theme.palette.primary.main}`,
        borderRadius:'5px',
        padding:'20px',
        margin:'0 20px',
        [theme.breakpoints.down('xs')]: {
            margin:'0px 20px',
         }
    },
    icon:{
      userSelect:'none',
        fontSize:'50px',
        display:'block',
        margin:'0 auto',
        textAlign:'center'
    },
    title:{
       textAlign:'center',
       marginBottom:50,
       fontWeight:700,
       fontSize: '1.5rem',
       color:theme.palette.primary.main,
       [theme.breakpoints.down('sm')]: {
        marginBottom:20,
     }
    },
    text:{
       textAlign:'center',
       fontWeight:400,
       fontSize: '1rem',
       lineHeight: '28px',
       color:theme.palette.primary.text
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
  }));
  
export default function Features() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
               <h2 className={classes.headerTitle}>
                   <span className={classes.borderBottom}> 
                   Une méthodologie innovante et 100% flexible
                   </span>
               </h2>

            <Grid container className={classes.cardContainer}>
              <Grid item sm={3} className={classes.card} >
                  <h3 className={classes.title}>Qualité</h3>
                  <img src="https://drouci-images.s3.us-east-2.amazonaws.com/education.svg" alt="seo word" style={{width:150}} className={classes.icon} />
                  <p className={classes.text}>Nos cours sont conçus avec une méthodologie personnalisé et flexible. 
Progressez à votre rythme avec les meilleurs enseignants de Tunisie</p>
              </Grid>
              <Grid item sm={3} className={classes.card} >
              <h3 className={classes.title}>Disponibilité</h3>
              <img src="https://drouci-images.s3.us-east-2.amazonaws.com/learning.svg" alt="seo word" style={{width:150}} className={classes.icon} />
                  <p className={classes.text}>Un accés à tous le contenus grace à notre site : 24h/24h et 7j/7j
Offrez-vous toutes les chances de réussir avec un accompagnement adapté à chaque élève et étudiant.</p>
              </Grid>
              <Grid item sm={3} className={classes.card}>
              <h3 className={classes.title}> Conformité</h3>
              <img src="https://drouci-images.s3.us-east-2.amazonaws.com/message.svg" alt="seo word" style={{width:200}} className={classes.icon} />
                  <p className={classes.text}>Suivez les cours confortablement depuis votre canapé. Nos cours sont 100% conformes et adaptés à l'éducation nationale.</p>
              </Grid>
            </Grid>
        </div>
        
    )
}
