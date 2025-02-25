import * as React from "react";
import {Box} from "@mui/material";
import {
    DataGrid,
    GridColDef,
    // GridToolbar,
    // GridRowModel,
    GridRowModesModel,
    // GridRowModes,
    // GridRowId,
    // GridActionsCellItem,
} from "@mui/x-data-grid";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import {useState} from "react";
import getDataFromSheets from "../backend/getDataFromSheets.ts"

type BeeDataParams = {
    district: number;
    name: string;
    total: string;
    vegetation: string;
    flowerproportion: string;
    proportionattracted: string;
    humidity: string;
    temperature: string;
    weather: string;
    time: string;
    date: string;
    plants: number;
    beeperflower: string
}

export default function DisplayDatabase() {
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
        {},
    );
    const [beeDataColumns] = useState<GridColDef[]>([
        {field: "id", headerName: "id", width: 150},
        {field: "Name", headerName: "Name", width: 150},
        {field: "Total Pollinators", headerName: "Total Pollinators", width: 150},
        // {field: "Vegetation Proportion", headerName: "Vegetation Proportion", width: 150},
        {field: "Flowering Plant Proportion", headerName: "Flowering Plant Proportion", width: 150},
        {field: "Pollinators Attracted by Flowers Proportion", headerName: "Pollinators Attracted by Flowers Proportion", width: 150},
        // {field: "Humidity", headerName: "Humidity", width: 150},
        // {field: "Temperature", headerName: "Temperature", width: 150},
        // {field: "Weather", headerName: "Weather", width: 150},
        // {field: "Time", headerName: "Time", width: 150},
        // {field: "Date", headerName: "Date", width: 150},
        {field: "Flowers Observed", headerName: "FlowersObserved", width: 150},
        {field: "Bees Per Flower", headerName: "Bees Per Flower", width: 150},
    ])
    const beeDataRows = getDataFromSheets();

    return (
        <Box
            sx={{
                border: '1px solid #000',
                padding: 2,
                borderRadius: 1,
                marginTop: 10,
                backgroundColor: "white"
            }}>
            <DataGrid columns={beeDataColumns}
                      rows={beeDataRows}
                rowModesModel={rowModesModel}
                      // sx={{
                      //     color:'white',}}
            />
        </Box>
    )
}