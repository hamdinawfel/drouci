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
        marginTop:0,
        justifyContent:'center',
        textAlign:'center',
        [theme.breakpoints.down('md')]: {
            padding:'48p 0',
        }
    },
    title:{
        margin:'auto',
        color:theme.palette.primary.title,
        fontSize:'2rem',
        width:600,
        marginBottom:20,
        fontWeight:700,
        [theme.breakpoints.down('md')]: {
            fontSize:'1.5rem',
            width:'100%',
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
        '&:hover': {
            transform: 'scale(1.05)'
        },
        transition:'0.1s',
        [theme.breakpoints.down('sm')]: {
            marginTop:20,
            width:'90%',
        }
    },
    leftCard:{
        width:300,
        float:'right',
        margin:'0px 20px',
        '&:hover': {
            transform: 'scale(1.05)'
        },
        transition:'0.1s',
        [theme.breakpoints.down('sm')]: {
            marginTop:20,
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
            
            <div style={{ background:'linear-gradient(#f2f2f2, #fff)', width:'100%'}}>
              <div style={{ width:80, height :80, backgroundColor:'#fff', margin:'0 auto', transform:'rotate(45deg)', position:'relative', zIndex:'0', top:-50}}/>
               <h2 className={classes.title}>Faites le bon choix et apprenez sur la platforme drouci.com</h2>
               <p className={classes.subTitle}>Que vous êtes en classes préparatoire MP, PC, PT ou en baccalauréat : mathématiques, SVT, techniques, economie/gestion, lettre...drouci vous permettra d'optimiser votre temps et votre argent avec un contenue personnalisé et de haut qualité</p>
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
                                  Révision mathématique, physique et inforamatique pour les coucours des classes préparatoires
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{display:'block', justifyContent:'center'}}>
                            <Link to='/catalog/1ere-mp' style={{textDecoration:'none'}}>
                                <Button variant="outlined" size="small" color="primary" style={{margin:15}}>
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
                                    Cours et exercices athématiques, physique, inforamatique pour toute les classe de baccalauréat
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{display:'block', justifyContent:'center'}}>
                            <Link to='/catalog/bac-math' style={{textDecoration:'none'}}>
                                <Button variant="outlined" size="small" color="primary" style={{margin:15}}>
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
