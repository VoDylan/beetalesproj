import {AppBar, Button} from "@mui/material";


function Header() {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "#F7CE46",
                height: "120px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                elevation: 1,
                justifyContent: "center",
                zIndex: 9999,
            }}
        >
            <Button variant="text" href={"/main"}>Login</Button>
            <div>

            </div>

        </AppBar>
    );
}

export default Header;