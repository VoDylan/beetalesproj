import { Box, Container, Grid, Typography } from "@mui/material";

function Footer() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "secondary.main",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h5">
                            Footer
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
