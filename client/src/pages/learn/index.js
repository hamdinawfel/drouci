import React , { useState, useEffect }from 'react'
import { useParams } from "react-router-dom";
//M-UI
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

//Componets
import ModuleItem from './components/ModuleItem'
import Header from './components/Header'
//Redux
import { connect } from 'react-redux';
import { getMyCourse, markItemCompleted } from './action';

const useStyles = makeStyles(theme => ({
    root: {
        margin:'100px',
        [theme.breakpoints.down('md')]: {
            margin:'100px 20px', 
          }
    },
   header:{
       width:'100%',
       backgroundColor:'#003668',
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       margin:0
   },
   myButton:{
    backgroundColor:theme.palette.primary.main,
    color:'#fff',
    width:'100%',
    border:`1px solid ${theme.palette.primary.main}`,
    fontSize:'18px',
    padding:'20px 30px',
    cursor:'pointer',
    height:30,
    '&:hover': {
        backgroundColor:'#fff',
       color:theme.palette.primary.main,
    },
    transition:' 0.3s'
   },
   title:{
       fontSize:'2rem',
       padding:'40px',
       fontWeight:700,
       color:'#fff',
       [theme.breakpoints.down('sm')]: {
        padding:'20px 10px',
        fontSize:'1.2rem',
       },
   },
   videoSection:{
       width:'100%',
       display:'block',
       justifyContent:'center',
       alignItems:'center',
       padding:'30px 100px',
       [theme.breakpoints.down('md')]: {
       padding:'10px',
      },

   },
   video:{
       width:650,
    [theme.breakpoints.down('sm')]: {
        width:'100%'
      },
   },
   text:{
    fontSize: '.9rem',
    lineHeight: '1.5rem',
    color: theme.palette.primary.text,
    fontWeight: 600,
    width:650,
    [theme.breakpoints.down('sm')]: {
        width:600
      },
    [theme.breakpoints.down('xs')]: {
        width:'100%'
      },
   },
   objectifTitle:{
       fontWeight:700,
       fontSize:20,
       color:theme.palette.primary.title,

   },
   sideSection:{
        boxShadow: '0px 0px 10px rgba(91, 137, 158, 0.5)',
        // position:'fixed',
        width:'70%',
        height:'100%',
        padding:20,
        marginTop:30,
        [theme.breakpoints.down('sm')]: {
        display:'none'
          },
   },
    pannier:{
        backgroundColor:'#fff',
        color:theme.palette.primary.lightBleu,
        border:`2px solid ${theme.palette.primary.main}`,
        borderRadius:'5px',
        fontSize:'20px',
        fontWeight:'600',
        padding:'8px 20px',
        width:'60%',

        float:'left',
        margin:'10px 20px 0 0px',
        cursor:'pointer',
        height:30,
        '&:hover': {
        color:'#fff',
        backgroundColor:theme.palette.primary.lightBleu,

        },
        transition:' 0.3s'
    },
    image:{
        width:'100%',
        height:'140px'
    },
    cardtitle:{
        fontWeight:600,
        fontSize:18,
        // marginBottom:5
    },
    purshaseText:{
        fontWeight:600,
        margin:'40px 0 10px 0'
    },
    purshaseOption:{
      fontSize:'15px'
    },
    card:{
        display:'inline-block'
    }
  }));


function Learn(props) {
    const classes = useStyles();

    let { wishlistId } = useParams();
    useEffect(() => {
        props.getMyCourse(wishlistId) 
    },[]);
    
    const { title, description, imageUrl, price, duration, sectionsNumber, modules } = props.learn.course
    const modulesMarkup = props.learn.loading === false && modules?
    <div>
        {modules.map(module => <ModuleItem key={module._id}module={module} />)}
    </div>:<p>loading</p>
const titlemarkup = props.learn.loading?
<p>loading</p>
:
<h1 className={classes.title}>{title}</h1>
    return (
        <div className={classes.root}>
            {
                props.learn.loading?
                <div style={{ display:'flex', justifyContent:'center',height:'200px'}}>
                    <CircularProgress />
                </div>
                :
              <React.Fragment>
                <Header course={props.learn.course} completedSections={props.learn.completedSections}/>
                <div >
                <p className={classes.objectifTitle}>Contenu du cours</p>
                    {modulesMarkup}
                </div>  
              </React.Fragment>
            }          
        </div>
    )
}
const mapStateToProps = (state) => ({
    learn: state.learn,
  });
  const mapActionsToProps = {
    getMyCourse,
    markItemCompleted
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Learn);