import React from 'react'
//M-UI
import { makeStyles } from "@material-ui/core/styles";
//COMPONETS
import Hero from './components/Hero';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor:'#fff',
        marginTop:50
    }
  }));
export default function Teacher() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hero />
        </div>
    )
}
