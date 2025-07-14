import React from "react";
import "./Newsletter.css"

const Newsletter = () => {
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe To Our Newsletter And Stay Updated</p>
            <div>
                <input type="email"  placeholder="Type Your Email Id Here..."/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter;