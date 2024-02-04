import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NextUIProvider>
            <main className="light">
                <App />
            </main>
        </NextUIProvider>
    </React.StrictMode>
);
