import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { PdfProps } from "../types";
import { pdfjs } from "react-pdf";
import "../index.css"; // Assuming you have a CSS file for styles
import DownloadIcon from '@mui/icons-material/Download';
import {Button} from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function WhatYouCanDo({ src }: PdfProps) {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber] = useState<number>(1);
    // setPageNumber

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    // function nextPage() {
    //     setPageNumber((v) => ++v);
    // }
    //
    // function prevPage() {
    //     setPageNumber((v) => --v);
    // }

    return (
        <div style={{ width: "100%", height: "auto", marginTop: "5rem" }}>
            {/*<button className="custom-button" onClick={prevPage} disabled={pageNumber <= 1}>*/}
            {/*    Previous*/}
            {/*</button>*/}
            {/*<button className="custom-button" onClick={nextPage} disabled={pageNumber >= (numPages ?? -1)}>*/}
            {/*    Next*/}
            {/*</button>*/}
            <Button variant="contained" endIcon={<DownloadIcon />}
                    sx={{
                backgroundColor: "#c5e1a5",
                color: "black",
                fontSize: "1rem",
                marginBottom: "1rem"
            }}>
                Download
            </Button>
            <Document sx={{border: '1px solid #000',}}
                file={src}
                onLoadSuccess={onDocumentLoadSuccess}
                className="my-react-pdf"
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}
