import React from 'react';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Home from './Routes/Home';
import Bolts from './Routes/Bolts';
import Plates from './Routes/Plates';
import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function App() {
  const navItems = [{ page: 'Bolts', path: "/Bolts" }, { page: 'Plates', path: "/Plates" }];

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                <Link to="/">Calculator</Link>
              </Typography>
              <List sx={{ display: 'flex' }}>
                {navItems.map((item) => (
                  <ListItem key={item.page} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} href={item.path}>
                      <ListItemText>{item.page}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bolts" element={<Bolts />} />
        <Route path="/Plates" element={<Plates />} />
      </Routes>
    </>
  );
}

export default App;
