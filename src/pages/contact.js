import React from 'react';
import Layout from '../layout/layout';
import Form from '../components/form';
import { Helmet } from 'react-helmet';
import styles from './css/pages.module.scss';
import JSONData from '../contents/textcontents.json';

const Contact = () => {
	return (
		<Layout>
			<Helmet>
				<title>Contact</title>
			</Helmet>

			<div className={`${styles.main}  ${styles['gray-bg']}`}>
				<div className={`container`}>
					<h2 className={`section-heading`}>Contact me</h2>
					<div className={`flex flex-item-even ${styles["contact-content"]}`}>
						<div className={`${styles['c-mid-space']}`}>
							<p>
								{JSONData.authorname} loves to hear from readers. You can reach{' '}
								{JSONData.gender === 'm' ? `him` : `her`} via email. Feel free to send questions about
								writing, {JSONData.gender === 'm' ? `his` : `her`} works, interviews and other publicity
								matters.
							</p>
						</div>
						<div>
							<ul>
								{JSONData.contact.map((data) => {
									return (
										<li>
											<i className={`icon icon-${data.icon}`} /> {data.value}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<Form />
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
