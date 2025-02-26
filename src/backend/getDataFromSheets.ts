import { useEffect, useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

// Define the type for the CSV data rows
export interface CsvDataRow {
    "Bees Per Flower": number;
    Date: string;
    "Flowering Plant Proportion": string;
    "Flowers Observed": number;
    Humidity: string;
    Latitude: number;
    Longitude: number;
    Name: string;
    "Pollinators Attracted by Flowers Proportion": string;
    Temperature: string;
    Time: string;
    "Total Pollinators": number;
    "Vegetation Proportion": string;
    Weather: string;
    id: number;
}

export default function FetchCSVData(): CsvDataRow[] | null {

        const [csvData, setCsvData] = useState([]);

        useEffect(() => {
            fetchCSVData();    // Fetch the CSV data when the component mounts
        }, []); // The empty array ensures that this effect runs only once, like componentDidMount

        const fetchCSVData = () => {
            const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBA5PxBO7AHB8YJhQ33Pt8JUhFIr03zhIzQCxH3EeIoS3pitzumJT8_E2Bvp-_s-p4vXfaXm1-IUpF/pub?gid=1793986521&single=true&output=csv'; // Replace with your Google Sheets CSV file URL

            axios.get(csvUrl)    // Use Axios to fetch the CSV data
                .then((response) => {
                    const parsedCsvData = parseCSV(response.data);        // Parse the CSV data into an array of objects
                    setCsvData(parsedCsvData);        // Set the fetched data in the component's state
                    console.log(parsedCsvData);        // Now you can work with 'csvData' in your component's state.
                })
                .catch((error) => {
                    console.error('Error fetching CSV data:', error);
                });
        }

        function parseCSV(csvText) {
            const rows = csvText.split(/\r?\n/);        // Use a regular expression to split the CSV text into rows while handling '\r'
            const headers = rows[0].split(',');        // Extract headers (assumes the first row is the header row)
            const data = [];        // Initialize an array to store the parsed data
            for (let i = 1; i < rows.length; i++) {
                const rowData = rows[i].split(',');          // Use the regular expression to split the row while handling '\r'
                const rowObject = {};
                for (let j = 0; j < headers.length; j++) {
                    rowObject[headers[j]] = rowData[j];
                }
                data.push(rowObject);
            }
            return data;
        }
        return csvData;
}
