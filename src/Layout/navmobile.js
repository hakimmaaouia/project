import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import ListItem from '@material-ui/core/ListItem';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
 
  title: {
    flexGrow: 1,
  },

});

export default function Navmobile() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (side, open) => event => {
    setState({ ...state, [side]: open });
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
      
    
      <IconButton edge="start"  style={{color:"#2a3c76",marginLeft:180}}>
            <ArrowForwardIosIcon />
          </IconButton>
         
     
         
          <a href="#eer3" style={{textDecoration:"none",color:"#2a3c76"}}>
          <ListItem button>
            Home
          </ListItem>
          </a>
          <a href="#eer2" style={{textDecoration:"none",color:"#2a3c76"}}>
          <ListItem button>
          News
          </ListItem>
          </a>
          <a href="#eer1" style={{textDecoration:"none",color:"#2a3c76"}}>
          <ListItem button>
          Contact
          </ListItem>
          </a>
          <a href="#eer1" style={{textDecoration:"none",color:"#2a3c76"}}>
          <ListItem button>
          About
          </ListItem>
          </a>
      </List>
    </div>
  );
  return (
    <div>
      <AppBar position="static" style={{background:"#89a0cf"}}>
      <Toolbar>
      <IconButton edge="start"  color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
      Name App 
          </Typography>
          <Button color="inherit" style={{float:"left"}}><PersonIcon />Login</Button>
          </Toolbar>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      </AppBar>
    </div>
  );
}