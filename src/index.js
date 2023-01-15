import React,{ StrictMode } from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { createRoot } from "react-dom/client";

import App from "./Containers/App";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   
    <App />
  </StrictMode>
);
