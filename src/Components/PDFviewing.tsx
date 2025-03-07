import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "../index.css"; // Assuming you have a CSS file for styles
import DownloadIcon from '@mui/icons-material/Download';
import {Button} from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFviewing({src}: {src: string}) {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);


    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    function downloadPDF() {
        const link = document.createElement('a');
        link.href = (src);
        link.download = 'BeeWhatIf.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function nextPage() {
        setPageNumber((v) => ++v);
    }

    function prevPage() {
        setPageNumber((v) => --v);
    }

    return (
        <div style={{ width: "100%", height: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Button
                    variant="contained"
                    onClick={prevPage}
                    disabled={pageNumber <= 1}
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
                    Previous
                </Button>
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
                <Button
                    variant="contained"
                    onClick={nextPage}
                    disabled={pageNumber >= (numPages ?? -1)}
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
                    Next
                </Button>
            </div>
            <Document file={src} onLoadSuccess={onDocumentLoadSuccess} className="my-react-pdf">
                <Page pageNumber={pageNumber} />
            </Document>
            <p style={{ color: "#fffff0" }}> Page {pageNumber} of {numPages} </p>
        </div>
    );
}
