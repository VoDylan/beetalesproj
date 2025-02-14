import {Box, Stack, Typography} from "@mui/material";

export default function AboutPage() {
    return (
        <Stack spacing={2}>
        <Box
            sx={{
                border: '1px solid #000',
                padding: 2,
                borderRadius: 1,
                backgroundColor: "#676565",

                //         width: "100%",
                //         height: "100%",
                //         // pt: "10px"
                //
            }}
        >
            <Box
                sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 1,
                    marginBottom: 2,
                }}
            >
                <Typography variant="h6">Purpose</Typography>
            </Box>
            <Typography>
                This is the paragraph below the box with the "Purpose" text.
            </Typography>
        </Box>

<Box
    sx={{
        border: '1px solid #000',
        padding: 2,
        borderRadius: 1,
        marginBottom: 2,
    }}>
    <Typography>
        This is the paragraph below the box with the "Purpose" text.
    </Typography>
</Box>


        </Stack>
    );
}