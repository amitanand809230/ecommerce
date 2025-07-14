import React from "react";
import "./BredCrums.css";
import arrow_icon from "../../assets/arrow_icon.png";

const BredCrums = ({ product }) => {
    if (!product) return null; 

    return (
        <div className="bredcrums">
            <span>Home</span>
            <img src={arrow_icon} alt=">" height="16" />
            <span>Shop</span>
            <img src={arrow_icon} alt=">" height="16" />
            <span>{product.category}</span>
            <img src={arrow_icon} alt=">" height="16" />
            <span>{product.name}</span>
        </div>
    );
};

export default BredCrums;
