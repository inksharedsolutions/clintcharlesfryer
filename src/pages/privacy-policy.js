import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import styles from './css/pages.module.scss';
import JSONData from '../contents/textcontents.json';

const Policy = () => {
	return (
		<Layout>
			<Helmet>
				<title>Privacy Policy</title>
			</Helmet>

			<div className={`${styles.main} ${styles.smallfont}`}>
				<div className={`container`}>
					<h2 className={`section-heading`}>Privacy Policy</h2>

					<p>
						{JSONData.authorname}'s website is committed to safeguarding and preserving the privacy of our
						visitors.
					</p>
					<p>
						This Policy explains what happens to any personal data that you provide to us, or that we
						collect from you whilst you visit our site and how we use cookies on this website.
					</p>
					<p>This Policy from time to time so please do review this Policy regularly.</p>
					<h2 className={`${styles.headline}`}>Information That We Collect</h2>
					<p>
						In running and maintaining our website, {JSONData.authorname}'s website may collect and process
						the following data about you:
					</p>
					<p>
						Information about your use of our site including details of your visits such as pages viewed and
						the resources that you access. Such information includes traffic data, location data and other
						communication data.
					</p>
					<p>
						Information provided voluntarily by you. For example, when you register for information or make
						a purchase.
					</p>
					<p>Information that you provide when you communicate with us by any means.</p>
					<h2 className={`${styles.headline}`}>
						<strong>Use of Cookies</strong>
					</h2>
					<p>
						Cookies provide information regarding the computer used by a visitor. We may use cookies where
						appropriate to gather information about your computer in order to assist us in improving our
						website.
					</p>
					<p>
						We may gather information about your general internet use by using the cookie. Where used, these
						cookies are downloaded to your computer and stored on the computer’s hard drive. Such
						information will not identify you personally; it is statistical data which does not identify any
						personal details whatsoever.
					</p>
					<p>
						Our advertisers may also use cookies, over which we have no control. Such cookies (if used)
						would be downloaded once you click on advertisements on our website.
					</p>
					<p>
						You can adjust the settings on your computer to decline any cookies if you wish. This can be
						done within the “settings” section of your computer.
					</p>
					<h2 className={`${styles.headline}`}>
						<strong>Use of Your Information</strong>
					</h2>
					<p>
						We use the information that we collect from you to provide our services to you. In addition to
						this we may use the information for one or more of the following purposes:
					</p>
					<p>To provide information to you that you request from us relating to our products or services.</p>
					<p>
						To provide information to you relating to other products that may be of interest to you. Such
						additional information will only be provided where you have consented to receive such
						information.
					</p>
					<p>To inform you of any changes to our website, services or goods and products.</p>
					<p>
						If you have previously purchased goods or services from us we may provide to you details of
						similar goods or services, or other goods and services, that you may be interested in.
					</p>
					<p>
						We never give your details to third parties to use your data to enable them to provide you with
						information regarding unrelated goods or services.
					</p>
					<h2 className={`${styles.headline}`}>
						<strong>Storing Your Personal Data</strong>
					</h2>
					<p>
						In operating our website it may become necessary to transfer data that we collect from you to
						locations outside United States of America for processing and storing. By providing your
						personal data to us, you agree to this transfer, storing and processing. We do our utmost to
						ensure that all reasonable steps are taken to make sure that your data is stored securely.
					</p>
					<p>
						Unfortunately the sending of information via the internet is not totally secure and on occasion
						such information can be intercepted. We cannot guarantee the security of data that you choose to
						send us electronically, sending such information is entirely at your own risk.
					</p>
					<h2 className={`${styles.headline}`}>
						<strong>Disclosing Your Information</strong>
					</h2>
					<p>
						We will not disclose your personal information to any other party other than in accordance with
						this Privacy Policy and in the circumstances detailed below:
					</p>
					<p>In the event that we sell any or all of our business to the buyer.</p>
					<p>Where we are legally required by law to disclose your personal information.</p>
					<p>To further fraud protection and reduce the risk of fraud.</p>
					<h2 className={`${styles.headline}`}>
						<strong>Third Party Links</strong>
					</h2>
					<p>
						On occasion we include links to third parties on this website. Where we provide a link it does
						not mean that we endorse or approve that site’s policy towards visitor privacy. You should
						review their privacy policy before sending them any personal data.
					</p>
					<h2 className={`${styles.headline}`}>
						<strong>Contacting Us</strong>
					</h2>
					<p>
						Please do not hesitate to contact us regarding any matter relating to this Privacy and Cookies
						Policy via our{' '}
						<Link to="/contact" style={({ color: '#5db3d9' }, { fontWeight: 700 })}>
							Contact Form
						</Link>
						.
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Policy;
