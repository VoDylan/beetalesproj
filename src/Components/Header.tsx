import {AppBar, Button, Toolbar, Stack} from "@mui/material";
import Logo from "../assets/WpiXBeetalesLogo(2).png";

// import Resizer from 'react-image-file-resizer';


function Header() {


    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "#F7CE46",
                height: "110px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                elevation: 1,
                justifyContent: "center",

            }}
        >
            <Toolbar>
                <Stack direction="row" spacing={2.5} sx={{
                    alignItems: "center",
                    // marginRight: "1%"
                }}>
                    {/*<Box component="section" sx={{*/}
                    {/*    p: 2, width: 320,*/}
                    {/*    height: 100,*/}
                    {/*}}>*/}
                        <img src={Logo} alt={"Logo"}/>
                    {/*</Box>*/}
                </Stack>

                <Stack
                    direction="row"
                    spacing={2}
                    flexGrow={1}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ textAlign: "center",
                        // marginLeft: "7%",
                        minWidth: "200px" }}
                >
                    <Button variant="text" href={"/main"} sx = {{color: 'black', fontWeight: 'bold'}}>Home</Button>
                    <Button variant="text" href={"/main"} sx = {{color: 'black', fontWeight: 'bold'}}>About</Button>
                    <Button variant="text" href={"/main"} sx = {{color: 'black', fontWeight: 'bold'}}>Map Data</Button>
                    <Button variant="text" href={"/main"} sx = {{color: 'black', fontWeight: 'bold'}}>Survey Results</Button>
                    <Button variant="text" href={"/main"} sx = {{color: 'black', fontWeight: 'bold'}}>Conclusions</Button>
                </Stack>

                <Stack
                    direction="row"
                    spacing={2}
                    flexGrow={1}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ textAlign: "center",
                        marginRight: "1%",
                        minWidth: "200px" }}
                >
                    <Button variant="contained" sx = {{
                        // xs:6
                    }}>Language</Button>
                </Stack>




            </Toolbar>
        </AppBar>
    );
}

export default Header;