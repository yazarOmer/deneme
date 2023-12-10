import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import Boards from "./pages/Boards";
import PrivateRoute from "./components/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
