import {Box} from "@mui/material";
// import mapMarker from "../assets/mapmarker.png"
import {fitBounds} from "google-map-react/utils";
import React from "react";


export default function Map() {

    interface Point {
        lat: number;
        long: number;
        title: string;
    }

    const MapPoint: React.FC<Point> = () => {
        return (
            <img
                alt={"marker"}
                src="../assets/mapmarker.png"
                // style={{
                //     position: "aboslute",
                //     cursor: "pointer",
                //
                //
                // }}
            />
        );
    };

    const DataPoints: Array<{
        LONGITUDE: number;
        LONGITUDE: number;
        NAME: string;

    }> = [
        {
            LATITUDE:
            LONGITUDE:
            NAME:
        },
    ]


    return (
        <Box/>

    )
}