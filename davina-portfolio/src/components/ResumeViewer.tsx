// ResumePdfModal.tsx
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url"; // Vite-compatible worker
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

type Props = { 
  open: boolean; 
  onClose: () => void; 
  file: string; 
  title?: string; 
};

export default function ResumePdfModal({ open, onClose, file, title = "Résumé" }: Props) {
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{ background: "rgba(0,0,0,0.65)", zIndex: 1050 }}
      onClick={onClose}
    >
      <div
        className="bg-dark text-light rounded-3 shadow p-0"
        style={{
          width: "min(1000px, 96vw)",
          height: "min(85vh, 900px)",
          margin: "4vh auto",
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom border-secondary">
          <h5 className="m-0">{title}</h5>
          <button className="btn btn-sm btn-outline-light" onClick={onClose}>✕</button>
        </div>

        {/* PDF Viewer */}
        <div
          style={{
            height: "calc(100% - 96px)",
            overflow: "auto",
            display: "grid",
            placeItems: "center",
            padding: 12,
          }}
        >
          <Document file={file} onLoadSuccess={({ numPages }) => { setNumPages(numPages); setPage(1); }}>
            <Page 
              pageNumber={page}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>

        {/* Footer with controls */}
        <div className="px-3 py-2 border-top border-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2">
            <button 
              className="btn btn-sm btn-outline-light" 
              onClick={() => setPage(p => Math.max(1, p - 1))} 
              disabled={page <= 1}
            >
              ‹ Prev
            </button>
            <span>Page {page} of {numPages || "?"}</span>
            <button 
              className="btn btn-sm btn-outline-light" 
              onClick={() => setPage(p => Math.min(numPages, p + 1))} 
              disabled={page >= numPages}
            >
              Next ›
            </button>
          </div>

          {/* Download / Open buttons */}
          <div className="d-flex gap-2">
            <a className="btn btn-sm btn-outline-light" href={file} download="Davina_Lydia_Pinto_Resume.pdf">
              Download
            </a>
            <a className="btn btn-sm btn-light" href={file} target="_blank" rel="noopener noreferrer">
              Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
