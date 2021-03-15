import React from "react";
import { Link } from "gatsby";
import styles from "./css/footer.module.scss";
import JSONData from '../contents/textcontents.json';

const Footer = () => {
    return (
        <>
            <footer className={`${styles.footer}`}>
                <div className={`${styles["footer-top"]}`}>
                    <div className={`container`}>
                        <h3>
                            {JSONData.authorname} has been featured numerous times on...
                        </h3>
                        <img src="/partners.png" alt="Partners" />
                    </div>
                </div>
                <div className={`${styles["footer-nav"]} container`}>
                    <nav>
                        <ul className={`${styles["menu-list"]} flex`}>
                            {JSONData.footermenu.map((data, menu_index) => {
                                return (
                                    <li className={`${styles["menu-item"]}`} key={menu_index}>
                                        <Link to={`${data.link}`} activeClassName={`${styles.current}`}>{data.text}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className={`${styles.copyright} flex space-evenly`}>
                        <Link to="/">
                            &copy; {JSONData.copyrightyear} By {JSONData.authorname} 
                        </Link>
                        <a
                            href="https://stratton-press.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Powered by Stratton Press, Inc.
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
