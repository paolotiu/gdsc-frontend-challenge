import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
interface Props {}

const StyledSearchBar = styled('div')`
  display: flex;
  border: 1px solid #ddd;
  max-width: 360px;
  padding: 0.7rem 0.8rem;
  gap: 0.5rem;
  flex: 1;
  border-radius: 4px;
  input {
    border: none;
    width: 100%;
    outline: none;
    font-family: inherit;
  }
`;
const SearchBar = (props: Props) => {
  return (
    <StyledSearchBar>
      <SearchIcon sx={{ color: '#9CA3AF' }} />
      <input type="text" id="searcj" placeholder="Search Events" />
    </StyledSearchBar>
  );
};

export default SearchBar;
