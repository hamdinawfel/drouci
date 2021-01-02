import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PieChart, Pie, Cell,
} from 'recharts';
//M-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const COLORS = ['#F5F6F7', '#10AA50'];
const useStyles = makeStyles((theme) => ({
  root: {
    margin:'5px 0',
    width:'100%',
  },
  image: {
    width: '80%',
    height:'170px',
    objectFit: 'cover',
    marginRight:80,
    marginTop:-10,
    [theme.breakpoints.down('sm')]: {
     display:'none'
  }
  },
  reverse:{
    display:'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection:'column-reverse',
      justifyContent:'center'
   }
  },
  description:{
    padding:'10px 0 0 30px',
    [theme.breakpoints.down('sm')]: {
      padding:'0',

   }
  }
}));

export default function CourseCard(props) {
  const classes = useStyles();
  const [data, setData] = useState([
    {  value: props.wishlist.sectionsNumber },
    {  value: props.wishlist.completedSections.length },
  ])

  return (
    <Card className={classes.root}>
      <Grid container className={classes.reverse} justify="center" direction="row" alignItems="center">
          <Grid item md={4} style={{padding:'30px 0 0 15px', margin:'auto'}}>
             <img
                className={classes.image}
                src={props.wishlist.imageUrl}
                alt="course"
              />
          </Grid>
          <Grid item sm={12} md={5} className={classes.description}>
              <Typography variant="subtitle1" color="textSecondary">
               { props.wishlist.category }
              </Typography>
              <Typography component="h5" variant="h6" className={classes.title}>
                 { props.wishlist.courseTitle }
              </Typography> 
              <Link to={`/learn/${props.wishlist._id}`}color="inherit" style={{textDecoration:'none'}}>
                <Button variant="outlined" size="small" color="primary" style={{marginTop:'15px'}}>
                  Continuer le cours
                </Button>
               </Link>
          </Grid>
          <Grid item sm={12} md={3}>
            <div>
               <PieChart width={160} height={300} style={{marginTop:-120}}>
              <text x={85} y={200} textAnchor="middle" dominantBaseline="middle" style={{fontSize:15, color:'#000'}}>
              {props.wishlist.completedSections.length }
              </text>
              <text x={85} y={220} textAnchor="middle" dominantBaseline="middle"style={{fontSize:12, color:'rgba(0,0,0,5)'}}>
              par {props.wishlist.sectionsNumber} paties
              </text>
              <Pie
                position='center'
                data={data}
                cx={80}
                cy={200}
                innerRadius={50}
                outerRadius={60}
                fill="#000"
                paddingAngle={0}
                dataKey="value"
              >
                {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
              </Pie>
          </PieChart>
            </div>
          </Grid>
      </Grid>
    </Card>
  );
}
