// import {React, useState, useEffect, useCallback } from "react";
import {Box, Card, CardMedia, Stack} from "@mui/material";
// import {Button, IconButton, Typography, styled} from "@mui/material";
import Pic2 from "../assets/JordanValley_1(2).png"


export default function Home() {
    return (
        <Stack>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    outline: "2px solid white",
                    objectFit: "contain",
                    marginTop: "5%"
                }}
            >

                <CardMedia
                    sx={{height: 500}}
                    component="img"
                    image={Pic2}
                    title="Pic2"
                />
            </Box>
        </Stack>
    )
}