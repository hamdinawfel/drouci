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
            padding:'48px 20px',
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
        marginBottom:20,
        [theme.breakpoints.down('md')]: {
            padding:'0 50px',
        }
    },
    button:{
        backgroundColor:theme.palette.primary.main,
        border:`1px solid ${theme.palette.primary.main}`,
        color:'#fff',
        padding:'10px 20px',
        margin:'20px',
        fontWeight:600,
        textTransform:'capitalize',
        marginTop:'20px',
        '&:hover': {
            color:theme.palette.primary.main,
        },
    },
    card:{
        width:300,
        margin:'0px 20px',
        '&:hover': {
            transform: 'scale(1.05)'
        },
        transition:'0.1s'
    },
    cardContainer:{
        padding:'0 100px',
        [theme.breakpoints.down('md')]: {
            padding:'100px 10px',
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
            <div style={{ background:'linear-gradient(#f2f2f2, #fff)',padding:48}}>
               <h2 className={classes.title}>Faites le bon choix et apprenez sur la platforme drouci.com</h2>
               <p className={classes.subTitle}>Que vous êtes en classes préparatoire MP, PC, PT ou en baccalauréat : mathématiques, SVT, techniques, economie/gestion, lettre...drouci vous permettra d'optimiser votre temps et votre argent avec un contenue personnalisé et de haut qualité</p>
            </div>
           <Grid container className={classes.cardContainer}>
              <Grid item sm={12} md={6}>
                <Link to='/catalog/1ere-mp' style={{textDecoration:'none'}}>
                    <Card className={classes.card} style={{float:'right', borderTop:"3px solid #02B3E4"}}>
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
                                <Button variant="outlined" size="small" color="primary">
                                   Découvrir
                                </Button>
                            </Link>
                        </CardActions>
                     </Card>
                </Link>
                </Grid>
              <Grid item sm={12} md={6}>
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
                                <Button variant="outlined" size="small" color="primary">
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
