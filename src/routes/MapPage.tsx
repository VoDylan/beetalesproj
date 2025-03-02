import {
    Box,
    Stack,
    Typography
} from "@mui/material";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {Icon, LatLngTuple} from "leaflet"
import "leaflet/dist/leaflet.css";
import "../mapstyles.css";
import Grid from '@mui/material/Grid2';

import parkIconImg from "../assets/park-location.png";
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
import NamCheong2 from "../assets/parkImages/D4_NamCheong_P2_Pic2.jpg"
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
import KingGeorge3 from "../assets/parkImages/KingGeorgeVPark_F2_3.jpg"
import MountAustin1 from "../assets/parkImages/MountAustinPlayground_F1.jpg"
import MountAustin2 from "../assets/parkImages/MountAustin2.jpg"
import SaiKung1 from "../assets/parkImages/SaiKung1.jpg"
import SaiKung2 from "../assets/parkImages/SaiKung2.jpg"
import LittleHawaii1 from "../assets/parkImages/LittleHawaii1.jpg"
import NgTungChai1 from "../assets/parkImages/NgTungChai_Plant1.jpg"
import NgTungChai2 from "../assets/parkImages/NgTungChai_Plant3.jpg"
import TsuengKwan1 from "../assets/parkImages/D7_TseungKwanOWaterfrontPark1.jpg"
import TsuengKwan2 from "../assets/parkImages/D7_TseungKwanOWaterfrontPark2.jpg"
import TsingYiWestPark1 from "../assets/parkImages/TsingYiWestPark1.jpg"
import TsingYiWestPark2 from "../assets/parkImages/TsingYiWestPark2.jpg"
import LionsRock1 from "../assets/parkImages/LionsRock1.jpg"
import LionsRock2 from "../assets/parkImages/LionsRock2.jpg"
import WohChaiHill1 from "../assets/parkImages/WohChaiHill_P1.jpg"
import WohChaiHill2 from "../assets/parkImages/WohChaiHill_P2.jpg"
import Pineapple1 from "../assets/parkImages/PineappleDam_P2_pic3.jpg"
import Pineapple2 from "../assets/parkImages/PineappleDam_P4_Pic1.jpg"
import MountParker1 from "../assets/parkImages/MountParkerRoadGreenTrail_P1_Pic1.jpg"

export default function MapPage() {
    const parkIcon = new Icon({
        iconUrl: parkIconImg as string,
        iconSize: [38, 38]
    });

    const hikeIcon = new Icon({
        iconUrl: hikeIconImg as string,
        iconSize: [38, 38]
    });
    //


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
            Description: "",

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
            Humidity: "30%",
            Weather: "Sunny/Shade",
            Date: "January 17, 2025",
            Description: "",

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
            Humidity: "36%",
            Weather: "Sunny",
            Date: "January 17, 2025",
            Description: "",
            imageUrl: [
                ChaiWan1,
                ChaiWan2,
            ],
            type: "park"
        },
        {
            geocode: [22.2769, 114.1608],
            popUp: "Hong Kong Park",
            Pollinators: "13",
            PlantsSeen: "5",
            BeeAverage: "2.6",
            Temperature: "22.2C",
            Humidity: "63%",
            Weather: "Partially Cloudy",
            Date: "January 19, 2025",
            Description: "",
            imageUrl: [
                HK1,
                HK2
            ],
            type: "park"
        },
        {
            geocode: [22.3497, 114.0582],
            popUp: "Ma Wan Park",
            Pollinators: "37",
            PlantsSeen: "5",
            BeeAverage: "7.4",
            Temperature: "22C",
            Humidity: "30%",
            Weather: "Sunny",
            Date: "January 19, 2025",
            Description: "",
            imageUrl: [
                MaWan1,
                MaWan2
            ],
            type: "park"
        },
        {
            geocode: [22.3921, 113.9736],
            popUp: "Tuen Mun Park",
            Pollinators: "84",
            PlantsSeen: "5",
            BeeAverage: "16.8",
            Temperature: "19C",
            Humidity: "25%",
            Weather: "Sunny",
            Date: "January 19, 2025",
            Description: "",
            imageUrl: [
                TuenMun1,
                TuenMun2
            ],
            type: "park"
        },
        {
            geocode: [22.4566, 114.0025],
            popUp: "Tin Shui Wai Park",
            Pollinators: "37",
            PlantsSeen: "5",
            BeeAverage: "7.4",
            Temperature: "22C",
            Humidity: "30%",
            Weather: "Sunny",
            Date: "January 19, 2025",
            Description: "",
            imageUrl: [
                TSWP1,
                TSWP2
            ],
            type: "park"
        },
        {
            geocode: [22.32468983, 114.1574124],
            popUp: "Nam Cheong",
            Pollinators: "44",
            PlantsSeen: "6",
            BeeAverage: "7.33",
            Temperature: "19C",
            Humidity: "30%",
            Weather: "Sunny",
            Date: "January 21, 2025",
            Description: "",
            imageUrl: [
                NamCheong1,
                NamCheong2,
            ],
            type: "park"
        },
        {
            geocode: [22.3796, 114.1901],
            popUp: "Sha Tin Park",
            Pollinators: "26",
            PlantsSeen: "5",
            BeeAverage: "5.2",
            Temperature: "20.5",
            Humidity: "30%",
            Weather: "Sunny",
            Date: "January 21, 2025",
            Description: "",
            imageUrl: [
                ShaTin1,
                ShaTin2
            ],
            type: "park"
        },
        {
            geocode: [22.30679693, 114.1685628],
            popUp: "Kowloon Bird Park",
            Pollinators: "37",
            PlantsSeen: "15",
            BeeAverage: "2.467",
            Temperature: "18C",
            Humidity: "61%",
            Weather: "Cloudy",
            Date: "January 22, 2025",
            Description: "",
            imageUrl: [
                KowloonBird1,
                KowloonBird2
            ],
            type: "park"
        },
        {
            geocode: [22.37317907, 114.1105293],
            popUp: "Tsuen Wan Park",
            Pollinators: "10",
            PlantsSeen: "6",
            BeeAverage: "1.67",
            Temperature: "18C",
            Humidity: "58%",
            Weather: "Partially Cloudy",
            Date: "February 3, 2025",
            Description: "",
            imageUrl: [
                TsuenWan1,
                TsuenWan2
            ],
            type: "park"
        },
        {
            geocode: [22.3095, 114.1751],
            popUp: "King's Park",
            Pollinators: "3",
            PlantsSeen: "5",
            BeeAverage: "0.6",
            Temperature: "19C",
            Humidity: "33%",
            Weather: "Sunny",
            Date: "February 5, 2025",
            Description: "",
            imageUrl: [
                KingsPark1,
                KingsPark2
            ],
            type: "park"
        },
        {
            geocode: [22.38237241, 114.1253041],
            popUp: "Shing Mun Valley Park",
            Pollinators: "74",
            PlantsSeen: "9",
            BeeAverage: "8.22",
            Temperature: "21.5C",
            Humidity: "21%",
            Weather: "Partially Cloudy",
            Date: "January 21, 2025",
            Description: "",
            imageUrl: [
                ShingMun1,
                ShingMun2
            ],
            type: "park"
        },
        {
            geocode: [22.325000, 114.217729],
            popUp: "Jordan Valley Park",
            Pollinators: "6",
            PlantsSeen: "4",
            BeeAverage: "1.5",
            Temperature: "19.4C",
            Humidity: "21%",
            Weather: "Partially Cloudy",
            Date: "January 21, 2025",
            Description: "",
            imageUrl: [
                JordanValley1,
                JordanValley2
            ],
            type: "park"
        },
        {
            geocode: [22.3321, 114.1903],
            popUp: "Kowloon Walled City Park",
            Pollinators: "16",
            PlantsSeen: "9",
            BeeAverage: "1.78",
            Temperature: "13.1 C",
            Humidity: "30%",
            Weather: "Sunny",
            Date: "January 26, 2025",
            Description: "",
            imageUrl: [
                KowloonWall1,
                KowloonWall2
            ],
            type: "park"
        },
        {
            geocode: [22.45244695, 114.1767435],
            popUp: "Yuen Shin Park",
            Pollinators: "4",
            PlantsSeen: "5",
            BeeAverage: "0.8",
            Temperature: "19.1C",
            Humidity: "59%",
            Weather: "Sunny Intervals",
            Date: "January 22, 2025",
            Description: "",
            imageUrl: [
                YuenShin1,
                YuenShin2
            ],
            type: "park"
        },
        {
            geocode: [22.30239566, 114.2599706],
            popUp: "Tsueng Kwan O Waterfront Park",
            Pollinators: "11",
            PlantsSeen: "9",
            BeeAverage: "1.22",
            Temperature: "13C",
            Humidity: "83%",
            Weather: "Cloudy/Windy",
            Date: "February 3, 2025",
            Description: "",
            imageUrl: [
                TsuengKwan1,
                TsuengKwan2
            ],
            type: "park"
        },
        {
            geocode: [22.353254, 114.099524],
            popUp: "Tsing Yi Road West Park",
            Pollinators: "0",
            PlantsSeen: "5",
            BeeAverage: "0",
            Temperature: "14C",
            Humidity: "69%",
            Weather: "Cloudy",
            Date: "February 6, 2025",
            Description: "",
            imageUrl: [
                TsingYiWestPark1,
                TsingYiWestPark2,
            ],
            type: "park"
        },
        {
            geocode: [22.272675, 114.147395],
            popUp: "Mount Austin Playground",
            Pollinators: "22",
            PlantsSeen: "9",
            BeeAverage: "2.44",
            Temperature: "14C",
            Humidity: "69%",
            Weather: "Cloudy",
            Date: "February 6, 2025",
            Description: "",
            imageUrl: [
                MountAustin1,
                MountAustin2
            ],
            type: "park"
        },
        {
            geocode: [22.28388648, 114.143138],
            popUp: "West End Park",
            Description: "0 Flowers",
            Pollinators: "0",
            PlantsSeen: "0",
            BeeAverage: "0",
            Temperature: "",
            Humidity: "15.7C",
            Weather: "74%",
            Date: "Cloudy",
            imageUrl: [],
            type: "park"
        },
        {
            geocode: [22.285716, 114.144138],
            popUp: "King George V Memorial Park",
            Pollinators: "4",
            PlantsSeen: "3",
            BeeAverage: "1.33",
            Temperature: "15.7C",
            Humidity: "74%",
            Weather: "Cloudy",
            Date: "January 26, 2025",
            Description: "",
            imageUrl: [
                KingGeorge1,
                // KingGeorge2,
                KingGeorge3,
            ],
            type: "park"
        },
        {
            geocode: [22.239449, 114.241945],
            popUp: "Dragon's Back",
            Pollinators: "13",
            PlantsSeen: "5",
            BeeAverage: "2.6",
            Temperature: "19.2",
            Humidity: "47%",
            Weather: "Sunny",
            Date: "January 19, 2025",
            Description: "",
            imageUrl: [
                DragonsBack1,
                DragonsBack2
            ],
            type: "hike"
        },
        {
            geocode: [22.44331097, 114.1266774],
            popUp: "Ng Tung Chai Waterfall",
            Pollinators: "0",
            PlantsSeen: "5",
            BeeAverage: "0",
            Temperature: "22.2C",
            Humidity: "51%",
            Weather: "Sunny",
            Date: "January 24, 2025",
            Description: "",
            imageUrl: [
                NgTungChai1,
                NgTungChai2
            ],
            type: "hike"
        },
        {
            geocode: [22.35415862, 114.1868307],
            popUp: "Lion Rock",
            Pollinators: "0",
            PlantsSeen: "1",
            BeeAverage: "0",
            Temperature: "15.7C",
            Humidity: "29%",
            Weather: "Sunny",
            Date: "January 27, 2025",
            Description: "",
            imageUrl: [
                LionsRock1,
                LionsRock2
            ],
            type: "hike"
        },
        {
            geocode: [22.388958, 114.146686],
            popUp: "Pineapple Dam Trail",
            Pollinators: "23",
            PlantsSeen: "4",
            BeeAverage: "5.75",
            Temperature: "20.1C",
            Humidity: "79%",
            Weather: "Cloudy",
            Date: "February 2, 2025",
            Description: "",
            imageUrl: [
                Pineapple1,
                Pineapple2
            ],
            type: "hike"
        },
        {
            geocode: [22.38089406, 114.2702369],
            popUp: "Sai Kung Park",
            Pollinators: "13",
            PlantsSeen: "2",
            BeeAverage: "6.5",
            Temperature: "13.3C",
            Humidity: "38%",
            Weather: "Sunny",
            Date: "February 6, 2025",
            Description: "",
            imageUrl: [
                SaiKung1,
                SaiKung2
            ],
            type: "park"
        },
        {
            geocode: [22.334788, 114.16407],
            popUp: "Garden Hill",
            Pollinators: "0",
            PlantsSeen: "1",
            BeeAverage: "0",
            Temperature: "18.1C",
            Humidity: "47%",
            Weather: "Sunny",
            Date: "February 3, 2025",
            Description: "",
            imageUrl: [
                GardenHill1
            ],
            type: "park"
        },
        {
            geocode: [22.35415862, 114.1868307],
            popUp: "Little Hawaii Trail",
            Pollinators: "5",
            PlantsSeen: "1",
            BeeAverage: "5",
            Temperature: "18.2C",
            Humidity: "46%",
            Weather: "Sunny",
            Date: "February 10, 2025",
            Description: "",
            imageUrl: [
                LittleHawaii1
            ],
            type: "hike"
        },
        {
            geocode: [22.33061449, 114.1688082],
            popUp: "Woh Chai Hill",
            Pollinators: "0",
            PlantsSeen: "3",
            BeeAverage: "0",
            Temperature: "17C",
            Humidity: "66%",
            Weather: "Sunny with shade",
            Date: "February 4, 2025",
            Description: "",
            imageUrl: [
                WohChaiHill1,
                WohChaiHill2
            ],
            type: "park"
        },
        {
            geocode: [22.28074535, 114.2100897],
            popUp: "Mount Parker Road Green Trail",
            Pollinators: "0",
            PlantsSeen: "1",
            BeeAverage: "0",
            Temperature: "20C",
            Humidity: "82%",
            Weather: "Cloudy",
            Date: "February 14, 2025",
            Description: "",
            imageUrl: [
                MountParker1,
                // MountAustin1
            ],
            type: "hike"
        },


    ];


    return (
        <Stack spacing={2}
               sx={{
                   width: '100%',
                   marginTop: "10vh",
                   justifyContent: "center",
                   alignItems: "center"

               }}>
            <Box sx={{
                padding: 2,
                backgroundColor: '#c5e1a5',
                marginTop: 2,
                alignSelf: 'stretch'
            }}>
                <Typography variant='h2' fontStyle={'bold'} color={"black"} fontFamily="Abril Fatface"
                >
                    Our Observations of Pollinators in Hong Kong
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "100%", height: "75%", justifyContent: "center"
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
                            position={marker.geocode as LatLngTuple}
                            icon={marker.type === "park" ? parkIcon : hikeIcon}
                        >
                            <Popup>
                                <Box sx={{
                                    height: 'fit-content',
                                    width: 'fit-content',

                                    // overflow: 'auto',
                                }}>
                                    <Typography variant="h5" fontFamily={"Geologica"} fontWeight={"bold"} sx={{textAlign: 'center'
                                    }}>{marker.popUp}</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        // marginTop: "1rem",
                                        gap: 1,
                                        width: "100%",
                                        height: "auto"
                                    }}>
                                        {marker.imageUrl.map((url, index) => (
                                            <img key={index} src={url as string} alt={`${marker.popUp} ${index + 1}`}
                                                 width="150px" height="150px"/>
                                        ))}
                                    </Box>

                                    <Grid container spacing={0}>
                                        <Grid container alignItems="center" size={{ xs: 12 }}>
                                            <Grid size={{ xs: 6 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} fontWeight={"bold"} align="left">Date:</Typography>
                                            </Grid>
                                            <Grid size={{ xs: 6 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} fontSize={"1.2rem"} align="right">{marker.Date}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center" size={{ xs: 12 }}>
                                            <Grid size={{ xs: 6 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} fontSize={"1.2rem"} fontWeight={"bold"} align="left">Bees Per Flower:</Typography>
                                            </Grid>
                                            <Grid size={{ xs: 6 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} align="right">{marker.BeeAverage}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center" size={{ xs: 12 }}>
                                            <Grid size={{ xs: 9 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} fontSize={"1"} fontWeight={"bold"} align="left">Flowers Observed:</Typography>
                                            </Grid>
                                            <Grid size={{ xs: 3 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} align="right">{marker.PlantsSeen}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center" size={{ xs: 12 }}>
                                            <Grid size={{ xs: 9 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} fontWeight={"bold"} align="left">Pollinators Observed:</Typography>
                                            </Grid>
                                            <Grid size={{ xs: 3 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} align="right">{marker.Pollinators}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center" size={{ xs: 12 }}>
                                            <Grid size={{ xs: 6 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} fontWeight={"bold"} align="left">Temperature:</Typography>
                                            </Grid>
                                            <Grid size={{ xs: 6 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} align="right">{marker.Temperature}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center" size={{ xs: 12 }}>
                                            <Grid size={{ xs: 6 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} fontWeight={"bold"} align="left">Humidity:</Typography>
                                            </Grid>
                                            <Grid size={{ xs: 6 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} align="right">{marker.Humidity}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center" size={{ xs: 12 }}>
                                            <Grid size={{ xs: 6 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} fontWeight={"bold"} align="left">Weather:</Typography>
                                            </Grid>
                                            <Grid size={{ xs: 6 }}>
                                                <Typography variant="h6" fontFamily={"Nunito Sans"} align="right">{marker.Weather}</Typography>
                                            </Grid>
                                        </Grid>
                                        {marker.Description && (
                                            <Grid container alignItems="center" size={{ xs: 12 }}>
                                                <Grid size={{ xs: 6 }}>
                                                    <Typography variant="h5" fontFamily={"Nunito Sans"} fontWeight={"bold"} align="left">Notes:</Typography>
                                                </Grid>
                                                <Grid size={{ xs: 6 }}>
                                                    <Typography variant="h6" fontFamily={"Nunito Sans"} align="right">{marker.Description}</Typography>
                                                </Grid>
                                            </Grid>
                                        )}
                                    </Grid>






                                </Box>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </Box>
            <Box sx={{
                padding: 2,
                backgroundColor: "#ffe468",
                marginTop: 2,
                width: "100%%",
                justifyContent: 'center',
                textAlign: 'center'

            }}>
                <Typography variant='h4' fontStyle={'bold'} color={"black"} align="left" fontFamily={"Nunito Sans"} sx={{
                    padding: '1.1rem',
                    textIndent: '2rem'
                }}>
                    This map illustrates the data we’ve taken on all of the parks and hikes we’ve been on. This map shows all the places that we have seen bees and other pollinators reside in Hong Kong and is not a conclsive map.
                </Typography>

            </Box>
            <Box sx={{
                padding: 2,
                backgroundColor: '#c5e1a5',
                marginTop: 2,
                alignSelf: 'stretch'
            }}>
                <Typography variant='h2' fontStyle={'bold'} color={"black"} fontFamily={"Abril Fatface"}>
                    Methodology for Data Collection
                </Typography>
            </Box>
            <Box sx={{
                padding: 2,
                backgroundColor: '#ffe468',
                marginTop: 2,
                width: "fit-content",
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <Typography variant='h5' color={"black"} fontFamily={"Nunito Sans"} align="left" sx={{
                    padding: '1.1rem',
                    textIndent: '2rem'
                }}>
                    At each park/hike we went to we noted the humidity, temperature, weather, and time of day. To take
                    data on bees and other pollinators we picked a flowering plant that either had pollinators around it
                    or was just blooming. At each flower we spent 10 minutes observing to see if any pollinators came to
                    the plant and wrote down the number, frequency of visits, and the weather directly above the plant
                    (sun, partial shade, or shade). The goal was to collect data on five flowers per location.
                </Typography>
            </Box>
        </Stack>
    )
}