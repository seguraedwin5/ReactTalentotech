import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <h1>Fuera de router provider</h1>
    </div>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
