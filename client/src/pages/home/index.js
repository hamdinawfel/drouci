import React from 'react'
//M-UI
import { makeStyles } from "@material-ui/core/styles";
//COMPONETS
// import Navbar from './components/Navbar';
// import Footer from '../../utils/Footer';
import HeroSection from './components/HeroSection';
import Valeur from './components/Valeur';
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
            <HeroSection />
            <Valeur />
            <Main />
             <Teacher />
        </div>
    )
}
