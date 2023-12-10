import React from "react";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-color/5">
            <div className="w-12 h-12 border-4 border-white-color border-b-main-purple rounded-full inline-block box-border animate-spin"></div>
        </div>
    );
};

export default Loader;
