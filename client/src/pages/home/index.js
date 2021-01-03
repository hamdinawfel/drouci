import React from 'react'
//M-UI
import { makeStyles } from "@material-ui/core/styles";
//COMPONETS
import Hero from './components/Hero';
import Features from './components/Features';
import Main from './components/Main';
import Teacher from './components/Teacher';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor:'#fff',
     

        // overflowX:'hidden'
    }
  }));
export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hero />
            {/* <Features />
            <Main />
            <Teacher /> */}
        </div>
    )
}
