import React, { useEffect } from 'react'
//M-UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
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
  },
  empty:{
    textAlign:'center',
    backgroundColor:'#ffe1e1',
    fontSize:20,
    fontWeight:400,
    color:theme.palette.primary.text,
    padding:20,
    borderRadius:'5px',
    marginTop:0,
    marginBottom:-80,
    [theme.breakpoints.down('md')]: {
    marginBottom:-20,
       
   },
    [theme.breakpoints.down('sm')]: {
      padding:10, 
    fontSize:15,
   },
    [theme.breakpoints.down('xs')]: {
      padding:3, 
    fontSize:12,
   },
   icon:{
    marginLeft:10, 
    verticalAlign:'bottom',
    fontSize:'small',
    [theme.breakpoints.down('xs')]: {
      marginLeft:2, 
   },
   }
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
              <React.Fragment>
                {data.length === 0? 
                <div className={classes.empty}>
                   <p>Pour le moment, vous n'avez pas suivi aucun cours <SentimentDissatisfiedIcon className={classes.icon}/></p>
                   <p>Veuillez trouver ci-dessous  tout les cours de votre niveau <ArrowDownwardIcon className={classes.icon} /></p>
                </div>
                :
                <Grid container >
                {data.map(wishlist => <CourseCard key={wishlist._id} wishlist={wishlist}/>)}
               </Grid>
              }
              </React.Fragment>
              :
            <div style={{display:'flex', justifyContent:'center'}}>
              <p>Chargement...</p>
            </div>
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