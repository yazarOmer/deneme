import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Boards from "./pages/Boards";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="/boards" element={<Boards />} />
                        <Route path="/boards/:id" element={<Boards />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>

            <ToastContainer />
        </>
    );
}

export default App;
