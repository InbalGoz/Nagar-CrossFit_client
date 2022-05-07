import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link, useNavigate, useParams } from "react-router-dom";

//redux
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logOut } from "../store/actions/authActions";
import {
  getNotificationsByCustomerId,
  createNotification,
} from "../store/actions/notificationActions";

interface Props {
  isAdmin: any;
}

const Header: React.FC<Props> = ({ isAdmin }) => {
  //const [count, setCount] = useState(0);
  let count = 0;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { employee } = useAppSelector((state) => state.employee);

  const { all_notificationsById } = useAppSelector(
    (state) => state.notification
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  useEffect(() => {
  }, []);

  const countNotRead = () => {
    if (all_notificationsById) {
      all_notificationsById.forEach((noti) => {
        if (!noti.isRead) {
          // setCount(count + 1);
          count++;
        }
      });
      return count;
    } else {
      return count;
    }
  };

  const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  /* const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };*/

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogOutClose = () => {
    //logout
    // count = 0;
    dispatch(logOut());
    navigate("/");

    setAnchorEl(null);
    //handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";

  const renderAdminMenue = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link
          to='/admin/customers'
          style={{ textDecoration: "none", color: "black" }}
        >
          Customers
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          to='/admin/lessons'
          style={{ textDecoration: "none", color: "black" }}
        >
          Lessons
        </Link>
      </MenuItem>
      <MenuItem onClick={handleLogOutClose}>LogOut</MenuItem>
    </Menu>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogOutClose}>LogOut</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, fontFamily: "Nunito" }}
          >
            <Link
              to={`/home`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Nagar CrossFit{" "}
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              to={`/scheduler`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <IconButton
                size='large'
                aria-label='show lesson in scheduler'
                color='inherit'
              >
                <CalendarMonthIcon />
              </IconButton>
            </Link>
            <Link
              to={`/notifications`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <IconButton
                size='large'
                aria-label='show 17 new notifications'
                color='inherit'
              >
                <Badge badgeContent={countNotRead()} color='error'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='show more'
              //aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {(isAdmin && renderAdminMenue) || (!isAdmin && renderMenu)}
    </Box>
  );
};

export default Header;

/*{
  (employee.isAdmin && renderAdminMenue) || (!employee.isAdmin && renderMenu);
}*/
