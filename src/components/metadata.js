import React from 'react';
import { Helmet } from 'react-helmet';
import JSONData from '../contents/textcontents.json';

const Metadata = () => {
	return (
		<Helmet titleTemplate={`%s | ${JSONData.authorname}`} defaultTitle={`${JSONData.authorname}`}>
			<link rel="stylesheet" href="/css/global.css" />
			<link href="https://fonts.googleapis.com/css?family=Open+Sans|Francois+One&display=swap" rel="stylesheet" />
		</Helmet>
	);
};

export default Metadata;
