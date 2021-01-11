  import React , {Fragment }from 'react'
  import {Link } from "react-router-dom";
  //M-UI
  import Grid from '@material-ui/core/Grid';
  import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
  import Tooltip from '@material-ui/core/Tooltip';
  import Avatar from '@material-ui/core/Avatar';
  import List from '@material-ui/core/List';
  import Drawer from '@material-ui/core/Drawer';
  import Typography from '@material-ui/core/Typography';
  import Divider from '@material-ui/core/Divider';
  import ListItem from '@material-ui/core/ListItem';
  import ListItemText from '@material-ui/core/ListItemText';
  // import Collapse from '@material-ui/core/Collapse';
  // import ExpandLess from '@material-ui/icons/ExpandLess';
  // import ExpandMore from '@material-ui/icons/ExpandMore';
  import Button from '@material-ui/core/Button';
  import ListItemIcon from '@material-ui/core/ListItemIcon';
  import CircularProgress from '@material-ui/core/CircularProgress';

  //M-UI icon
  import MenuIcon from '@material-ui/icons/Menu';
  import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
  import HomeIcon from '@material-ui/icons/Home';
  import SchoolIcon from '@material-ui/icons/School';
  import DashboardIcon from '@material-ui/icons/Dashboard';
  import LockOpenIcon from '@material-ui/icons/LockOpen';
  import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
  import LockIcon from '@material-ui/icons/Lock';
   //logo
   import logo from '../pages/home/assets/logo.png'
   import logoPhone from '../pages/home/assets/logoPhone.png'
  //Redux
  import { connect } from 'react-redux';
  import { logoutUser } from '../feature/auth/action'
 
  const mapStateToProps = (state) => ({
    user: state.user,
  });
  const mapActionsToProps = {
    logoutUser,
  }

    function NestedList(props) {
      const classes = useStyles();

      // const [open, setOpen] = React.useState(true);
      // const [openClasse, setOpenClasse] = React.useState(true);
    // const handleClick = () => {
    //   setOpen(!open);
    // };
    // const handleOpenClasse = () => {
    //   setOpenClasse(!openClasse);
    // };
    
    const handleLogout = () => {
      props.logoutUser()
      console.log(props)
    }
      return (
        <List className={classes.list}> 
          { !props.authenticated?
          <Link to='/'  style={{textDecoration:'none', color:"inherit"}}>
          <ListItem button onClick={props.toggleDrawer} >
              <ListItemIcon>
                <HomeIcon style={{color:'#fff'}}/>
              </ListItemIcon>
              <ListItemText primary="Accueil" className={classes.listItemText} />
            </ListItem>
          </Link>
          :
          <Link to='/dashboard'  style={{textDecoration:'none', color:"inherit"}}>
          <ListItem button onClick={props.toggleDrawer} >
              <ListItemIcon>
                <DashboardIcon style={{color:'#fff'}}/>
              </ListItemIcon>
              <ListItemText primary="Tableau de bord" className={classes.listItemText} />
            </ListItem>
          </Link> }
          <Link to='/teacher'  style={{textDecoration:'none', color:"inherit"}}>
          <ListItem button onClick={props.toggleDrawer} >
              <ListItemIcon>
                <WorkOutlineIcon style={{color:'#fff'}}/>
              </ListItemIcon>
              <ListItemText primary="Devenir Enseignant" className={classes.listItemText} />
            </ListItem>
          </Link>
          <Link to='/catalog/1ere-mp'  style={{textDecoration:'none', color:"inherit"}}>
            <ListItem button onClick={props.toggleDrawer}>
                <ListItemIcon>
                  <SchoolIcon style={{color:'#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Nos Classes" />
                  {/* {openClasse ? <ExpandLess /> : <ExpandMore />} */}
              </ListItem>
            </Link>
            {/* <Collapse in={openClasse} timeout="auto" unmountOnExit>
            <Link to='/catalog/1ere-mp'  style={{textDecoration:'none', color:"inherit"}}>
              <List component="div" disablePadding  onClick={props.toggleDrawer}>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Préparatoire" style={{marginLeft:60}}/>
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Baccalauréat" style={{marginLeft:60}}/>
                </ListItem>
              </List>
              </Link>
            </Collapse> */}
            { props.authenticated?
              <Link to='/'style={{textDecoration:'none',color:"inherit"}} onClick={handleLogout}>
                <ListItem onClick={props.toggleDrawer}>
                    <ListItemIcon>
                      <LockIcon style={{color:'#fff'}}/>
                    </ListItemIcon>
                    <ListItem button>
                      <ListItemText primary="Déconnecter" />
                    </ListItem>
                </ListItem>
              </Link>
             :
             <React.Fragment>
                <Link to='/login'style={{textDecoration:'none',color:"inherit"}}>
                  <ListItem onClick={props.toggleDrawer}>
                      <ListItemIcon>
                        <LockOpenIcon style={{color:'#fff'}}/>
                      </ListItemIcon>
                      <ListItem button>
                        <ListItemText primary="Se connecter" />
                      </ListItem>
                  </ListItem>
                </Link>
                <Link to='/signup'color="inherit"style={{textDecoration:'none'}}>
                  <div style={{display:'block', justifyContent:'center'}} onClick={props.toggleDrawer}>
                    <p className={classes.signupMobileNavItem}>S'inscrire</p>
                  </div>
                </Link>
             </React.Fragment>}
            </List>
      )
    }
    
  

    function MobileDrawer(props) {
    return (
        <React.Fragment>
          <Drawer
                onClose={props.toggleDrawer}
                anchor='left'
                open={props.open}
              >
                <div style={{display:'flex', justifyContent:'center', backgroundColor:"#2E3D49"}}>
                  <img src={logoPhone} alt="logo" style={{ width : 50, height:50, marginTop:12}} />
                  <h1 style={{ backgroundColor:"#2E3D49",margin:'0 0 0 -15px',padding:15,color:'#fff'}}>drouci</h1>
                </div>
                <Divider />
                <NestedList close={props.handleClose} toggleDrawer={props.toggleDrawer} authenticated={props.authenticated} logoutUser={props.logoutUser} />
              </Drawer>
          </React.Fragment>
    );
  }
  const HoverMenu = withStyles((theme) => ({
      tooltip: {
        backgroundColor: '#FFF',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        height:50,
        padding:15,
        marginTop:-5,
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 500,
        fontSize: theme.typography.pxToRem(12),
      },
    }))(Tooltip);

  const HoverProfileCard = withStyles((theme) => ({
      tooltip: {
        backgroundColor: '#fff',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        height:'220px',
        padding:15,
        marginTop:20,
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 600,
        fontSize: theme.typography.pxToRem(12),
      },
    }))(Tooltip);

  function Navbar(props) {
      const classes = useStyles();
      const [open, setOpen] = React.useState(false)
      const toggleDrawer  = (event) => {
              if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
              }
              setOpen(!open)
          };
      const handleClose = () => {
        setOpen(false)
      }
      const handleLogout = () => {
        props.logoutUser()
        console.log('logout')
      }
        const firstChart = props.user.loading === false? <Fragment>{props.user.firstname[0]}{props.user.lastname[0]}</Fragment>:<CircularProgress style={{marginTop:10}}/>
        const name = props.user.loading === false && props.user.firstname ? <Fragment>{props.user.firstname} {props.user.lastname}</Fragment>:<Fragment>loading...</Fragment>
        const email = props.user.loading === false && props.user.firstname ? <Fragment>{props.user.email}</Fragment>:<Fragment>loading...</Fragment>
      return (
          <React.Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={12} md={4} className={classes.logoSection}>
                    <div style={{ width:100}}>
                      {
                        !props.user.authenticated?
                        <Link to='/'color="inherit" style={{textDecoration:'none', display:'flex'}}>
                          <img src={logo} alt ="logo" style={{ width:60 , height:60 ,marginTop:5,userSelect:'none' }}  className={classes.logo}/>
                          <h1 style={{color:'#017a9b', fontSize:'2rem', margin:'15px 0 0 0',height:60,  marginTop:10, fontWeight:800, userSelect:'none'}}>drouci</h1>
                        </Link>
                        :
                        <Link to='/dashboard' color="inherit" style={{textDecoration:'none', display:'flex'}}>
                         <img src={logo} alt ="logo" style={{ width:60 , height:60,marginTop:5,userSelect:'none' }}  className={classes.logo}/>
                          <h1 style={{color:'#017a9b', fontSize:'2rem', margin:'15px 0 0 0',height:60,  marginTop:10, fontWeight:800, userSelect:'none'}}>drouci</h1>
                        </Link>
                       }
                    </div>
                    <div className={classes.phoneContainer}>
                      <PhoneIphoneIcon fontSize="large" className={classes.phoneIcon}/>
                      <div>
                          <p className={classes.phoneNumber}>36 100 100</p>
                      </div>
                    </div>  
                    <MenuIcon 
                      fontSize="large" 
                      className={classes.menuIcon} 
                      onClick={toggleDrawer}
                    />
                </Grid>
                <Grid item md={8} className={classes.navSection}> 
                  <HoverMenu interactive
                    title={
                    <div className={classes.hoverMenu}>
                        <Link to='/catalog/bac-math'color="inherit" underline="none">
                            <p className={classes.subIem}>Baccalauréat</p>
                          </Link>
                        <Link to='/catalog/1ere-mp'color="inherit" underline="none">
                            <p className={classes.subIem}>Préparatoire</p>
                          </Link>
                    </div>
                    }
                  >
                    <p className={classes.navItem}>Nos Classes</p>
                  </HoverMenu>
                  <Link to='/teacher' color="inherit" style={{textDecoration:'none'}}>
                    <p className={classes.navItem}><span className={classes.hidden}>Devenir</span> Enseignant</p>
                  </Link>
                  {/* signin && signup profile */}
                  {!props.user.authenticated?
                      <React.Fragment>
                        
                          <Divider orientation="vertical" flexItem style={{margin:'15px 20px 15px 0'}}/>
                        
                        <Link to='/login' style={{color:'inherit', textDecoration:'none'}}>
                          <Button className={classes.signinItem}>
                            Connexion
                          </Button>
                        </Link>
                        <Link to='/signup' style={{color:'inherit', textDecoration:'none'}}>      
                          <Button className={classes.signupItem}>
                            Inscription
                          </Button>
                        </Link>
                      </React.Fragment>:
                      <div>
                        {props.user.loading?
                        <CircularProgress style={{marginTop:10}}/>:
                        <HoverProfileCard interactive
                          title={
                            <div>
                                <div style={{display:'block',justifyContent:'center'}}>
                                  <Link to='/dashboard' color="inherit" style={{textDecoration:'none'}}>
                                    <Avatar className={classes.cardAvater} >{firstChart}</Avatar>
                                  </Link>
                                  <Typography gutterBottom className={classes.name}>
                                    {name}
                                  </Typography>
                                  <Typography className={classes.email} gutterBottom>
                                    {email}
                                  </Typography>
                                </div>
                                <Divider style={{ margin:'15px -15px'}}/>
                                <div style={{textAlign:'center'}}>
                                  {/* <Link to='/dashboard'color="inherit" style={{textDecoration:'none'}}> */}
                                    {/* <p className={classes.avatarButton}>Mon Profile</p> */}
                                  {/* </Link> */}
                                </div>
                                <div style={{textAlign:'center'}}>
                                  {!props.user.loading?
                                  <Link to='/dashboard' color="inherit" style={{textDecoration:'none'}}>
                                    <p className={classes.avatarButton}>Mes Cours</p>
                                  </Link>:null}
                                </div>
                                <div style={{textAlign:'center'}}>
                                  <Link to='/'color="inherit" style={{textDecoration:'none'}} onClick={handleLogout}>
                                  <p className={classes.avatarButton}>
                                     Déconnecter
                                  </p>
                                   </Link>
                                </div>
                            </div>
                        }
                    >
                        
                      <Avatar className={classes.avatar}>{firstChart}</Avatar>
                    </HoverProfileCard>}
                      </div>}
                </Grid>
                <MobileDrawer toggleDrawer={toggleDrawer} handleClose={handleClose} open={open} authenticated={props.user.authenticated} logoutUser={props.logoutUser}/>
            </Grid>
          </React.Fragment>
      )
  }

  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Navbar);

  
  const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor:'#fff',
        boxShadow: '0px 0px 12px rgba(91, 137, 158, 0.5)',
        zIndex:2,
        height:70,
        width:'100%',
        position:'fixed',
        top:0,
        left:0,
        padding:'0 100px',
        [theme.breakpoints.down('md')]: {
            padding:'0 20px',
          },
    },
    logoSection:{
      display:'flex',
      [theme.breakpoints.down('sm')]: {
          display:'flex',
          justifyContent:'center'
     },
    },
    logo:{
      [theme.breakpoints.down('sm')]: {
         marginLeft:20
     },
    },
    phoneContainer:{
      display:'flex',
      marginLeft:100,
      justifyContent:'flex-end',
      [theme.breakpoints.down('sm')]: {
         display:'none'
      },
      [theme.breakpoints.down('md')]: {
      marginLeft:50,
      },
      
    },
    phoneIcon:{
        margin:'15px 0 0 20px',
        color:theme.palette.primary.text,

    },
    phoneNumber:{
        color:theme.palette.primary.text,
        marginTop:20,
        fontWeight:600,   
        fontSize:'1rem'
    },
    navSection:{
        display:'flex',
        justifyContent:'flex-end',
        [theme.breakpoints.down('sm')]: {
            display:'none',
        }
    },
    navItem:{
        color:theme.palette.primary.text,
        fontSize:'1rem',
        fontWeight:600,
        margin:'15px 20px',
        float:'right',
        paddingTop:7,
        cursor:'pointer',
        '&:hover': {
        color:theme.palette.primary.main, 
        },
    },
    signinItem:{
      color:theme.palette.primary.text,
      backgroundColor:theme.palette.primary.light,
      boxShadow:' 3px 3px 3px 0 rgba(46,61,73,0.1)',
      verticalAlign: 'middle',
      height: '2rem',
      padding: '0 20px',
      textTransform: 'capitalize',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '2.625rem',
      letterSpacing: '.125rem',
      userSelect: 'none',
      cursor: 'pointer',
      borderRadius: '.25rem',
      appearance: 'none',
      textAlign: 'center',
      marginTop:18,
      marginRight:20,
      float:'right',
      '&:hover': {
          // boxShadow:' 5px 5px 5px 0 rgba(46,61,73,.15)',
      },
      transition:' 0.1s',
  },
  signupItem:{
    backgroundColor:theme.palette.primary.main,
    boxShadow:' 8px 10px 20px 0 rgba(46,61,73,.15)',
    verticalAlign: 'middle',
    height: '2rem',
    padding: '0 20px',
    textTransform: 'capitalize',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '2.625rem',
    letterSpacing: '.125rem',
    userSelect: 'none',
    cursor: 'pointer',
    borderRadius: '.25rem',
    appearance: 'none',
    textAlign: 'center',
    color:'#fff',
    marginTop:18,
    float:'right',
    '&:hover': {
        backgroundColor:'#016682',
        boxShadow:' 5px 5px 5px 0 rgba(46,61,73,.15)',
    },
    transition:' 0.1s',
    
      },
    subIem:{
        margin:10,
        color:theme.palette.primary.main,
        backgroundColor:'rgba(255,255,255,0.9)',
        border:`2px solid ${theme.palette.primary.main}`,
        borderRadius:'5rem',
        fontWeight:600,
        float:'right',
        padding:'7px 20px',
        cursor:'pointer',
        '&:hover': {
            color:'#fff',
            backgroundColor:theme.palette.primary.main,
        },
        transition:' 0.3s'
    },
    avatarButton:{
        margin:10,
        color:theme.palette.primary.main,
        backgroundColor:'rgba(255,255,255,0.9)',
        border:`2px solid ${theme.palette.primary.main}`,
        borderRadius:'5rem',
        fontWeight:600,
        padding:'7px 20px',
        cursor:'pointer',
        '&:hover': {
            color:'#fff',
            backgroundColor:theme.palette.primary.main,
        },
        transition:' 0.3s'
    },
    menuIcon:{
        margin:'15px 20px 0 0',
        position:'relative',
        left:'40%',
        cursor:'pointer',
        color:theme.palette.primary.main,
        '&:hover': {
        color: fade('#064FA8', 1)
        },
        display:'none',
        [theme.breakpoints.down('sm')]: {
            display:'flex',
          },
        [theme.breakpoints.down('xs')]: {
          left:'35%',
          },
    },
    navMobileItem:{
        color:theme.palette.primary.black,
        fontWeight:600,
        float:'left',
        paddingLeft:20,
        cursor:'pointer',
        '&:hover': {
            color:theme.palette.primary.main,
        },
    },
    signupMobileNavItem:{
        color:'#fff',
        width:'50%',
        backgroundColor:theme.palette.primary.main,
        border:`2px solid ${theme.palette.primary.main}`,
        borderRadius:'5rem',
        fontWeight:600,
        textAlign:'center',
        // marginLeft:23,
      margin:'auto',
      padding:'7px 20px'
      
    },
    list:{
        width: 250,
        height:'100%',
        backgroundColor:'#2E3D49',
        color:'#fff'
    },
    avatar:{
      textTransform: 'uppercase',
      width: 35,
      height: 35,
      marginTop:15,
      color:'#fff',
      backgroundColor:theme.palette.primary.main,
      fontWeight:600,
      fontSize:20,
      marginLeft:20,
      float:'right'
    },
    cardAvater:{
      margin:'auto',
      backgroundColor:theme.palette.primary.main,
      textTransform: 'uppercase'
    },
    email:{
      margin:'auto',
      color:theme.palette.primary.title,
      textAlign:'center'
    },
    name:{
      color:theme.palette.primary.title,
      fontWeight:600,
      textTransform: 'uppercase',
      textAlign:'center',
      margin:'10px 5px 0 5px'
    },
    hidden:{
      [theme.breakpoints.down('md')]: {
        display:'none'
        },
    }
  }));