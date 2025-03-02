import { AppBar, Button, Toolbar, Stack, Box, Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../assets/WpiXBeetalesLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setDrawerOpen(newOpen);
    };

    const drawerContent = (
        <Box
            sx={{ width: '75%' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem component={Link} to="/">
                    <ListItemText primary="Home" sx={{ color: 'black', fontFamily: 'Nunito Sans' }} />
                </ListItem>
                <ListItem component={Link} to="/about">
                    <ListItemText primary="About Us" sx={{ color: 'black', fontFamily: 'Nunito Sans' }} />
                </ListItem>
                <ListItem component={Link} to="/mapPage">
                    <ListItemText primary="Map" sx={{ color: 'black', fontFamily: 'Nunito Sans' }} />
                </ListItem>
                <ListItem component={Link} to="/Survey">
                    <ListItemText primary="Research" sx={{ color: 'black', fontFamily: 'Nunito Sans' }} />
                </ListItem>
                <ListItem component={Link} to="/conclusions">
                    <ListItemText primary="Conclusions" sx={{ color: 'black', fontFamily: 'Nunito Sans' }} />
                </ListItem>
                <ListItem component={Link} to="/WhatYouCanDo">
                    <ListItemText primary="WhatYouCanDo" sx={{ color: 'black', fontFamily: 'Nunito Sans' }} />
                </ListItem>
            </List>
        </Box>
    );


    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "#ffe468",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                width: "100%",
                left: 0,
                right: 0,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', paddingLeft: 2, paddingRight: 2 }}>
                <IconButton
                    edge="start"
                    color="black"
                    aria-label="menu"
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Box display="flex" alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <img src={Logo as string} alt="Logo" style={{ height: '50px', marginRight: '16px' }} />
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button component={Link} to="/" sx={{ color: 'black', fontWeight: 'bold' }}>Home</Button>
                        <Button component={Link} to="/about" sx={{ color: 'black', fontWeight: 'bold' }}>About Us</Button>
                        <Button component={Link} to="/mapPage" sx={{ color: 'black', fontWeight: 'bold' }}>Map</Button>
                        <Button component={Link} to="/Research" sx={{ color: 'black', fontWeight: 'bold' }}>Research</Button>
                        <Button component={Link} to="/conclusions" sx={{ color: 'black', fontWeight: 'bold' }}>Conclusions</Button>
                        <Button component={Link} to="/WhatYouCanDo" sx={{ color: 'black', fontWeight: 'bold' }}>What You Can Do</Button>
                    </Stack>
                </Box>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {drawerContent}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
