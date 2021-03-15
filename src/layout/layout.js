import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Metadata from '../components/metadata';

const Layout = (props) => {
	return (
		<div className={props.className}>
			<Metadata />
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
