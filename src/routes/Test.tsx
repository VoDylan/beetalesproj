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
    const [csvData, setCsvData] = useState<CsvDataRow[] | null>(null);

    const fetchCSVData = () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBA5PxBO7AHB8YJhQ33Pt8JUhFIr03zhIzQCxH3EeIoS3pitzumJT8_E2Bvp-_s-p4vXfaXm1-IUpF/pub?gid=1793986521&single=true&output=csv';

        axios.get(csvUrl)    // Use Axios to fetch the CSV data
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);        // Parse the CSV data into an array of objects
                setCsvData(parsedCsvData);        // Set the fetched data in the component's state
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    }

    function parseCSV(csvText: string): CsvDataRow[] {
        const results = Papa.parse(csvText, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true
        });
        return results.data as CsvDataRow[];
    }

    useEffect(() => {
        fetchCSVData();
    },[]);

    useEffect(() => {
        if (csvData && csvData.length > 0) {
            console.log(csvData[0]); // Log the first object in the array
            console.log(csvData[0].Date); // Log the 'Longitude' property of the first object
        }
    }, [csvData]);

    // Returning the CSV data
    return csvData;
}
