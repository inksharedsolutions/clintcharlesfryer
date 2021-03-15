import React from "react";
import { Link } from "gatsby";
import styles from "./css/banner.module.scss";
import JSONData from "../contents/textcontents.json";

const Banner = () => {
    return (
        <>
            <div className={`${styles.banner} flex`}>
                <div className={`${styles["banner-text-container"]}`}>
                    <div className={`${styles["banner-text"]}`}>
                        <h2 className={`section-heading`}>Hi there!</h2>
                        <p>{JSONData.home[0].banner}</p>
                        <Link to="/about-the-author" className={`btn`}>
                            Read Full Bio
                        </Link>
                    </div>
                </div>
                <div className={`${styles["banner-image-container"]}`}>
                    <img src="banner-img.png" alt={`${JSONData.authorname}`} />
                </div>
            </div>
        </>
    );
};

export default Banner;
