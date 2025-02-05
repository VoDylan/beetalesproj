import {Box, Stack, Typography} from "@mui/material";

export default function AboutPage() {
    return (
        // <Box
        //     justifyContent="center"
        //     display="flex"
        //     alignItems="flex-start"
        //
        //     sx={{
        //         mt: 15,
        //         backgroundColor: "#676565",
        //         marginBottom: "100vh",
        //         borderRadius: 1,
        //         width: "100%",
        //         height: "100%",
        //         border: '2px solid grey',
        //         // pt: "10px"
        //
        //     }}>
        //     <Box
        //         justifyContent="center"
        //         display="flex"
        //         alignItems="center"
        //         sx={{
        //             mt: 15,
        //             backgroundColor: "#D9D9D9",
        //             // marginBottom: "10vh",
        //             // width: "50%",
        //             marginTop: "5vh"
        //
        //         }}
        //     >
        //         <Typography color={"Black"} fontSize={60}>
        //             Purpose
        //         </Typography>
        //
        //
        //     </Box>
        //     {/*<Box*/}
        //     {/*    sx={{*/}
        //     {/*        backgroundColor: "#003A96",*/}
        //     {/*        position: "relative",*/}
        //     {/*        height: "3.5rem",*/}
        //     {/*        display: "flex",*/}
        //     {/*        alignItems: "center",*/}
        //     {/*        justifyContent: "center",*/}
        //     {/*        opacity: "90%",*/}
        //     {/*    }}*/}
        //     {/*>*/}
        //     {/*    <Typography color={"white"} fontSize={40}>*/}
        //     {/*        About Us*/}
        //     {/*    </Typography>*/}
        //     {/*</Box>*/}
        // </Box>
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