import { useEffect, useState } from 'react'
import axios from 'axios';
import Papa from 'papaparse';

export default function FetchCSVData() {
    const [csvData, setCsvData] = useState([]);

    const fetchCSVData = () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBA5PxBO7AHB8YJhQ33Pt8JUhFIr03zhIzQCxH3EeIoS3pitzumJT8_E2Bvp-_s-p4vXfaXm1-IUpF/pub?gid=1793986521&single=true&output=csv';

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

    function parseCSV(csvText: string) {
        const results = Papa.parse(csvText, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true
        });
        return results.data;
    }


    useEffect(() => {
        fetchCSVData();
    },[]);
    // console.log(csvData)

    return csvData;
}