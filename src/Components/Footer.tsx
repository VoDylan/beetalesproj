import { Box, Container, Typography, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';

function Footer() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#ffe468",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                position: "absolute",
                left: 0,
                right: 0,
                zIndex: -1,
                marginTop: "2rem",
            }}
        >
            <Container maxWidth="xl">
                <Grid container direction="column" alignItems="center">
                    <Grid size={{xs:12}}>
                        <Typography color="black" fontSize={'1rem'} align="center" gutterBottom fontFamily="Nunito Sans" fontStyle={'italic'}>
                            This research is conducted by students at Worcester Polytechnic Institute for completion of their Interactive Qualifying Project (IQP) and is not peer reviewed.
                        </Typography>
                    </Grid>
                    <Grid size={{xs:12}}>
                        <Typography color="black" fontSize={'1rem'} align="center" gutterBottom fontFamily="Nunito Sans">
                            © 2025 All rights reserved
                        </Typography>
                    </Grid>
                    <Grid size={{xs:12}}>
                        <Typography color="black" fontSize={'1rem'}  align="center" fontFamily="Nunito Sans">
                            <Link href="https://www.beetales.com.hk/" color="inherit" underline="always" target="_blank" rel="noopener">
                                Beetales
                            </Link>
                            {" | "}
                            <Link href="https://www.wpi.edu" color="inherit" underline="always" target="_blank" rel="noopener">
                                Worcester Polytechnic Institute (WPI)
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
