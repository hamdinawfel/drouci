import React from "react";
import { Link } from "react-router-dom";
//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "15px 100px 15px 100px",
    padding: 10,
    // backgroundColor:'#F0F2F5'
    "&:hover": {
      boxShadow: "-3px 3px 15px rgba(91, 137, 158, 0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px 50px 10px",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
    marginRight: 50,
  },
  title: {
    color: "rgba(0, 0, 0, 0.92)",
    fontSize: "1.2rem",
    fontWeight: 700,
    lineHeight: "1.5rem",
    marginTop: 10,
  },
  description: {
    fontSize: ".875rem",
    lineHeight: "1.5rem",
    color: "rgba(0,0,0,.90)",
    fontWeight: 600,
    marginTop: 10,
  },
  feature: {
    fontSize: 14,
    margin: "10px 30px 0 0",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 3px 0 0",
    },
  },
  bottom: {
    display: "flex",
  },
}));

export default function CourseCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link
        to={`/courses/${props.item._id}`}
        color='inherit'
        style={{ textDecoration: "none" }}>
        <Grid container>
          <Grid item sm={4}>
            <img
              className={classes.cover}
              src='https://img-0.journaldunet.com/Haks9yBny5Kc_kGFABMA9skRKFs=/1500x/smart/8f426d783689454a978c8fbade5e78ec/ccmcms-jdn/14686251.png'
              alt='course'
            />
          </Grid>
          <Grid item sm={8}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant='subtitle1' color='textSecondary'>
                  {props.item.category}
                </Typography>
                <Typography
                  component='h5'
                  variant='h6'
                  className={classes.title}>
                  {props.item.title}
                </Typography>
                <Typography className={classes.description}>
                  {props.item.description}
                </Typography>
                <div className={classes.bottom}>
                  <Typography
                    className={classes.feature}
                    color='textSecondary'
                    gutterBottom>
                    • {props.item.sectionsNumber} Sections
                  </Typography>
                  <Typography
                    className={classes.feature}
                    color='textSecondary'
                    gutterBottom>
                    • {props.item.duration} vidéos
                  </Typography>
                </div>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </Link>
    </Card>
  );
}
