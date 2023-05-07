import React, { useEffect } from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import CookieIcon from '@mui/icons-material/Cookie';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { logout, userCurrent } from './js/userSlice/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 0,
    marginTop: theme.spacing(0),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(0, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: 'rgb(255,255,255)'
      },
    },
  },
}));
function Header() {
  const isAuth = localStorage.getItem('token');
  const dispatch =useDispatch()
  const navigate =useNavigate()

  useEffect(() => {
    if(isAuth){
      dispatch(userCurrent())
    } 
    
    
  }, [])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user= useSelector((state)=> state?.user?.user);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='header'>
        <div className='header__left'>
        <img
          src="https://AymenGadri.github.io/eventify-website-favicon-color.png"
          alt=""
        />
        <div className='header__input'>
            <SearchIcon />
            <input type="text" placeholder='Search for Events'/>
        </div>
        </div>
        <div className='header__center'>
            <div className='header__option header__option--active'>
                <HomeIcon fontSize="large" />
            </div>
            <div className="header__option">
              <FlagIcon fontSize="large" />
            </div>
            <div className="header__option">
              <SubscriptionsOutlinedIcon fontSize="large" />
            </div>
            <div className="header__option">
              <SupervisedUserCircleIcon fontSize="large" />
            </div>
        </div>
        <div className='header__right'>
            <div className="header__info">
                <Avatar 
                />
                <h4>{user?.name}</h4>
            </div>
            <IconButton>
              <AddIcon />
            </IconButton>
            <IconButton>
              <ForumIcon />
            </IconButton>
            <IconButton>
              <NotificationsActiveIcon />
            </IconButton>
            <IconButton         onClick={handleClick}

        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        endIcon={<KeyboardArrowDownIcon />}
      >
      
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <SettingsIcon />
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Privacy policy
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <CookieIcon />
          Cookies
        </MenuItem>
        {isAuth? <MenuItem onClick={()=>{ 
            dispatch(logout());
            navigate("/")
        }} disableRipple> 
         <LogoutIcon /> 
      Logout
        </MenuItem> : null }
         
      </StyledMenu>
            </IconButton>
        </div>
    </div>
  )
}
export default Header