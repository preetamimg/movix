import React from "react";

import "./style.scss";

const Spinner = ({ initial }) => {
    return (
        <div className={`loadingSpinner position-relative d-flex align-items-center justify-content-center w-100 ${initial ? "initial" : ""}`}>
            <svg className="spinner" viewBox="0 0 50 50">
                <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                ></circle>
            </svg>
        </div>
    );
};

export default Spinner;