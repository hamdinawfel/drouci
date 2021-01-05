import React, { useEffect } from 'react'
//M-UI
import { makeStyles } from "@material-ui/core/styles";
//Componetnts
import Header from './components/Header'
import Wishlist from './components/Wishlist'
import Courses from './components/Courses'

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
      marginTop:70,
      backgroundColor:'#F3F3F3'
     },
}));
  
function Dashbord (props) {
    const classes = useStyles();
   
    return (
        <div className={classes.root}>
          {props.user.loading?
            <p style={{marginTop:300, textAlign:'center'}}>loading</p>
            :
            <div>
            <Header />
            <Wishlist />
            <Courses />
            </div>}
        </div>   
    )
}
const mapStateToProps = (state) => ({
    user: state.user,
  });

  export default connect(
    mapStateToProps,
    null
  )(Dashbord);