import React , { useState } from 'react';
import { Link } from 'react-router-dom';

//M-UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import SchoolIcon from '@material-ui/icons/School';
import EditIcon from '@material-ui/icons/Edit';
//Redux
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'0',
    padding:'50px 100px',
    backgroundColor:'#D7EEF7',
    width:'100%',
    [theme.breakpoints.down('md')]: {
    padding:'50px 20px', 
  }
  },
  avatar:{
    width:80,
    height:80,
    fontSize:25,
    fontWeight:600,
    backgroundColor:'#003668',
    color:'#fff',
    textTransform:'uppercase',
    border:'2px solid #003668',
    [theme.breakpoints.down('xs')]: {
        width:30,
        height:30,
        fontSize:20,
       },
  },
  name:{
    padding:0,
    margin:0,
    fontSize:28,
    fontWeight:700,
    color:'#003668',
    [theme.breakpoints.down('xs')]: {
        fontSize:24,
        fontWeight:700,
       },
  },
  level:{
    padding:0,
    marginTop:10,
    fontSize:18,
    fontWeight:600,
    color:'#003668',
    opacity:0.99,
    [theme.breakpoints.down('xs')]: {
      marginLeft:-50
     },
    
  },
  updateChip:{
    display:'flex',
    [theme.breakpoints.down('xs')]: {
       display:'none'
      },
    
  },
  updateIcon:{
    display:'none',
    marginTop :10,
    marginLeft:10,
    [theme.breakpoints.down('xs')]: {
        display:'flex',
        marginRight:10,
      },
   
  }
}));

function Header(props) {
  const classes = useStyles();

  return (
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          {!props.user.loading?<Avatar variant='rounded' className={classes.avatar}>{props.user.credentials.firstname[0]}{props.user.credentials.lastname[0]}</Avatar>:null}
        </Grid>
        <Grid item xs={10}>
           <p className={classes.name}>Bienvenu <span style={{textTransform:'capitalize'}}>{props.user.credentials.firstname} {props.user.credentials.lastname}</span></p>
            <div style={{display:'flex'}}>
                <p className={classes.level}> <SchoolIcon style={{color:"#003668", marginRight:10, verticalAlign:'middle'}}/>{props.user.credentials.level}</p>
                <Chip
                   className={classes.updateChip}
                   style={{margin:'10px 0 0 10px'}}
                    variant="outlined"
                    size="small"
                    icon={<EditIcon />}
                    label="Modifier"
                    clickable
                    color="primary"
                    // onDelete={handleDelete}
                    // deleteIcon={<DoneIcon />}
                />
                <EditIcon color="primary" fontSize='small' className={classes.updateIcon} />
            </div>
        </Grid>
      </Grid>
  
  );
}
const mapStateToProps = (state) => ({
    user: state.user,
  });

  export default connect(
    mapStateToProps,
    null
  )(Header);