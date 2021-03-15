import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import styles from './css/pages.module.scss';
import JSONData from '../contents/textcontents.json';

const Author = () => {
	return (
		<Layout>
			<Helmet>
				<title>About the Author</title>
			</Helmet>
			<div className={`${styles['ata-banner']}`}>
				<img src="/ata-banner.jpg" alt={`${JSONData.authorname}`} />
			</div>
			<div className={`${styles.main} ${styles['gray-bg']}`}>
				<div className={`container`}>
					<h2 className={`section-heading`}>About me</h2>
					<div className={`flex flex-item-even ${styles["about-the-author-content"]}`}>
						<div className={`${styles['mid-space']}`}>
							{JSONData.abouttheauthor[0].left.map((data) => {
								return <p>{data}</p>;
							})}
						</div>
						<div>
							{JSONData.abouttheauthor[0].right.map((data) => {
								return <p>{data}</p>;
							})}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Author;
