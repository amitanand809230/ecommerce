import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
    const {addToCart} = useContext(ShopContext);
    if (!product) return null; // Prevent error if product is undefined

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" height="134" />
                    <img src={product.image} alt="" height="134"/>
                    <img src={product.image} alt="" height="134"/>
                    <img src={product.image} alt="" height="134"/>
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" height="500px"/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" height="20px"/>
                    <img src={star_icon} alt="" height="20px"/>
                    <img src={star_icon} alt="" height="20px"/>
                    <img src={star_icon} alt="" height="20px"/>
                    <img src={star_dull_icon} alt="" height="20px"/>
                    <p>(130)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                    </div>
                    <div className="productdisplay-right-description">
                        Elevate your everyday look with this premium cotton T-shirt. Designed for all-day comfort, it features a soft, breathable fabric and a relaxed fit. Whether layered or worn solo, it's a wardrobe essential that pairs effortlessly with jeans, joggers, or shorts.
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}} className="productdisplay-right-btn">ADD TO CART</button>
                    <div className="productdisplay-right-category">
                        <span>Category: <span>Women, T-Shirt, Crop Top</span></span>
                    </div>
                    <div className="productdisplay-right-category">
                        <span>Tags: <span>Modern, Latest, Trend Shorts</span></span>
                    </div>
                </div>
            </div>
        
    );
};

export default ProductDisplay;
