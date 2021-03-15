import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import styles from './css/pages.module.scss';
import JSONData from '../contents/textcontents.json';

const aboutthebook = JSONData.aboutthebook[0];

const Book = () => {
	return (
		<Layout>
			<Helmet>
				<title>About the Book</title>
			</Helmet>

			<div className={`${styles['book-image-mobile']}`}>
				<img src={`${aboutthebook.bookimage}`} alt={`${aboutthebook.booktitle}`} />
			</div>
			<div className={`${styles.main}  ${styles['gray-bg']}`}>
				<div className={`container`}>
					<div className={`flex ${styles['about-the-book-content']}`}>
						<div className={`${styles['main-image-container']}`}>
							<img src={`${aboutthebook.bookimage}`} alt={`${aboutthebook.booktitle}`} />
						</div>
						<div className={`${styles['main-text-container']}`}>
							<h2>{aboutthebook.booktitle}</h2>
							<span>by {JSONData.authorname}</span>
							{aboutthebook.synopsis.map((data, index) => {
								return <p key={index}>{data}</p>;
							})}

							{aboutthebook.booklinks.map((data, link_index) => {
								return (
									<ul key={link_index} className={`${styles.booklinks}`}>
										<li>
											<b>{data.type}:</b>
										</li>
										{data.items.map((data, index) => {
											return (
												<li key={index}>
													<a href={`${data.link}`} target="_blank" rel="noopener noreferrer">
														{data.text}
													</a>
												</li>
											);
										})}
									</ul>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Book;
