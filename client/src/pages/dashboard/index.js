import React from 'react'
//M-UI
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

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
              <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:200, backgroundColor:'#F3F3F3'}}>
                <CircularProgress />
              </div>
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