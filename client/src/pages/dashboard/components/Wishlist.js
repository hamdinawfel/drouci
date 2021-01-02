import React, { useEffect } from 'react'
//M-UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//Components
import CourseCard from './CourseCard'
//Redux
import { connect } from 'react-redux';
import { getWishlist } from '../action';

const useStyles = makeStyles((theme) => ({
  root: {
    padding:'50px 100px 100px 100px',
    boxShadow: '0px 0px 12px rgba(91, 137, 158, 0.5)',
    [theme.breakpoints.down('md')]: {
       padding:'50px 20px', 
    }
  },
  header:{
    marginBottom:15,
    fontSize:28,
    fontWeight:700,
    color:'#003668',
  },
  divider:{
      width:80,
      height:7,
      borderRadius:'3px',
      backgroundColor:'#003668',
      marginBottom:30
  }
}));

function Wishlist(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getWishlist()
  }, []);
  const { loading, data } = props.wishlist

  return (
    <div className={classes.root}>
         <p className={classes.header}>Cours suivis</p>
        <div className={classes.divider}/>
          {
            !loading?
              <Grid container >
                {data.map(wishlist => <CourseCard key={wishlist._id} wishlist={wishlist}/>)}
              </Grid>
              :
            <p>loading...</p>
          }
    </div>
  
  );
}
const mapStateToProps = (state) => ({
  wishlist: state.wishlist
  });
  const mapActionsToProps = {
    getWishlist
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Wishlist);