import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useState } from "react";
import { Document, Page } from "react-pdf";
// import { PdfProps } from "../types";
import { pdfjs } from "react-pdf";
import "../index.css"; // Assuming you have a CSS file for styles
import DownloadIcon from '@mui/icons-material/Download';
import {Button} from "@mui/material";
import beePDF from "../assets/BeetalesInfographic.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function WhatYouCanDo() {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber] = useState<number>(1);
    // setPageNumber

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    function downloadPDF() {
        const link = document.createElement('a');
        link.href = beePDF;
        link.download = 'BeeWhatIf.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
            <Button
                variant="contained"
                endIcon={<DownloadIcon />}
                onClick={downloadPDF}
                sx={{
                    backgroundColor: "#c5e1a5",
                    color: "black",
                    fontSize: "1rem",
                    marginBottom: "1rem",
                    padding: "0.5rem 1rem",
                    border: "none",
                    cursor: "pointer",
                    "&:disabled": {
                        backgroundColor: "#e0e0e0",
                        cursor: "not-allowed"
                    }
                }}
            >
                Download
            </Button>
            <Document
                file={beePDF}
                onLoadSuccess={onDocumentLoadSuccess}
                className="my-react-pdf"
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p style = {{color: "#fffff0"}}>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}
