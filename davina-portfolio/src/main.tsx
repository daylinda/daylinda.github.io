import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Loader = () => (
  <div className="d-flex flex-column align-items-center justify-content-center vh-100">
    <div className="spinner-border text-primary" role="status"></div>
    <p className="mt-3">Loading...</p>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </HashRouter>
  </StrictMode>
);
