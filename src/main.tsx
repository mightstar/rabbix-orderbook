import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SwProvider } from "./services/index.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SwProvider>
      <App />
    </SwProvider>
  </React.StrictMode>
);
