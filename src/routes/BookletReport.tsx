import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";
import "../index.css"; // Assuming you have a CSS file for styles
import PDFviewing from "../Components/PDFviewing.tsx";
import beePDF from "../assets/BeetalesInfographic.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function BookletReport() {
    return (
        <div style={{ width: "100%", height: "auto", marginTop: "5rem" }}>
            <PDFviewing src={beePDF}/>
        </div>
    );
}
