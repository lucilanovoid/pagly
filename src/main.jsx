import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import React from "react"
import App from "./App.jsx"
import "@shopify/polaris/build/esm/styles.css"
import { AppProvider } from "@shopify/polaris"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
)
