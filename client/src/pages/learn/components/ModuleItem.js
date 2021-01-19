import React, { useState }from 'react';
import { useParams } from "react-router-dom";
//M-UI
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@material-ui/core';

//Redux
import { connect } from 'react-redux';
import { markItemCompleted } from '../action';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  panelSummary:{
  flexDirection:'row-reverse',
  
  },
  module:{
    display:'flex',
    width:'100%',
    justifyContent:'space-between'
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft:20,
    color:theme.palette.primary.title,
    [theme.breakpoints.down('sm')]: {
      marginLeft:3, 
     },

  },
  secondaryHeading:{
    fontSize: 15,
    marginLeft:10,
    [theme.breakpoints.down('sm')]: {
      display:'none'
     },
  },
  sectionHeading:{
   cursor:'pointer',
   '&:hover': {
    color:theme.palette.primary.main,
},
  },
  accordion:{
    backgroundColor:'#FBFBF8',
    marginBottom:-1
  },
  dialog:{
    width:900,
    position:'relative',
    margin:'auto',
    [theme.breakpoints.down('sm')]: {
      width:'100%'
     },
  },
  video:{
   width:'100%'
  },
  dialogDescription:{
    marginTop:-5,
    backgroundColor:'rgba(0,0,0,0.7)',
    color:'rgba(255,255,255,0.9)'
  },
  playIcon:{
     verticalAlign:'middle',
     marginRight:20, 
     [theme.breakpoints.down('sm')]: {
      marginRight:5, 
     },
  },
  button:{
    color:theme.palette.primary.main,
    fontWeight:600,
    border: `1px solid ${theme.palette.primary.main}`,
    width:'100%',
    margin:10
  },
  closeButton:{
    color:theme.palette.secondary.main,
    fontWeight:600,
    border: `1px solid ${theme.palette.secondary.main}`,
    width:'100%',
    margin:10
  }
}));

function ModuleItem(props) {
  const classes = useStyles();
  

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [expanded, setExpanded] = useState(true);

  const handleClickOpen = (id) => {
    setOpen(true);
    setSelected(id)
  };

  let { wishlistId } = useParams();
  const handleMarkItemCompleted  = (sectionId) =>{
    const completeData = {
        wishlistId,
        sectionId  
    }
    props.markItemCompleted(completeData);
}
  const handleClose = () => {
    setOpen(false);
  }
  const handlEexpanded = () => {
    setExpanded(!expanded);
  }
  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion} variant="outlined" expanded={expanded}>
        <AccordionSummary
          className={classes.panelSummary}
          expandIcon={<ExpandMoreIcon className={classes.icon} onClick={handlEexpanded}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div className={classes.module}>
            <Typography className={classes.heading}>{props.module.title}</Typography>        
            <Typography className={classes.secondaryHeading} color="textSecondary" gutterBottom>
              {props.module.sessionsNumber} sections • {props.module.duration}
            </Typography>
          </div>
        </AccordionSummary>
        {props.module.sections.map(section => <AccordionDetails key={section._id} style={{marginLeft:20}}>
          <PlayCircleFilledIcon className={classes.playIcon} fontSize='small' style={{ color: props.completedSections.indexOf(section._id) !== -1?'#2E7E32':'#525c65'}} onClick={()=>console.log(props.completedSections.indexOf(section._id))}/>
          <Typography className={classes.sectionHeading} onClick={()=>handleClickOpen(section._id)}>
            {section.title}
          </Typography>
          <Dialog
            className={classes.dialog}
            fullWidth={true}
            maxWidth = {'md'}
            open={open && section._id === selected}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogContent style={{padding:0}}>
            <video className={classes.video} controls>
                <source src={section.videoUrl} type="video/mp4" />
            </video>
            </DialogContent>
            {/* <DialogTitle id="alert-dialog-title" className={classes.dialogDescription}>{section.description}</DialogTitle> */}
            <DialogActions style={{padding:0, backgroundColor:'raba(0,0,0,0.5)', width:'100%'}}>
            {props.completedSections.indexOf(section._id) !== -1?<Button className={classes.closeButton} onClick={handleClose}>FERMER</Button>:<Button className={classes.button} onClick={()=>handleMarkItemCompleted(section._id)}>MARKER COMME TERMINÉ</Button>}
            </DialogActions>
      </Dialog>
        </AccordionDetails>)}
      </Accordion>
    </div>
  );
}
const mapStateToProps = (state) => ({
  completedSections : state.learn.completedSections,
 
});
  const mapActionsToProps = {
    markItemCompleted
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(ModuleItem);