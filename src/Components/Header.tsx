import {AppBar, Button, Toolbar, Stack, Box, Drawer, List, ListItem, ListItemText, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../assets/WpiXBeetalesLogo.png";
import {Link} from "react-router";
import {useState} from "react";

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <ListItemText primary="About"/>
                </ListItem>
                <ListItem button component={Link} to="/mapPage">
                    <ListItemText primary="Map"/>
                </ListItem>
                <ListItem button component={Link} to="/Database">
                    <ListItemText primary="Database"/>
                </ListItem>
                <ListItem button component={Link} to="/conclusions">
                    <ListItemText primary="Conclusions"/>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "#F7CE46",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                width: "100%",
                left: 0,
                right: 0,
            }}
        >
            <Toolbar sx={{justifyContent: 'space-between', paddingLeft: 2, paddingRight: 2}}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{display: {xs: 'flex', md: 'none'}}}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon/>
                </IconButton>
                <Box display="flex" alignItems="center" sx={{display: {xs: 'none', md: 'flex'}}}>
                    <img src={Logo} alt="Logo" style={{height: '50px', marginRight: '16px'}}/>
                </Box>
                <Box sx={{display: {xs: 'none', md: 'flex'}, flexGrow: 1, justifyContent: 'center'}}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button component={Link} to="/" sx={{color: 'black', fontWeight: 'bold'}}>Home</Button>
                        <Button component={Link} to="/about"
                                sx={{color: 'black', fontWeight: 'bold'}}>About</Button>
                        <Button component={Link} to="/mapPage"
                                sx={{color: 'black', fontWeight: 'bold'}}>Map</Button>
                        <Button component={Link} to="/Database" sx={{color: 'black', fontWeight: 'bold'}}>Database</Button>
                        <Button component={Link} to="/conclusions"
                                sx={{color: 'black', fontWeight: 'bold'}}>Conclusions</Button>
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