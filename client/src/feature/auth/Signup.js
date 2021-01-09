import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router'

//M-UI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
//Redux
import { connect } from 'react-redux';
import { signupUser, clearErrors} from './action';

const useStyles = makeStyles((theme) => ({
  root:{
marginTop:100
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
},
formControl: {
  marginTop: 15,
  width: '100%',
}
}));

function Signup(props) {
  const classes = useStyles();
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('');
  const [ name, setName ] = useState('');
  const [level, setLevel] = React.useState('');

const handleSignupUser = (e) => {
    e.preventDefault();
    const userData = {
      username :email ,
      password,
      firstname: name.split(' ')[0],
      lastname: name.split(' ')[1],
      level
    };
    props.signupUser(userData)
  }
  
  useEffect(()=>{  
    setEmail('');
    setPassword('');
    setName('');
    setLevel('');
    props.clearErrors()
    
  },[]);


  return (
    <React.Fragment>
          {!props.user.loading === true?null:<Redirect to={props.user.path}/>}
        <Container className={classes.root} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Typography className={classes.title} component="h1" variant="h5">
            Bienvenue en drouci
            </Typography>
            {!props.user.errors.err?null:<div className={classes.error}>
             <p className={classes.errorText}>Cette adresse email est déjà utilisée.</p>
        </div>}
            <form className={classes.form} onSubmit={handleSignupUser}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nom et Prénom"
                name="name"
                autoFocus
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
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
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
           <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Sélectionnez votre niveau</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                required
                value={level}
                onChange={(e)=>setLevel(e.target.value)}
                label="Sélectionnez votre niveau"
              >
                {/* <MenuItem value="bacMath"></MenuItem> */}
                <MenuItem value="2 éme prépa MP">2 éme prépa MP</MenuItem>
                <MenuItem value="2 éme prépa PC">2 éme prépa PC</MenuItem>
                <MenuItem value="2 éme prépa PT"> 2 éme prépa PT</MenuItem>
                <MenuItem value="1 ére prépa MP"> 1 ére prépa MP</MenuItem>
                <MenuItem value="1 ére prépa PC">1 ére prépa PC</MenuItem>
                <MenuItem value="1 ére prépa PT">1 ére prépa PT</MenuItem>
                <MenuItem value="Bac Mathématique"> Bac Mathématique</MenuItem>
                <MenuItem value="Bac Science">Bac Science</MenuItem>
                <MenuItem value="Bac Informatique">Bac Informatique</MenuItem>
                <MenuItem value="Bac Economie & Gestion ">Bac Economie & Gestion </MenuItem>
                <MenuItem value="Bac Lettre">Bac Lettre </MenuItem>
              </Select>
          </FormControl>
            <Button
                type="submit"
                fullWidth
                disabled={props.user.loading}
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                S'INSCRIRE
            </Button>
            <Grid item>
                <Link href="/login" variant="body2">
                    {"Vous avez déjà un compte ? Connectez-vous"}
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
    signupUser,
    clearErrors
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Signup);