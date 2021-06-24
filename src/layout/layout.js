import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Metadata from '../components/metadata';
import Audio from '../components/audio';

const Layout = (props) => {
	return (
		<div className={props.className}>
			<Metadata />
			<Header />
			{props.children}
			<Audio />
			<Footer />
		</div>
	);
};

export default Layout;
