import React, { useEffect } from 'react'
import {Link } from "react-router-dom"
//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';
//Redux
import { connect } from 'react-redux';
import { getCoursesByLevel } from '../../catalog/action';

const useStyles = makeStyles(theme => ({
    root: {
        padding:'50px 100px',
        backgroundColor:'#fff',
        marginTop:-20,
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
    card:{
        // margin:'20px 0 0 0',
        '&:hover': {
            backgroundColor:'rgba(0,0,0,0.05)',
            boxShadow: '-3px 3px 15px rgba(91, 137, 158, 0.7)',
           },
           transition:0.2
    }
     }));
 
  function CardItem(props) {
    const classes = useStyles();

    return(
      <Grid item md={3} sm={4} xs={12} style={{padding:10}}>
        <Link to={`/courses/${props.course._id}`}color="inherit" style={{textDecoration:'none'}}>
        <Card className={classes.card}>
          <GridListTile style={{listStyle:'none'}}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="150"
              width="100px"
              image={props.course.imageUrl}
              title="Contemplative Reptile"/>
          </GridListTile>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                {props.course.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.course.description}
            </Typography>
          </CardContent>
         </Card>
        </Link>
      </Grid>
    )
}

function Courses(props) {
    const classes = useStyles();
    useEffect(() => {
        props.getCoursesByLevel(props.user.level);
    }, []);
   
    return (
        <div className={classes.root}>
             <p className={classes.header}>Tout les cours pour {props.user.level}</p>
             <div className={classes.divider}/>
           { 
           !props.courses.loading?
                <Grid container>
                    {props.courses.fitredData.map(course => <CardItem key={course._id} course={course} />)}
                </Grid>
                :
                <p>loading...</p>
        }
        </div>   
    )
}
const mapStateToProps = (state) => ({
    courses: state.courses,
    user: state.user,
  });
  const mapActionsToProps = {
    getCoursesByLevel
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Courses);