import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 0px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    height: 40,
    background: '#111D5E',
    border: '1px solid white'
  },
  searchIcon:{
      color: 'white',
      '&:focus': {
        outline: 0,
      }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: 'white'
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  searchButton: {
    background: '#F37121 ',
    color: 'white',
    borderRadius: 3,
    marginRight: 0,
    height: '100%',
    fontSize: 12,
    hover: {
      color: 'orange',
    }
  }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      {/* <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <IconButton type="submit" className={classes.searchIcon}>
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Input your search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton  className={classes.searchButton}>
        <div>
            Search
        </div>
      </IconButton>
    </Paper>
  );
}