import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router'

//M-UI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
//Redux
import { connect } from 'react-redux';
import { loginUser, clearErrors} from './action';


const useStyles = makeStyles((theme) => ({
    root:{
       marginTop:150
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      title: {
       color:theme.palette.primary.title,
       fontWeight:900,
       fontSize:30,
       marginBottom:20
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
     
        
      
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      error:{
          width:'100%',
          padding:'5px 10px',
          borderRadius:5,
          backgroundColor:'rgba(247, 82, 27,0.1)',
          color:'#ea5a20'
      },
      errorText:{
          fontWeight:600
      }
}));

function Login(props) {
  const classes = useStyles();
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('');


  //FIXME: basic auth
const handleLoginUser = (e) => {
    e.preventDefault();
    const userData = {
      username:email,
      password,
    };
    props.loginUser(userData)
  }

  
  useEffect(()=>{  
    setEmail('');
    setPassword('');
    props.clearErrors()
    
  },[]);

  return (
    <React.Fragment>
          {!props.user.loading === true?null:<Redirect to={props.user.path}/>}
        <Container className={classes.root} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.title} component="h1" variant="h5">
        Connexion
        </Typography>
        {props.user.errors ==='Unauthorized'?<div className={classes.error}>
             <p className={classes.errorText}>Votre identifiant ou votre mot de passe est incorrect.</p>
        </div>:null}
        
        <form className={classes.form} onSubmit={handleLoginUser}>
          <TextField
            variant="outlined"
            type='email'
            margin="normal"
            required={true}
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        {/* {props.user.loading?<p>loading</p>:<p>sayar</p>} */}
         {/* <Link> */}
          <Button
              type="submit"
              fullWidth
              disabled={props.user.loading}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SE CONNECTER
            </Button>
         {/* </Link> */}
          
          <Grid item>
              <Link href="/signup" variant="body2">
                {"Vous n'avez pas encore de compte ? Inscrivez-vous gratuitement en 30s."}
              </Link>
         </Grid>
        </form>
      </div>
    </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
    user: state.user,
  });
  const mapActionsToProps = {
    loginUser,
    clearErrors
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Login);