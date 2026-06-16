import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import FolderIcon from '@mui/icons-material/Folder';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useNavigate, Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const menuItems = [
    { label: '📊 Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { label: '🛡️ Operations', icon: <SecurityIcon />, path: '/operations' },
    { label: '👥 HR Module', icon: <PeopleIcon />, path: '/hr' },
    { label: '💰 Accounts', icon: <AccountBalanceIcon />, path: '/accounts' },
    { label: '📈 Business Dev', icon: <TrendingUpIcon />, path: '/business-development' },
    { label: '📋 Daily Tasks', icon: <AssignmentIcon />, path: '/daily-tasks' },
    { label: '📍 GPS Attendance', icon: <LocationOnIcon />, path: '/attendance' },
    { label: '📸 Site Inspection', icon: <CameraAltIcon />, path: '/site-inspection' },
    { label: '🚨 Complaints', icon: <ReportProblemIcon />, path: '/complaints' },
    { label: '📂 Documents', icon: <FolderIcon />, path: '/documents' },
    { label: '📅 Leave Mgmt', icon: <EventNoteIcon />, path: '/leave' },
    { label: '📊 Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            🛡️ ARMOUR - Security & Management Platform
          </Typography>
          <IconButton
            color="inherit"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ width: 250 }}
      >
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            ARMOUR
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.path}
                button
                onClick={() => {
                  navigate(item.path);
                  setDrawerOpen(false);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 0,
          marginTop: '64px',
          backgroundColor: '#f5f5f5',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;