import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AppRouter from "./router/AppRouter";

const rootElement = document.getElementById("root");
ReactDOM.render(<AppRouter />, document.getElementById("root"));
