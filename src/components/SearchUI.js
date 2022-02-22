import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const SearchUI = () => {
  const [searchItem, setSearchItem] = React.useState('');

  const handleSearchInputChange = (e) => {
    setSearchItem(e.target.value);
  }
  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log('clicked', searchItem);
  }
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
       onChange={handleSearchInputChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search . . ."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton onClick={handleSearchClick} sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}


export default SearchUI

