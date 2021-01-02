import React from 'react';
//M-UI
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'15px 100px',
    // marginRight:100,
  },
  rec:{
      marginRight:50,
      width:'100%',
      height:150
  },
  text:{
    marginLeft:50
  }
}));

export default function LoadingCard() {
  const classes = useStyles();
 
  return (
    
       <Grid container className={classes.root}>
           <Grid item sm={3} >
               <Skeleton variant="rect" className={classes.rec} />
           </Grid>
           <Grid item sm={6} className={classes.text}>
                <Skeleton   height={20} width={50}/>
                <Skeleton  height={40}/>
                <Skeleton height={30}/>
                <Skeleton height={30}/>
                <Skeleton   height={20} width={50}/>
           </Grid>
       </Grid>
  );
}
