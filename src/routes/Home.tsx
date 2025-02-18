// import {React, useState, useEffect, useCallback } from "react";
import {Box, Stack, Typography} from "@mui/material";
// import {Button, IconButton, Typography, styled} from "@mui/material";
import Pic2 from "../assets/JordanValley_1(2).png"
import MapPage from "./MapPage.tsx";


export default function Home() {
    return (
        <Stack>
            <MapPage/>
            <Box sx={{
                border: '1px solid #000',
                padding: 2,
                borderRadius: 2,
                backgroundColor: "#D9D9D9",
                marginTop: 2,
            }}>
                <Typography variant='h4' fontStyle={'bold'} color={"black"}>
                    In our studies, we discovered that there is a lack of living spaces and access to food, both in urban areas and in the forests.
                </Typography>
            </Box>

            {/*<Box*/}
            {/*    sx={{*/}
            {/*        display: "flex",*/}
            {/*        alignItems: "center",*/}
            {/*        alignContent: "center",*/}
            {/*        justifyContent: "center",*/}
            {/*        height: "100%",*/}
            {/*        width: "100%",*/}
            {/*        outline: "2px solid white",*/}
            {/*        objectFit: "contain",*/}
            {/*        marginTop: "5%"*/}
            {/*    }}*/}
            {/*>*/}
            {/*</Box>*/}
        </Stack>
    )
}