import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Pages from "./Routes/route";
import { RouterProvider } from "react-router-dom";





var app = ReactDOM.createRoot(document.getElementById("root"));

app.render(<RouterProvider router={Pages}/>)