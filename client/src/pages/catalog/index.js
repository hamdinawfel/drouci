import React, {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
//M-ui icons
import DoneIcon from '@material-ui/icons/Done';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
//Components
import CourseCard from './components/CourseCard'
import LoadingCard from './components/LoadingCard'
//Redux
import { connect } from 'react-redux';
import { getCoursesByLevel, getCoursesByCategory } from './action';

const matieres = [ "Mathématique", "Physique", "Chimie"]
const useStyles = makeStyles(theme => ({
    root: {
      marginTop:150
    },
    logo:{
       backgroundColor:theme.palette.primary.lightBleu,
       padding:2,
       fontWeight:600,
       color:'#fff'
    },
    title:{
        textAlign:'center',
        fontWeight:600,
        color:theme.palette.primary.main,
        fontSize:24,
        margin:'130px 0 50px 0',
        [theme.breakpoints.down('sm')]: {
            fontSize:20,
        }
    },
    filter:{
        margin:'-50px 100px 50px 100px',
        justifyContent:'center',
        [theme.breakpoints.down('sm')]: {
            margin:'0 10px 50px 10px',
        }
    },
    chip:{
        marginRight:15
    },
    loading:{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       marginTop:250
    },
    button:{
        backgroundColor:'#fff',
        fontWeight: 600,
        '&:hover': {
            boxShadow:' 5px 5px 5px 0 rgba(46,61,73,.15)',
        },
        transition:'0.1s',
    },
    icon:{
        marginLeft:10,
        verticalAlign:-7
    },
    categoryContainer:{
      boxShadow:'0px 11px 15px -9px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 20px 8px rgba(0,0,0,0.12)',
       position:'absolute',
        backgroundColor:'#fff',
        padding:15,
        width:300,
        marginTop:20
    },
    prepaContainer:{
      marginLeft:50,
      display:'flex'
    },
    category:{
      margin:15,
      fontWeight:600,
      cursor:'pointer',
      userSelect:'none',
      color:theme.palette.primary.dark,
      '&:hover': {
        color:theme.palette.primary.main
    },
    transition:' 0.1s',
    },
    level:{
        margin:10,
      fontWeight:600,
      color:theme.palette.primary.text
    }
  }));

function Catalog(props) {
    const classes = useStyles();
    const [ selected, setSelected ] = useState(false);
    const [openPrepa, setOpenPrepa] = React.useState(false);
    const [openBac, setOpenBac] = React.useState(false);
    const [value, setValue] = React.useState('2 éme MP');

    const handleChange = (event) => {
      setValue(event.target.value);
      props.getCoursesByLevel(event.target.value)
      // setSelected(false)
    };
    const handlePrepa = () => {
        setOpenPrepa(!openPrepa);
    };
    const handleBac = () => {
        setOpenBac(!openBac);
    };
    
    let { level } = useParams();
    useEffect(() => {
       props.getCoursesByLevel(value)
    }, []);

    const handleFilter = (category) => {
        setSelected(category)
        props.getCoursesByCategory(category)
    };
    return (
        <div className={classes.root}>
            <div className={classes.filter}>
              <Button disabled={props.courses.loading} onClick={()=>setSelected(!selected)} variant="contained" className={classes.button}>CATÉGORIE
                <ExpandMore className={classes.icon} style={{transform: selected?'rotate(180deg)':null, transition:' 0.1s'}}/>
              </Button>
              <div className={classes.categoryContainer} style={{display: !selected || props.courses.loading?'none':'block', transition:' 0.1s'}}>
              <FormControl component="fieldset">
              <FormLabel component="legend">Choisir votre classe</FormLabel>
              <p className={classes.category} onClick={handlePrepa} >
                   Préparatoire
                  {openPrepa ? <ExpandLess className={classes.icon}/> : <ExpandMore className={classes.icon}/>} 
                </p>
                
                <Collapse in={openPrepa} timeout="auto" unmountOnExit>
                   <div className={classes.prepaContainer}>
                    <p className={classes.level}>1 ére année:</p>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                      <FormControlLabel value="1ere-mp" control={<Radio color='primary'/>} label="MP" />
                      <FormControlLabel value="1ere-pc" control={<Radio color='primary'/>} label="PC" />
                      <FormControlLabel value="1ere-pt" control={<Radio color='primary'/>} label="PT" />
                    </RadioGroup>
                   </div>
                   <Divider style={{margin:'20px 10px 20px 60px'}}/>
                   <div className={classes.prepaContainer}>
                    <p className={classes.level}>2 ére année:</p>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                      <FormControlLabel value="2 éme MP" control={<Radio color='primary'/>} label="MP" />
                      <FormControlLabel value="2 éme PC" control={<Radio color='primary'/>} label="PC" />
                      <FormControlLabel value="2 éme PT" control={<Radio color='primary'/>} label="PT" />
                    </RadioGroup>
                    <Divider />
                   </div>
                </Collapse>
                <p className={classes.category} onClick={handleBac} >
                    Baccalauréat
                  {openBac ? <ExpandLess className={classes.icon}/> : <ExpandMore className={classes.icon}/>} 
                </p>
                
                <Collapse in={openBac} timeout="auto" unmountOnExit>
                   <div className={classes.prepaContainer}>
                   <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                      <FormControlLabel value="bac-math" control={<Radio color='primary'/>} label="Mathématique" />
                      <FormControlLabel value="bac-science" control={<Radio color='primary'/>} label="Science" />
                      <FormControlLabel value="bac-info" control={<Radio color='primary'/>} label="Informatique" />
                      <FormControlLabel value="bac-technique" control={<Radio color='primary'/>} label="Technique" />
                      <FormControlLabel value="bac-eco" control={<Radio color='primary'/>} label="Economie & Gestion" />
                      <FormControlLabel value="bac-lettre" control={<Radio color='primary'/>} label="Lettre" />
                    </RadioGroup>
                   </div>
                </Collapse>
                </FormControl>
              </div>
            </div>
                    { props.courses.loading?
                        <div>
                            {[0,1,2].map((item)=><LoadingCard key={item} />)}
                        </div>
                        :
                        <div>
                            {props.courses.fitredData.map(item => <CourseCard key={item._id} item={item} />)}
                        </div>
                    }
        </div>
    )
}

const mapStateToProps = (state) => ({
    courses: state.courses,
    user: state.user
  });
  const mapActionsToProps = {
    getCoursesByLevel,
    getCoursesByCategory
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Catalog);