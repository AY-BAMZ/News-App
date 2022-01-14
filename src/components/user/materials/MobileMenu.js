import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core/styles';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
    },
    links: {
        background: '#111D5E',
        color: 'white',
        cursor: 'pointer',
    },
}));


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div>
      <Button aria-controls="fade-menu" className={classes.root} aria-haspopup="true" onClick={handleClick}>
        <FilterListIcon />
      </Button>
      <Menu 
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem className={classes.links} onClick={handleClose}>HOME</MenuItem>
        <MenuItem className={classes.links} onClick={handleClose}>ABOUT</MenuItem>
        <MenuItem className={classes.links} onClick={handleClose}>BLOG</MenuItem>
        <MenuItem className={classes.links} onClick={handleClose}>COTACT US</MenuItem>
      </Menu>
    </div>
  );
}