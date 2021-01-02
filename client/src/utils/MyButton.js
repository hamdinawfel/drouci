import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({ 
    root:{
        backgroundColor:theme.palette.primary.main,
        color:'#fff',
        border:`1px solid ${theme.palette.primary.main}`,
        fontSize:'18px',
        padding:'20px 30px',
        margin:'15px 5px',
        cursor:'pointer',
        height:30,
        '&:hover': {
            backgroundColor:'#fff',
            color:theme.palette.primary.main,
        },
        transition:' 0.3s'
    } 
  }));
export default function MyButton(props, ...other) {
    const classes = useStyles();
    return (
        <Button className={classes.root} {...other}>{props.text}</Button>
    )
}
