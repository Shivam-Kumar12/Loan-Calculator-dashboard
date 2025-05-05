import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useThemeContext();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const textColor = darkMode ? 'white' : 'black';

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Exchange Rates (Live)', to: '/exchange' },
    { label: 'About', to: '/about' },
    { label: 'Error Page', to: '/error' },
  ];

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : '#fff' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                color: textColor
              }}
            >
              Loan Calculator
            </Typography>

            {isMobile ? (
              <IconButton
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: textColor }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.to}
                    component={Link}
                    to={link.to}
                    sx={{ color: textColor, ml: 2 }}
                  >
                    {link.label}
                  </Button>
                ))}
                <Switch
                  checked={darkMode}
                  onChange={toggleTheme}
                  sx={{ ml: 2 }}
                />
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{ width: 240 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.to}
                component={Link}
                to={link.to}
              >
                <ListItemText
                  primary={link.label}
                  sx={{ color: textColor }}
                />
              </ListItem>
            ))}
            <ListItem>
              <Switch
                checked={darkMode}
                onChange={toggleTheme}
              />
              <Typography sx={{ ml: 1, color: textColor }}>
                Dark Mode
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
