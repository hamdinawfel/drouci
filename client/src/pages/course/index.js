import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
//Componets
import ModuleItem from "./components/ModuleItem";

//Redux
import { connect } from "react-redux";
import { getCourse } from "./action";
import { addToWishlist } from "../dashboard/action";
import { redirecteUserToAuth } from "../../feature/auth/action";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 60,
    width: "100%",
  },
  header: {
    width: "100%",
    backgroundColor: "#003668",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  myButton: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    width: "100%",
    border: `1px solid ${theme.palette.primary.main}`,
    fontSize: "18px",
    padding: "20px 30px",
    cursor: "pointer",
    height: 30,
    "&:hover": {
      backgroundColor: "#fff",
      color: theme.palette.primary.main,
    },
    transition: " 0.3s",
  },
  title: {
    fontSize: "2rem",
    padding: "40px",
    fontWeight: 900,
    //  margin:'20px',
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px",
      fontSize: "1.2rem",
    },
  },
  videoSection: {
    width: "100%",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 100px",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
  },
  video: {
    width: 650,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      // margin:20
    },
  },
  text: {
    fontSize: ".9rem",
    lineHeight: "1.5rem",
    color: theme.palette.primary.text,
    fontWeight: 600,
    width: 650,
    [theme.breakpoints.down("sm")]: {
      width: 600,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  objectifTitle: {
    fontWeight: 700,
    fontSize: 20,
    color: theme.palette.primary.title,
  },
  gratuit: {
    fontWeight: 700,
    fontSize: 20,
    color: "#7cb518",
    borderRadius: "5px",
    marginBottom: 50,
    padding: "2px 10px",
  },
  sideSection: {
    boxShadow: "0px 0px 10px rgba(91, 137, 158, 0.5)",
    // position:'fixed',
    width: "70%",
    height: "100%",
    padding: 20,
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "20px",
    },
  },
  pannier: {
    backgroundColor: "#fff",
    color: theme.palette.primary.lightBleu,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "5px",
    fontSize: "20px",
    fontWeight: "600",
    padding: "8px 20px",
    width: "60%",

    float: "left",
    margin: "10px 20px 0 0px",
    cursor: "pointer",
    height: 30,
    "&:hover": {
      color: "#fff",
      backgroundColor: theme.palette.primary.lightBleu,
    },
    transition: " 0.3s",
  },
  image: {
    width: "100%",
    height: "140px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  cardtitle: {
    fontWeight: 600,
    fontSize: 18,
    // marginBottom:5
  },
  purshaseText: {
    fontWeight: 600,
    margin: "40px 0 10px 0",
  },
  purshaseOption: {
    fontSize: "15px",
  },
  card: {
    display: "inline-block",
  },
}));

function Course(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  const [redirectToAuth, setRedirectToAuth] = React.useState(false);

  let { courseId } = useParams();
  useEffect(() => {
    props.getCourse(courseId);
  }, [courseId]);

  const handleAddToWishlist = (courseId) => {
    if (props.user.authenticated === true) {
      const wishlistData = {
        courseId: courseId,
      };
      props.addToWishlist(wishlistData);
      console.log(wishlistData);
      setOpen(true);
    } else {
      props.redirecteUserToAuth(props.history.location.pathname);
      setRedirectToAuth(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setRedirect(true);
  };
  const {
    title,
    description,
    imageUrl,
    price,
    duration,
    sectionsNumber,
    modules,
  } = props.course.data;
  const modulesMarkup =
    props.course.loading === false && modules ? (
      <div>
        <Typography
          className={classes.purshaseOption}
          color='textSecondary'
          gutterBottom>
          • {sectionsNumber} sections • {duration}
        </Typography>
        {modules.map((module) => (
          <ModuleItem key={module._id} module={module} />
        ))}
      </div>
    ) : (
      <p>loading</p>
    );

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1 className={classes.title}>{title}</h1>
      </div>
      <Grid container>
        <Grid item xs={12} md={8} className={classes.videoSection}>
          <video className={classes.video} controls>
            {props.course.loading === false && modules ? (
              <source src={modules[0].sections[0].videoUrl} type='video/mp4' />
            ) : null}
          </video>
          <p className={classes.objectifTitle}>Description</p>
          <p className={classes.text}>{description}</p>
          <p className={classes.objectifTitle}>Contenu du cours</p>
          {modulesMarkup}
        </Grid>
        <Grid item xs={12} md={3} className={classes.sideSection}>
          <img
            src='https://img-0.journaldunet.com/Haks9yBny5Kc_kGFABMA9skRKFs=/1500x/smart/8f426d783689454a978c8fbade5e78ec/ccmcms-jdn/14686251.png'
            alt={title}
            className={classes.image}
          />
          <p className={classes.cardtitle}>{title}</p>
          {price === 0 ? (
            <div style={{ marginBottom: 20 }}>
              <span className={classes.gratuit}>Gratuit</span>
            </div>
          ) : (
            <p className={classes.objectifTitle}>{price} DT</p>
          )}
          <Button
            className={classes.myButton}
            onClick={() => handleAddToWishlist(props.course.data._id)}>
            Ajoutez ce cours
          </Button>
          <p className={classes.purshaseText}>Ce cours comprend :</p>
          <Typography
            className={classes.purshaseOption}
            color='textSecondary'
            gutterBottom>
            • {duration} vidéos
          </Typography>
          <Typography
            className={classes.purshaseOption}
            color='textSecondary'
            gutterBottom>
            • {sectionsNumber} sectionsss
          </Typography>
          <Typography
            className={classes.purshaseOption}
            color='textSecondary'
            gutterBottom>
            • Accès illimité
          </Typography>
        </Grid>
      </Grid>
      {props.wishlist.isExist === false ? (
        <Snackbar open={open} onClose={handleClose}>
          <Alert onClose={handleClose} severity='success'>
            Cours est ajouté avec success!
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar open={open} onClose={handleClose}>
          <Alert onClose={handleClose} severity='warning'>
            Vous êtes abonné pour ce cour
          </Alert>
        </Snackbar>
      )}
      {redirect === false ? null : <Redirect to='/dashboard' />}
      {redirectToAuth === false ? null : <Redirect to='/login' />}
    </div>
  );
}
const mapStateToProps = (state) => ({
  course: state.course,
  wishlist: state.wishlist,
  user: state.user,
});
const mapActionsToProps = {
  getCourse,
  addToWishlist,
  redirecteUserToAuth,
};
export default connect(mapStateToProps, mapActionsToProps)(Course);
