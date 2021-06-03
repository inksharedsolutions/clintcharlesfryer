import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import Banner from '../components/banner';
import Form from '../components/form';
// import Reviews from '../components/reviews';
import Interview from '../components/interview';
import styles from './css/pages.module.scss';
import JSONData from '../contents/textcontents.json';

const Home = () => {
	return (
		<Layout className={`home`}>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<Banner />

			<div className={`${styles.main}`}>
				<div className={`container`}>
					<h2 className={`section-heading`}>Latest Book</h2>
					<div className={`flex`}>
						<div className={`${styles['main-image-container']}`}>
							<img src="book.jpg" alt={`${JSONData.featuredbooktitle}`} />
						</div>
						<div className={`${styles['main-text-container']}`}>
							<h2>{JSONData.featuredbooktitle}</h2>
							<span>by {JSONData.authorname}</span>

							{JSONData.home[0].synopsis.map((data, index) => {
								return <p key={index}>{data}</p>;
							})}

							<a
								href={`${JSONData.home[0].amazonlink}`}
								target="_blank"
								rel="noopener noreferrer"
								className={`${styles['amazon-link']}`}
							>
								{' '}
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* <div className={`${styles.reviews}`}>
				<div className={`container`}>
					<h2 className={`section-heading`}>What They Say</h2>
					<Reviews />
				</div>
			</div> */}
			<div className={`${styles.reviews}`}>
				<div className={`container`}>
					<h2 className={`section-heading`}>Interview</h2>
					<Interview />
				</div>
			</div>
			<div className={`${styles['bot-form']}`}>
				<div className={`container`}>
					<h2 className={`section-heading`}>Give a Shout!</h2>
					<Form />
				</div>
			</div>
		</Layout>
	);
};

export default Home;
