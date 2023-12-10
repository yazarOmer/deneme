import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import AddBoard from "../components/modals/AddBoard";

const Boards = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navbarOpen = useOutletContext();

    // const { user, isLoading } = useSelector((state) => state.auth);

    // useEffect(() => {
    //     if (!user) {
    //         navigate("/login");
    //     }
    // }, [user, navigate]);

    // if (isLoading) {
    //     return <Loader />;
    // }

    // if (showAddBoardModal) {
    //     return <AddBoard />;
    // }

    return (
        <div
            className={`${
                !navbarOpen
                    ? "w-[calc(100%-300px)] fixed left-[300px] transition-all duration-500"
                    : "w-full"
            } bg-dark-grey h-[calc(100%-96px)] fixed top-24 flex items-center justify-center border-t border-[#979797]/25`}
        ></div>
    );
};

export default Boards;
