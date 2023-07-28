
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import logo from '../../assets/mom2.png';
import { Link, useLocation } from 'react-router-dom';



import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const drawerWidth = 240;
const navItems = [
  { name: 'Shop', path: '/shop' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about-us' },
  { name: 'Contact', path: '/contact-us' },
  
];


function DrawerAppBar(props) {
  
  const { window } = props;
  const { totalItems } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography component={Link} to="/" variant="h6" sx={{ my: 2 }}>
        Crochet Nation
      </Typography>
      <Divider />
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
  
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/cart" sx={{ justifyContent: 'center', width: '100%' }}>
            <Badge badgeContent={totalItems} color="secondary" sx={{ color: '#FFDA03' }}>
              <ShoppingCart />
            </Badge>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );



  const container = window !== undefined ? () => window().document.body : undefined;
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#0077B6' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' }, color: '#FF7F50' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }} />
          <IconButton size='large' edge='start'>
            <img src={logo} alt="Avantgarde" style={{maxWidth: '25px', maxHeight: '25px'}} />
          </IconButton>
          <Typography component={Link} to='/'
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#FFDA03' }}
          >
            Crochet Nation
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name} component={Link} to={item.path} sx={{ color: '#FFDA03' }}>
                {item.name}
              </Button>
            ))}
          </Box>
          {location.pathname === '/shop' ? (
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" position='end' sx={{ color: '#FFDA03' }}>
              <Badge badgeContent={totalItems} color="secondary" sx={{ color: '#FFDA03', display: 'inline-block' }}>
              <ShoppingCart />
              </Badge>
              </IconButton>

            </Box>
          ) : null}
        </Toolbar>
      </AppBar>


      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Toolbar />
    </Box>

  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;