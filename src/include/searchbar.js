import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/material';
import './searchresult.css';

function Searchbar(props) {
  const [enteredKeyword, setEnteredKeyword] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.preventDefault();
    setEnteredKeyword(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search/${enteredKeyword}`);
      setEnteredKeyword('');
    }
  };

  const clearInput = () => {
    setEnteredKeyword('');
  };

  return (
    <Box sx={{ margin: 'auto' }}>
      <TextField
        type="text"
        name="search"
        id="custom_input_searchbar"
        className="custom_input"
        onKeyDown={enterHandler}
        onChange={changeHandler}
        placeholder="검색어를 입력해주세요"
        fullWidth
        value={enteredKeyword}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {enteredKeyword ? (
                <IconButton onClick={clearInput} edge="end">
                  <ClearIcon />
                </IconButton>
              ) : (
                <IconButton disabled edge="end">
                  <SearchIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default Searchbar;
