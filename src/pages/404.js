import React from "react";
import Layout from '../layout/layout';
import styles from './css/pages.module.scss';

const FourOhFour = () => {
    return (
        <Layout>
            <div className={`${styles.main}  ${styles['gray-bg']}`}>
				<div className={`container`}>
                    <div className={`${styles["fof-container"]}`}>
                        <div className={`${styles.fof}`}>
                            <h1>We could not find the page you were looking for.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default FourOhFour;
