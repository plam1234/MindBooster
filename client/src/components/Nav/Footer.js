import React from "react";
import "./Footer.css";
import "../../App";

const Footer = () => {
    return (
        <div className="main-footer">
            <p>
                {" "}
                Made with{" "}
                <i
                    class="em em-heartpulse"
                    aria-role="presentation"
                    aria-label="GROWING HEART"
                ></i>
                by / Peter Lam / Vimal Rampaul / Mikhail Mednikh /
                <i
                    class="em em-blush"
                    aria-role="presentation"
                    aria-label="SMILING FACE WITH SMILING EYES"
                ></i>
            </p>
        </div>
    );
};
export default Footer;
