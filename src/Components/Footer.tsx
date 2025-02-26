import {Box, Container, Grid2, Typography} from "@mui/material";

function Footer() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#C20F2E",
                // backgroundColor: "white",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                position: "absolute",
                left: 0,
                right: 0,
                zIndex: -1,
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                marginTop: "4rem",
                // border: "1px solid white", //
            }}
        >
            <Container maxWidth="xl">
                <Grid2 container direction="column" alignItems="center">
                    <Grid2 item xs={12}>
                        <Typography color="black" variant="h5">
                            This research is taken by students at Worcester Polytechnic Institute for completion of their Interactive Qualifying project and not peer reviewed.
                        </Typography>
                    </Grid2>
                    {/*<Grid2 item xs={12}>*/}
                    {/*    <Typography color="textSecondary" variant="subtitle1">*/}
                    {/*        {`${new Date().getFullYear()} | React | Material UI | React Router`}*/}
                    {/*    </Typography>*/}
                    {/*</Grid2>*/}
                </Grid2>
            </Container>
        </Box>
    );
}

export default Footer;
