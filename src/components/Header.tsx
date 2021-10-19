import { Avatar as A, Grid, styled, Menu, MenuItem, Button } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Container = styled('div')`
  border-bottom: 1px solid #d1d5db;
  height: 80px;
`;

const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    border-radius: 6;
    border: 1px solid #d1d5db;
    box-shadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px';
  }
`;
const AvatarContainer = styled(Button)`
  display: flex;
  align-items: center;

  :hover {
    background-color: rgba(0, 0, 0, 0.01);
  }
`;

const Avatar = styled(A)();

const Hamburger = styled('span')`
  cursor: pointer;
  @media screen and (min-width: 728px) {
    display: none;
  }
`;

interface Props {
  onMenuClick: () => void;
}
const Header = ({ onMenuClick }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    history.push('/login');
  };

  const open = Boolean(anchorEl);
  return (
    <Container>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: '100%', padding: '0 1rem' }}
      >
        <Grid item>
          <Hamburger onClick={onMenuClick}>
            <MenuIcon />
          </Hamburger>
        </Grid>
        <Grid item>
          <AvatarContainer
            onClick={handleClick}
            endIcon={<KeyboardArrowDown sx={{ width: '18px', color: '#9CA3AF' }} />}
          >
            <Avatar
              alt="Remy Sharp"
              src="/dsc.png"
              sx={{ border: '1px solid #D1D5DB', height: '52px', width: '52px' }}
            />
          </AvatarContainer>

          <StyledMenu
            id="basic-menu"
            elevation={0}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                logOut();
              }}
            >
              Log Out
            </MenuItem>
          </StyledMenu>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
