import React, { useState, useLayoutEffect } from "react";
import { Link } from "gatsby";
import styles from "./css/header.module.scss";
import JSONData from '../contents/textcontents.json';
import Helmet from "react-helmet";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    const updateSize = function() {
        let headerNav = document.getElementById("mainHeader").getBoundingClientRect();

        setHeaderHeight(headerNav.bottom);

        if(window.innerWidth <= 600) {
            document.getElementById("headerNav").style.top = headerHeight+"px";
            document.getElementById("headerNav").style.height = (window.outerHeight - headerHeight) + "px";
        } else {
            document.getElementById("headerNav").style.top = 0;
            document.getElementById("headerNav").style.height = "initial";
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', function() {
            setTimeout(() => {
                updateSize();
            }, 300);
        });

        setTimeout(() => {
            updateSize();
        }, 300);
        
        return () => window.removeEventListener('resize', updateSize);
    });

    return (
        <>
            <Helmet
                bodyAttributes={{
                    class: menuOpen ? styles["menu-open"] : ''
                }}
            />

            <header id="mainHeader" className={`${styles.header}`}>
                <div className={`${styles.info}`}>
                    <div className={`${styles["info-content"]} container flex space-evenly`}>
                        <ul className={`${styles.contact} flex`}>
                            {JSONData.contact.map((data, index) => {
                                return (
                                    (data.icon!=="location") ?
                                    <li key={index}>
                                        <span>{data.text}:</span>
                                        <a href={`${data.text==='Tel'?'tel:':'mailto:'}${data.value}`}>{data.value}</a>
                                    </li> : ''
                                );
                            })}
                        </ul>
                        <ul className={`${styles["soc-med"]} flex`}>
                            {JSONData.socmed.map((data, index) => {
                                return (
                                    data.link ?
                                    <li key={index}>
                                        <a href={`${data.link}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                            <i className={`icon icon-${data.type}`}></i>
                                        </a>
                                    </li> : ''
                                );
							})}
                        </ul>
                    </div>
                </div>
                <div className={`${styles["mobile-header"]} flex`}>
                    <div className={`${styles["mobile-author-name"]}`}>{JSONData.authorname}</div>
                    <div className={`${styles["menu-burger"]}`}
                         role="button"
                         tabIndex="-1"
                         onClick={() => {
                             setMenuOpen(!menuOpen);
                             updateSize();
                          }
                    }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <h1 className={`${styles["author-name"]}`}>{JSONData.authorname}</h1>
                <nav id="headerNav">
                    <ul className={`${styles["menu-list"]} flex`}>
                        {JSONData.mainmenu.map((data, index) => {
                            return (
                                <li className={`${styles["menu-item"]}`} key={index}>
                                    <Link to={`${data.link}`} activeClassName={`${styles.current}`}>{data.text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
