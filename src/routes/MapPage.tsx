import {Box, Stack, Typography} from "@mui/material";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {Icon} from "leaflet"
import "leaflet/dist/leaflet.css";
import "../index.css";

import parkIconImg from "../assets/park.png";
import hikeIconImg from "../assets/mountain.png"

import VictoriaPlant1 from "../assets/VictoriaParkPics/D1_Victoria_Plant1.jpg";
import VictoriaPlant2 from "../assets/VictoriaParkPics/D1_Victoria_Plant2.jpg";
import VictoriaPlant3 from "../assets/VictoriaParkPics/D1_Victoria_Plant3.jpg";
import VictoriaPlant4 from "../assets/VictoriaParkPics/D1_Victoria_Plant4.jpg";
import VictoriaPlant5 from "../assets/VictoriaParkPics/D1_Victoria_Plant5.jpg";
import getDataFromSheets from "../backend/getDataFromSheets.ts";

export default function MapPage() {


    const parkIcon = new Icon({
        iconUrl: parkIconImg as string,
        iconSize: [38, 38]
    });

    const hikeIcon = new Icon({
        iconUrl: hikeIconImg as string,
        iconSize: [38, 38]
    });

    const beeDataRows = getDataFromSheets();

    // const markers = [
    //     {
    //         geocode: [],
    //         popUp: "",
    //         description: "",
    //         imageUrl: [],
    //         type: ""
    //     },]

// markers
    const markers = [
        {
            geocode: [22.2824, 114.1887],
            popUp: "Victoria Park",
            description: "Plants: 5",
            imageUrl: [
                VictoriaPlant1,
                VictoriaPlant2,
                VictoriaPlant3,
                VictoriaPlant4,
                VictoriaPlant5
            ],
            type: "park"
        },
        {
            geocode: [22.2757, 114.1762],
            popUp: "Wan Chai Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.2667, 114.2384],
            popUp: "Chai Wan Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.2769, 114.1608],
            popUp: "Hong Kong Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.3497, 114.0582],
            popUp: "Ma Wan Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.3921,113.9736],
            popUp: "Tuen Mun Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.4566,114.0025],
            popUp: "Tin Shui Wai Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.32468983,114.1574124],
            popUp: "Nam Cheong",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.3796, 114.1901],
            popUp: "Sha Tin Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.30679693,114.1685628],
            popUp: "Kowloon Bird Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.37317907, 114.1105293],
            popUp: "Tsuen Wan Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.3095, 114.1751],
            popUp: "King's Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.38237241, 114.1253041],
            popUp: "Shing Mun Valley Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.325000, 114.217729],
            popUp: "Jordan Valley Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.3321, 114.1903],
            popUp: "Kowloon Walled City Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.45244695, 114.1767435],
            popUp: "Yuen Shin Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.30239566, 114.2599706],
            popUp: "Tsueng Kwan O Waterfront Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.353254, 114.099524],
            popUp: "Tsing Yi Road West Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.272675, 114.147395],
            popUp: "Mount Austin Playground",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.28388648, 114.143138],
            popUp: "West End Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        },
        {
            geocode: [22.285716, 114.144138],
            popUp: "King George V Memorial Park",
            imageUrl: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            type: "park"
        }
    ];


    return (
        <Stack>
            <Typography>
                Data Points in Hong Kong
            </Typography>
            <Box
                sx={{
                    // border: '1px solid #000',
                    padding: 0  ,
                    borderRadius: 0,
                    backgroundColor: "#676565",

                    width: "100%",
                    height: "100%",
                }}>
                <MapContainer center={[22.30210013802836, 114.18289006159344]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {markers.map((marker, markerIndex) => (
                        <Marker
                            key={markerIndex}
                            position={marker.geocode}
                            icon={marker.type === "park" ? parkIcon : hikeIcon}
                        >
                            <Popup>
                                <Stack>
                                <Typography variant="h5">{marker.popUp}</Typography>
                                    <Typography variant="h6">{marker.description} </Typography>
                                    {marker.imageUrl.map((url, index) => (
                                        <img key={index} src={url as string} alt={`${marker.popUp} ${index + 1}`} width="150" height="150" />
                                    ))}
                                </Stack>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </Box>
        </Stack>
    )
}