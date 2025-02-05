import {Box, Stack, Typography} from "@mui/material";

export default function AboutPage() {
    return (
        <Box
            sx={{
                mt: 15,
                backgroundColor: "#ffffff",
                marginBottom: "30px",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#003A96",
                    position: "relative",
                    height: "3.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: "90%",
                }}
            >
                <Typography color={"white"} fontSize={40}>
                    About Us
                </Typography>
            </Box>
            <Stack>

            </Stack>
            <ScrollTopButton />
        </Box>

    );
}