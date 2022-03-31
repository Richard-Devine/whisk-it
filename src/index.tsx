import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./landing-page/landing-page";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <LandingPage/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

