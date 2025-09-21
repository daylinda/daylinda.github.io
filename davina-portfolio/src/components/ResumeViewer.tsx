import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
import "../css/resumeviewer.css";

type Props = {
  open: boolean;
  onClose: () => void;
  file: string;
  title?: string;
};

export default function ResumePdfModal({
  open,
  onClose,
  file,
  title = "Résumé",
}: Props) {
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Measure true inner width (clientWidth minus left/right padding).
  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const compute = () => {
      const cs = getComputedStyle(el);
      const padX =
        parseFloat(cs.paddingLeft || "0") + parseFloat(cs.paddingRight || "0");
      // clientWidth excludes the vertical scrollbar already
      const inner = Math.max(0, Math.floor(el.clientWidth - padX));
      setPageWidth(inner);
    };

    const ro = new ResizeObserver(compute);
    ro.observe(el);
    compute();
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{ background: "rgba(0,0,0,0.65)", zIndex: 1050, overflow: "hidden" }}
      onClick={onClose}
    >
      <div
        className="bg-dark text-light rounded-3 shadow p-0"
        style={{
          width: "min(1000px, 96vw)",
          height: "min(85vh, 900px)",
          margin: "4vh auto",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom border-secondary">
          <h5 className="m-0">{title}</h5>
          <button className="btn btn-sm btn-outline-light" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Scrollable PDF viewer */}
        <div
          ref={scrollRef}
          className="pdf-scroll"
          style={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            padding: 12,
          }}
        >
          <Document file={file} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
            {Array.from({ length: numPages }, (_, i) => (
              <Page
                key={`page_${i + 1}`}
                pageNumber={i + 1}
                width={pageWidth || undefined} // fit-to-width exactly
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </Document>
        </div>

        {/* Footer */}
        <div className="px-3 py-2 border-top border-secondary d-flex justify-content-end gap-2">
          <a className="btn btn-sm btn-outline-light" href={file} download="Davina_Lydia_Pinto_Resume.pdf">
            Download
          </a>
          <a className="btn btn-sm btn-light" href={file} target="_blank" rel="noopener noreferrer">
            Open in New Tab
          </a>
        </div>
      </div>
    </div>
  );
}
