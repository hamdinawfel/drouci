import React from 'react'
import {Link } from "react-router-dom";

//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        // backgroundColor:'#f9f9f9',
        // margin:'50px 100px',
        // padding:'30px 0 50px 0',
        marginBottom:200,
        justifyContent:'center',
        // boxShadow: '-2px 2px 12px rgba(91, 137, 158, 0.5)',
        textAlign:'center',
        [theme.breakpoints.down('md')]: {
            padding:'48p 0',
        }
    },
    title:{
        margin:'80px 0 50px 0',
        textAlign:'center',
        color:theme.palette.primary.title,
        fontSize:'1.8rem',
        marginBottom:20,
        fontWeight:700,
        [theme.breakpoints.down('md')]: {
            fontSize:'1.5rem',
            width:'100%',
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
    subTitle:{
        margin:'auto',
        fontSize: '18px',
        padding:'0 100px',
        lineHeight: '28px',
        fontWeight: 400,
        color:theme.palette.primary.text,
        marginBottom:40,
        marginTop:80,
        [theme.breakpoints.down('md')]: {
            padding:'0 20px',
        },
        [theme.breakpoints.down('xs')]: {
            display:'none'
        }
    },
    card:{
        width:300,
        margin:'0px 20px',
        height:300,

        '&:hover': {
            transform: 'scale(1.05)'
        },
        transition:'0.1s',
        [theme.breakpoints.down('sm')]: {
            marginTop:20,
            width:'90%',
            height:250,

        }
    },
    leftCard:{
        width:300,
        float:'right',
        height:300,
        margin:'0px 20px',
        '&:hover': {
            transform: 'scale(1.05)'
        },
        transition:'0.1s',
        [theme.breakpoints.down('sm')]: {
            marginTop:20,
            height:250,
            width:'90%',
            float:'left',
        }
    },
    cardTitle:{
        margin:'20px',
        
    }
  }));

export default function Main() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            <div>
               <h2 className={classes.title}>
               <span className={classes.borderBottom}> 
               Apprenez efficacement et plus vite
                   </span>
               </h2>
               <p className={classes.subTitle}>Que vous soyez en classes préparatoire MP, PC, PT ou en baccalauréat : mathématiques, SVT, techniques, economie/gestion, lettres...drouci vous permettra d'optimiser votre temps et votre argent avec un contenu personnalisé et de haute qualité</p>
            </div>
           <Grid container className={classes.cardContainer}>
              <Grid item xs={12} md={6}>
                <Link to='/catalog/1ere-mp' style={{textDecoration:'none'}}>
                    <Card className={classes.leftCard} style={{ borderTop:"3px solid #02B3E4"}}>
                        <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2"className={classes.cardTitle}>
                                Préparatoire
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Cours et exercices pour toutes les matières. Le contenu est adapté pour les étudiants en classes préparatoires en Tunisie et conforme à l'éducation nationale.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{display:'block', justifyContent:'center'}}>
                            <Link to='/catalog/1ere-mp' style={{textDecoration:'none'}}>
                                <Button variant="outlined" size="small" color="primary" style={{margin:'0 0 0 0'}}>
                                   Découvrir
                                </Button>
                            </Link>
                        </CardActions>
                     </Card>
                </Link>
                </Grid>
              <Grid item  xs={12} md={6}>
              <Link to='/catalog/bac-math' style={{textDecoration:'none'}}>
                <Card className={classes.card} style={{borderTop:"3px solid  #15c26b"}}>
                        <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2"className={classes.cardTitle}>
                                    Baccalauréat
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Cours et exercices pour toutes les matières. Le contenu est adapté pour les bacheliers en Tunisie et conforme à l'éducation nationale.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{display:'block', justifyContent:'center'}}>
                            <Link to='/catalog/bac-math' style={{textDecoration:'none'}}>
                                <Button variant="outlined" size="small" color="primary" style={{margin:'20px 0 0 0'}}>
                                Découvrir
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                    </Link>
                </Grid>
           </Grid>
        </div>
    )
}
