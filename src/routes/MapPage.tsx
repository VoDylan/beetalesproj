import {Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {Icon} from "leaflet"
import "leaflet/dist/leaflet.css";
import "../mapstyles.css";

import parkIconImg from "../assets/park.png";
import hikeIconImg from "../assets/mountain.png"

import VictoriaPlant1 from "../assets/VictoriaParkPics/D1_Victoria_Plant1.jpg";
import VictoriaPlant2 from "../assets/VictoriaParkPics/D1_Victoria_Plant2.jpg";
import WanChai1 from "../assets/parkImages/D1_WanChai_Plant3(2).jpg"
import WanChai2 from "../assets/parkImages/D1_WanChai_Plant5(2).jpg"
import ChaiWan1 from "../assets/parkImages/Chai Wan Park 1.jpg"
import ChaiWan2 from "../assets/parkImages/D1_ChaiWan_P5_Pic3.jpg"
import MaWan1 from "../assets/parkImages/D2_MaWan_Plant2(2).jpg"
import MaWan2 from "../assets/parkImages/D2_MaWan_Plant5.jpg"
import HK1 from "../assets/parkImages/D2HongKongParkPlant3.jpg"
import HK2 from "../assets/parkImages/D2HongKongParkPlant4.jpg"
import TSWP1 from "../assets/parkImages/D3TinShuiWaiParkPlant3.jpg"
import TSWP2 from "../assets/parkImages/D3TinShuiWaiParkPlant5.jpg"
import TuenMun1 from "../assets/parkImages/D3_TunMun_Plant1(2).jpg"
import TuenMun2 from "../assets/parkImages/D3_TunMun_Plant4(2).jpg"
import NamCheong1 from "../assets/parkImages/D4_NamCheong_P1_Pic2.jpg"
import ShaTin1 from "../assets/parkImages/D4_ShaTin_P2_Pic1.jpg"
import ShaTin2 from "../assets/parkImages/D4_ShaTin_P4_Pic2.jpg"
import KowloonBird1 from "../assets/parkImages/D5_KowloonBird_P12_Pic2.jpg"
import KowloonBird2 from "../assets/parkImages/D5_KowloonBird.jpg"
import ShingMun1 from "../assets/parkImages/D5_ShingMun_Plant2(1).jpg"
import ShingMun2 from "../assets/parkImages/D5_ShingMun_Plant7(2).jpg"
import KowloonWall1 from "../assets/parkImages/D6_KowloonWalledCity_Plant4.jpg"
import KowloonWall2 from "../assets/parkImages/D6_KowloonWalledCity_Plant9.jpg"
import YuenShin1 from "../assets/parkImages/D7_YuenShin_Plant3.jpg"
import YuenShin2 from "../assets/parkImages/D7_YuenShin_Plant5.jpg"
import DragonsBack1 from "../assets/parkImages/DragonsBack_P5_Pic3.jpg"
import DragonsBack2 from "../assets/parkImages/DragonsBack_P4.jpg"
import JordanValley1 from "../assets/parkImages/JordanValley_1(2).jpg"
import JordanValley2 from "../assets/parkImages/JordanValley_1.jpg"
import KingsPark1 from "../assets/parkImages/kings park plant 1.jpg"
import KingsPark2 from "../assets/parkImages/kings park plant 4.jpg"
import TsuenWan1 from "../assets/parkImages/Tsuen Wan Park Plant 3.jpg"
import TsuenWan2 from "../assets/parkImages/Tsuen Wan Park Plant 6.jpg"
import GardenHill1 from "../assets/parkImages/GardenHill_Plant1.jpg"
import KingGeorge1 from "../assets/parkImages/KingGeorgeVPark_F2_1.jpg"
import KingGeorge2 from "../assets/parkImages/KingGeorgeVPark_F2_2.jpg"
import KingGeorge3 from "../assets/parkImages/KingGeorgeVPark_F2_3.jpg"
import MountAustin1 from "../assets/parkImages/MountAustinPlayground_F1.jpg"
import MountAustin2 from "../assets/parkImages/MountAustin2.jpg"
import SaiKung1 from "../assets/parkImages/SaiKung1.jpg"
import SaiKung2 from "../assets/parkImages/SaiKung2.jpg"
import LittleHawaii1 from "../assets/parkImages/LittleHawaii1.jpg"
import NgTungChai1 from "../assets/parkImages/NgTungChai_Plant1.jpg"
import NgTungChai2 from "../assets/parkImages/NgTungChai_Plant3.jpg"
import TsuengKwan1 from "../assets/parkImages/D7_TseungKwanOWaterfrontPark1.jpg"
import TsuengKwan2 from "../assets/parkImages/D7_TseungKwanOWaterfrontPark1.jpg"
import TsingYiWestPark1 from "../assets/parkImages/TsingYiWestPark1.jpg"
import TsingYiWestPark2 from "../assets/parkImages/TsingYiWestPark2.jpg"
import LionsRock1 from "../assets/parkImages/LionsRock1.jpg"
import LionsRock2 from "../assets/parkImages/LionsRock2.jpg"
import WohChaiHill1 from "../assets/parkImages/WohChaiHill_P1.jpg"
import WohChaiHill2 from "../assets/parkImages/WohChaiHill_P1.jpg"


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


// markers
    const markers = [
        {
            geocode: [22.2824, 114.1887],
            popUp: "Victoria Park",
            Pollinators: "5",
            PlantsSeen: "8",
            BeeAverage: "0.625",
            Temperature: "17.8 C",
            Humidity: "35%",
            Weather: "Sunny",
            Date: "January 16, 2025",

            imageUrl: [
                VictoriaPlant1,
                VictoriaPlant2,
            ],
            type: "park"
        },
        {
            geocode: [22.2757, 114.1762],
            popUp: "Wan Chai Park",
            Pollinators: "4",
            PlantsSeen: "5",
            BeeAverage: "0.8",
            Temperature: "17.9 C",
            Humidity:"30%",
            Weather: "Sunny/Shade",
            Date: "January 17, 2025",

            imageUrl: [
                WanChai1,
                WanChai2,
            ],
            type: "park"
        },
        {
            geocode: [22.2667, 114.2384],
            popUp: "Chai Wan Park",
            Pollinators: "29",
            PlantsSeen: "8",
            BeeAverage: "3.625",
            Temperature: "15.7 C",
            Humidity:"36%",
            Weather: "Sunny",
            Date: "January 17, 2025",
            imageUrl: [
                ChaiWan1,
                ChaiWan2,
            ],
            type: "park"
        },
        {
            geocode: [22.2769, 114.1608],
            popUp: "Hong Kong Park",
            imageUrl: [
                HK1,
                HK2
            ],
            type: "park"
        },
        {
            geocode: [22.3497, 114.0582],
            popUp: "Ma Wan Park",
            imageUrl: [
                MaWan1,
                MaWan2
            ],
            type: "park"
        },
        {
            geocode: [22.3921,113.9736],
            popUp: "Tuen Mun Park",
            imageUrl: [
                TuenMun1,
                TuenMun2
            ],
            type: "park"
        },
        {
            geocode: [22.4566,114.0025],
            popUp: "Tin Shui Wai Park",
            imageUrl: [
                TSWP1,
                TSWP2
            ],
            type: "park"
        },
        {
            geocode: [22.32468983,114.1574124],
            popUp: "Nam Cheong",
            imageUrl: [
                NamCheong1,
            ],
            type: "park"
        },
        {
            geocode: [22.3796, 114.1901],
            popUp: "Sha Tin Park",
            imageUrl: [
                ShaTin1,
                ShaTin2
            ],
            type: "park"
        },
        {
            geocode: [22.30679693,114.1685628],
            popUp: "Kowloon Bird Park",
            imageUrl: [
                KowloonBird1,
                KowloonBird2
            ],
            type: "park"
        },
        {
            geocode: [22.37317907, 114.1105293],
            popUp: "Tsuen Wan Park",
            imageUrl: [
                TsuenWan1,
                TsuenWan2
            ],
            type: "park"
        },
        {
            geocode: [22.3095, 114.1751],
            popUp: "King's Park",
            imageUrl: [
                KingsPark1,
                KingsPark2
            ],
            type: "park"
        },
        {
            geocode: [22.38237241, 114.1253041],
            popUp: "Shing Mun Valley Park",
            imageUrl: [
                ShingMun1,
                ShingMun2
            ],
            type: "park"
        },
        {
            geocode: [22.325000, 114.217729],
            popUp: "Jordan Valley Park",
            imageUrl: [
                JordanValley1,
                JordanValley2
            ],
            type: "park"
        },
        {
            geocode: [22.3321, 114.1903],
            popUp: "Kowloon Walled City Park",
            imageUrl: [
                KowloonWall1,
                KowloonWall2
            ],
            type: "park"
        },
        {
            geocode: [22.45244695, 114.1767435],
            popUp: "Yuen Shin Park",
            imageUrl: [
                YuenShin1,
                YuenShin2
            ],
            type: "park"
        },
        {
            geocode: [22.30239566, 114.2599706],
            popUp: "Tsueng Kwan O Waterfront Park",
            imageUrl: [
                TsuengKwan1,
                TsuengKwan2
            ],
            type: "park"
        },
        {
            geocode: [22.353254, 114.099524],
            popUp: "Tsing Yi Road West Park",
            imageUrl: [
                TsingYiWestPark1,
                TsingYiWestPark2,
            ],
            type: "park"
        },
        {
            geocode: [22.272675, 114.147395],
            popUp: "Mount Austin Playground",
            imageUrl: [
                MountAustin1,
                MountAustin2
            ],
            type: "park"
        },
        {
            geocode: [22.28388648, 114.143138],
            popUp: "West End Park",
            description: "0 Flowers",
            imageUrl: [
            ],
            type: "park"
        },
        {
            geocode: [22.285716, 114.144138],
            popUp: "King George V Memorial Park",
            imageUrl: [
                KingGeorge1,
                KingGeorge2,
                KingGeorge3,
            ],
            type: "park"
        },
        {
            geocode: [22.239449, 114.241945],
            popUp: "Dragon's Back",
            imageUrl: [
                DragonsBack1,
                DragonsBack2
            ],
            type: "hike"
        },
        {
            geocode: [22.44331097, 114.1266774],
            popUp: "Ng Tung Chai Waterfall",
            imageUrl: [
                NgTungChai1,
                NgTungChai2
            ],
            type: "hike"
        },
        {
            geocode: [22.35415862, 114.1868307],
            popUp: "Lion Rock",
            imageUrl: [
                LionsRock1,
                LionsRock2
            ],
            type: "hike"
        },
        {
            geocode: [22.388958, 114.146686],
            popUp: "Pineapple Dam Trail",
            imageUrl: [
                "https://via.placeholder.com/150",
            ],
            type: "hike"
        },
        {
            geocode: [22.38089406, 114.2702369],
            popUp: "Sai Kung Park",
            imageUrl: [
                SaiKung1,
                SaiKung2
            ],
            type: "Park"
        },
        {
            geocode: [22.334788, 114.16407],
            popUp: "Garden Hill",
            imageUrl: [
                GardenHill1
            ],
            type: "hike"
        },
        {
            geocode: [22.35415862, 114.1868307],
            popUp: "Little Hawaii Trail",
            imageUrl: [
                LittleHawaii1
            ],
            type: "hike"
        },
        {
            geocode: [22.33061449, 114.1688082],
            popUp: "Woh Chai Hill",
            imageUrl: [

            ],
            type: "hike"
        },


    ];


    // const fillMarkerData = (beeDataRows, markers) => {
    //     return markers.map(marker => {
    //         const match = beeDataRows.find(row => row.Name.trim() === marker.popUp);
    //         if (match) {
    //             return {
    //                 ...marker,
    //                 Pollinators: match.Total Pollinators,
    //                 PlantsSeen: match.Vegetation Proportion,
    //                 BeeAverage: match.BeesPerFlower,
    //                 Temperature: match.Temperature,
    //                 Humidity: match.Humidity,
    //                 Weather: match.Weather,
    //                 Date: match.Date,
    //
    //             };
    //         }
    //         return marker;
    //     });
    // };
    // fillMarkerData(beeDataRows, markers)

    return (
        <Stack spacing={2}
               sx={{
                   width: '100%',
                   marginTop: "10vh",
                   justifyContent: "center",
                   alignItems: "center"

               }}>
            <Box sx={{
                border: '1px solid #000',
                padding: 2,
                borderRadius: 2, backgroundColor: "#D9D9D9",
                marginTop: 2,
                alignSelf: 'stretch'
            }}>
            <Typography variant='h2' fontStyle={'bold'} color={"black"}
                        >
                Where Pollinators Reside in Hong Kong
            </Typography>
            </Box>
            <Box
                sx={{
                    width: "175vh",  height: "75%", justifyContent: "center"
                }}>
                <MapContainer center={[22.30210013802836, 114.18289006159344]} zoom={13}
                              style={{
                                  height: '90vh',
                                  width: '100%',
                              }}>
                    <TileLayer
                        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    />

                    {markers.map((marker, markerIndex) => (
                        <Marker
                            key={markerIndex}
                            position={marker.geocode}
                            icon={marker.type === "park" ? parkIcon : hikeIcon}
                        >
                            <Popup>
                                <Stack sx={{
                                    maxHeight: '400px',
                                    width: '300px',
                                    overflow: 'auto',
                                }}>
                                    <Typography variant="h5">{marker.popUp}</Typography>
                                    <TableContainer component={Paper}>
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>Date</TableCell>
                                                    <TableCell>{marker.Date}</TableCell>

                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Plants Seen</TableCell>
                                                    <TableCell>{marker.PlantsSeen}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Pollinators</TableCell>
                                                    <TableCell>{marker.Pollinators}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Bee Average</TableCell>
                                                    <TableCell>{marker.BeeAverage}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Temperature</TableCell>
                                                    <TableCell>{marker.Temperature}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Humidity</TableCell>
                                                    <TableCell>{marker.Humidity}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Weather</TableCell>
                                                    <TableCell>{marker.Weather}</TableCell>
                                                </TableRow>
                                                {marker.description && (
                                                    <TableRow>
                                                        <TableCell>Notes</TableCell>
                                                        <TableCell>{marker.description}</TableCell>
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: 1,
                                    }}>
                                        {marker.imageUrl.map((url, index) => (
                                            <img key={index} src={url as string} alt={`${marker.popUp} ${index + 1}`} width="150" height="150"/>
                                        ))}
                                    </Box>
                                </Stack>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </Box>
                <Box sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 2, backgroundColor: "#F8CB00",
                    marginTop: 2,
                    width: "90%",
                    justifyContent: 'center',
                    textAlign: 'center'

                }}>
                    <Typography variant='h4' fontStyle={'bold'} color={"black"} fontFamily={"Julius Sans One"}>
                        This map illustrates the data we’ve taken on all of the parks and hikes we’ve been on, its not a conclusive map that shows all the places that bees and other pollinators reside in Hong Kong but instead just the places the four of us have observed bees and other pollinators.
                    </Typography>
                </Box>
                <Box sx={{
                    border: '1px solid #000',
                    padding: 2,
                    borderRadius: 2, backgroundColor: "#C20F2E",
                    marginTop: 2,
                    alignSelf: 'stretch'
                }}>
                    <Typography variant='h2' fontStyle={'bold'} color={"black"} fontFamily={"Julius Sans One"}>
                        Methodology for Data Collection
                    </Typography>
                </Box>
            <Box sx={{
                border: '1px solid #000',
                padding: 2,
                borderRadius: 2, backgroundColor: "#020000",
                marginTop: 2,
                width: "90%",
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <Typography variant='h5' fontStyle={'bold'} color={"white"} fontFamily={"Julius Sans One"}>
                    At each park/hike we went to we noted the humidity, temperature, weather, and time of day. To take data on bees and other pollinators we picked a flowering plant that either had pollinators around it or was just blooming. At each flower we spent 10 minutes observing to see if any pollinators came to the plant and wrote down the number, frequency of visits, and the weather directly above the plant (sun, partial shade, or shade). We tried to do five flowers for park but if we couldn’t find 5 different flower species we just took data on the as many different flowers we could find.
                </Typography>
            </Box>
        </Stack>
    )
}