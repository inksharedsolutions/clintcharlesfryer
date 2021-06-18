import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import styles from './css/pages.module.scss';
import JSONData from '../contents/textcontents.json';

const aboutthebook = JSONData.aboutthebook;

const Book = () => {
	return (
		<Layout>
			<Helmet>
				<title>About the Book</title>
			</Helmet>

			
			<div className={`${styles.main}  ${styles['gray-bg']}`}>
				<div className={`container`}>

						{
							aboutthebook.map((data, index) => {
								return(
									<div className={`flex ${styles['about-the-book-content']}`}>
										<div className={`${styles['main-image-container']}`} key={index}>
											<img src={data.bookimage} alt={data.booktitle} />
											<p style={{padding: "0 10%", color: 'gray', textAlign: 'center', fontStyle: 'italic'}}>
												{(data.booktitle === "The Dark Ones in The Guardians of Time and Space Resurrection")?
													"Coming Soon in the Works":""}
											</p>
										</div>
										<div className={`${styles['main-text-container']}`}>
											<h2>{data.booktitle}</h2>
											<span>by {JSONData.authorname}</span>
											{data.synopsis.map((data, index) => {
												return <p key={index}>{data}</p>;
											})}
											{data.booklinks.map((data, link_index) => {
												return (
													<ul key={link_index} className={`${styles.booklinks}`}>
														<li>
															<b>{data.type}:</b>
														</li>
														{data.items.map((data1, index) => {
															return (
																<li key={index}>
																	<a href={`${data1.link}`} target="_blank" rel="noopener noreferrer">
																		{data1.text}
																	</a>
																</li>
															);
														})}
													</ul>
												);
											})}
										</div>
									</div>
								)
							})
						}

				</div>
			</div>
		</Layout>
	);
};

export default Book;
