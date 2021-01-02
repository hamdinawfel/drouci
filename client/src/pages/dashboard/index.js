import React, { useEffect } from 'react'
//M-UI
import { makeStyles } from "@material-ui/core/styles";
//Componetnts
import Header from './components/Header'
import Wishlist from './components/Wishlist'
import Courses from './components/Courses'

const useStyles = makeStyles(theme => ({
  root: {
      marginTop:70,
      backgroundColor:'#F3F3F3'
     },
}));
  
export default function Dashbord () {
    const classes = useStyles();
   
    return (
        <div className={classes.root}>
           <Header />
           <Wishlist />
           <Courses />
        </div>   
    )
}
