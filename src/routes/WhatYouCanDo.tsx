import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { PdfProps } from "../types.ts";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function WhatYouCanDo({src}: PdfProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [numPages, setNumPages] = useState<number>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [pageNumber, setPageNumber] = useState<number>(1);

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
            {/*<button onClick={prevPage} disabled={pageNumber <= 1}>*/}
            {/*    Previous*/}
            {/*</button>*/}
            {/*<button onClick={nextPage} disabled={pageNumber >= (numPages ?? -1)}>*/}
            {/*    Next*/}
            {/*</button>*/}
            <Document
                file={src}
                onLoadSuccess={onDocumentLoadSuccess}
                className="my-react-pdf"
            >
                <Page pageNumber={pageNumber} />
            </Document>
            {/*<p>*/}
            {/*    Page {pageNumber} of {numPages}*/}
            {/*</p>*/}
        </div>
    );
}