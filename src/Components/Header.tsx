import {AppBar, Button, Toolbar, Stack, Box, makeStyles} from "@mui/material";
import Logo from "../assets/WpiXBeetalesLogo.png";
import {Link} from "react-router";

function Header() {

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
            <Toolbar sx={{ justifyContent: 'space-between', paddingLeft: 2, paddingRight: 2 }}>
                <Box display="flex" alignItems="center">
                    <img src={Logo} alt="Logo" style={{ height: '50px', marginRight: '16px' }} />
                </Box>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Button component={Link} to="/" sx={{ color: 'black', fontWeight: 'bold' }}>Home</Button>
                    <Button component={Link} to="/about" sx={{ color: 'black', fontWeight: 'bold' }}>About</Button>
                    <Button component={Link} to="/mapPage" sx={{ color: 'black', fontWeight: 'bold' }}>Map</Button>
                    <Button component={Link} to="/survey-results" sx={{ color: 'black', fontWeight: 'bold' }}>Survey Results</Button>
                    <Button component={Link} to="/conclusions" sx={{ color: 'black', fontWeight: 'bold' }}>Conclusions</Button>
                </Stack>
            </Toolbar>
        </AppBar>
        // <AppBar
        //     position="fixed"
        //     sx={{
        //         backgroundColor: "#F7CE46",
        //         // height: "100px",
        //         elevation: 1,
        //         justifyContent: "center",
        //         width: "100%vw",
        //         padding:0,
        //
        //     }}
        // >
        //     <Toolbar>
        //         <Stack direction="row" spacing={2.5} sx={{
        //             alignItems: "center",
        //         }}>
        //                 <img src={Logo} alt={"Logo"}/>
        //         </Stack>
        //
        //         <Stack
        //             direction="row"
        //             spacing={2}
        //             flexGrow={1}
        //             alignItems="center"
        //             justifyContent="center"
        //             sx={{ textAlign: "center",
        //                 minWidth: "200px" }}
        //         >
        //             <Button variant="text" href={"/"} sx = {{color: 'black', fontWeight: 'bold'}}>Home</Button>
        //             <Button variant="text" href={"/About"} sx = {{color: 'black', fontWeight: 'bold'}}>About</Button>
        //             <Button variant="text" href={"/MapPage"} sx = {{color: 'black', fontWeight: 'bold'}}>Map Data</Button>
        //             <Button variant="text" href={"/Database"} sx = {{color: 'black', fontWeight: 'bold'}}>Data</Button>
        //             <Button variant="text" href={"/Conclusions"} sx = {{color: 'black', fontWeight: 'bold'}}>Conclusions</Button>
        //         </Stack>
        //
        //         <Stack
        //             direction="row"
        //             spacing={2}
        //             flexGrow={1}
        //             alignItems="center"
        //             justifyContent="center"
        //             sx={{ textAlign: "center",
        //                 marginRight: "1%",
        //                 minWidth: "200px" }}
        //         >
        //             {/*<Button variant="contained" sx = {{*/}
        //             {/*    // xs:6*/}
        //             {/*}}>Language</Button>*/}
        //         </Stack>
        //     </Toolbar>
        // </AppBar>
    );
}

export default Header;