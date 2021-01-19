import React , { useState } from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';
//M-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const COLORS = ['#F5F6F7', '#10AA50'];
const useStyles = makeStyles((theme) => ({
  root: {
    margin:'5px 0',
    // width:'100%',
  },
  image: {
    width: '80%',
    // height:'170px',
    // objectFit: 'cover',
    // marginRight:80,
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
    padding:'0 0 0 0px',
    [theme.breakpoints.down('sm')]: {
      padding:'10px',
   }
  },
  title:{
    marginTop:-10,
    fontWeight:700
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [data, setData] = useState([
    {  value: props.course.sectionsNumber },
    {  value: props.completedSections.length },
  ])

  return (
    <Card className={classes.root}>
      <Grid container className={classes.reverse} justify="center" direction="row" alignItems="center">
          <Grid item md={3} style={{margin:'auto', display:'flex', justifyContent:'center', alignItems:'center'}}>
             <img
                className={classes.image}
                src={props.course.imageUrl}
                alt="course"
              />
          </Grid>
          <Grid item sm={12} md={6} className={classes.description}>
              <Typography component="h5" variant="h6" className={classes.title}>
                 { props.course.title }
              </Typography> 
              <Typography variant="subtitle1" color="textSecondary" style={{fontWeight:600, fontSize:14}}>
               { props.course.category }
              </Typography>
               <Typography className={classes.purshaseOption} color="textSecondary" gutterBottom style={{fontSize:14, marginTop:10}}>
              •  {props.course.sectionsNumber} sections • {props.course.duration}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
               { props.course.description }
              </Typography>
             
          </Grid>
          <Grid item sm={12} md={3}>
            <div>
               <PieChart width={160} height={300} style={{marginTop:-120}}>
              <text x={85} y={200} textAnchor="middle" dominantBaseline="middle" style={{fontSize:15, color:'#000'}}>
              {props.completedSections.length }
              </text>
              <text x={85} y={220} textAnchor="middle" dominantBaseline="middle"style={{fontSize:12, color:'rgba(0,0,0,5)'}}>
              par {props.course.sectionsNumber} paties
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
