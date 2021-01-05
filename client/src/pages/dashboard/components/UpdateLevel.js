import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import SchoolIcon from '@material-ui/icons/School';

import { blue } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import Chip from '@material-ui/core/Chip';
//Redux
import { connect } from 'react-redux';
import { addUserDetail } from '../../../feature/auth/action';

const levels = ['2 éme prépa MP',
                 '2 éme prépa PC',
                 '2 éme prépa PT',
                 '1 ére prépa MP',
                 '1 ére prépa PC',
                 '1 ére prépa PT',
                 'Bac Mathématique',
                 'Bac Science',
                 'Bac Technique',
                 'Bac Informatique',
                 'Bac Economie & Gestion',
                ];
const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
      },
      updateIcon:{
        display:'none',
        marginTop :10,
        marginLeft:10,
        [theme.breakpoints.down('xs')]: {
            display:'flex',
            marginRight:10,
          }, 
      },
      updateChip:{
        display:'flex',
        [theme.breakpoints.down('xs')]: {
           display:'none'
          },
      },
      
  }));

function UpdateLevel(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState('');
  const [ selected, setSelected ] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleListItemClick = (value) => {
    setSelected(value);
  };
 const handleChangeLevel = () => {
   const userData = {
     level: selected
   }
    props.addUserDetail(userData);
    setSelected('');
    setOpen(false);
 }

  return (
    <div>
        <Chip
            className={classes.updateChip}
            style={{margin:'10px 0 0 10px'}}
            variant="outlined"
            size="small"
            icon={<EditIcon />}
            label="Modifier"
            clickable
            color="primary"
            onClick={handleClickOpen}
        />
       <EditIcon color="primary" fontSize='small' className={classes.updateIcon} onClick={handleClickOpen}/>
       <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} style={{overflowY:'hidden'}}>
      <DialogTitle style={{color:'#f44336'}} id="simple-dialog-title">Vous êtes sérieux de modifier votre niveau ?</DialogTitle>
      <List>
        {levels.map((level) => (
          <ListItem button onClick={() => handleListItemClick(level)} key={level}>
            <ListItemAvatar>
              <Avatar className={classes.avatar} style={{backgroundColor: selected === level?'rgba(16, 170, 80, 0.4)':''}}>
                <SchoolIcon  style={{color: selected === level?'#10AA50':''}}/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={level} style={{color: selected === level?'#10AA50':''}}/>
          </ListItem>
        ))}
      </List>
      <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleChangeLevel} style={{color:' #f44336'}} autoFocus>
            Modifier
          </Button>
        </DialogActions>
    </Dialog>
    </div>
  );
}
const mapActionsToProps = {
  addUserDetail
};
export default connect(
  null,
  mapActionsToProps
)(UpdateLevel);