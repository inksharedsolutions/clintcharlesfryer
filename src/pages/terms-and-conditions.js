import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import styles from './css/pages.module.scss';
import JSONData from '../contents/textcontents.json';

const Terms = () => {
	return (
		<Layout>
			<Helmet>
				<title>Terms and Conditions</title>
			</Helmet>

			<div className={`${styles.main} ${styles.smallfont}`}>
				<div className={`container`}>
					<h2 className={`section-heading`}>Terms and Conditions</h2>

					<p>
						{JSONData.authorname} offers this Web site, including all information, software, products and
						services available from this Web site or offered as part of or in conjunction with this Web site
						(the “Web site”), to you, the user, conditioned upon your acceptance of all of the terms,
						conditions, policies and notices stated here. {JSONData.authorname} reserves the right to make
						changes to these Terms and Conditions immediately by posting the changed Terms and Conditions in
						this location.
					</p>
					<p>
						Your continued use of the Web site constitutes your agreement to all such terms, conditions and
						notices, and any changes to the Terms and Conditions made by {JSONData.authorname}.
					</p>
					<p>
						The term ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the user or
						viewer of our website.
					</p>
					<p>The use of this website is subject to the following terms of use:</p>
					<p>
						Use the website at your own risk. This website is provided to you “as is,” without warranty of
						any kind either express or implied. Neither {JSONData.authorname} nor its employees, agents,
						third-party information providers, merchants, licensors or the like warrant that the Web site or
						its operation will be accurate, reliable, uninterrupted or error-free. No agent or
						representative has the authority to create any warranty regarding the Web site on behalf of{' '}
						{JSONData.authorname}. {JSONData.authorname} reserves the right to change or discontinue at any
						time any aspect or feature of the Web site.
					</p>
					<h2 className={`${styles.headline}`}>Exclusion of Liability</h2>
					<p>
						The content of the pages of this website is for your general information and use only. It is
						subject to change without notice.
					</p>
					<p>
						Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
						timeliness, performance, completeness or suitability of the information and materials found or
						offered on this website for any particular purpose. You acknowledge that such information and
						materials may contain inaccuracies or errors and we expressly exclude liability for any such
						inaccuracies or errors to the fullest extent permitted by law.
					</p>
					<h2 className={`${styles.headline}`}>Indemnification</h2>
					<p>
						Your use of any information or materials on this website is entirely at your own risk, for which
						we shall not be liable. It shall be your own responsibility to ensure that any products,
						services or information available through this website meet your specific requirements.
					</p>
					<p>
						This website contains material which is owned by or licensed to us. This material includes, but
						is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited
						other than in accordance with the copyright notice, which forms part of these terms and
						conditions.
					</p>
					<p>
						All trade marks reproduced in this website which are not the property of, or licensed to, the
						operator are acknowledged on the website.
					</p>
					<p>
						Unauthorized use of this website may give rise to a claim for damages and/or be a criminal
						offense.
					</p>
					<p>
						From time to time this website may also include links to other websites. These links are
						provided for your convenience to provide further information. They do not signify that we
						endorse the website(s). We have no responsibility for the content of the linked website(s).
					</p>
					<p>
						Certain areas of this Website are restricted from access by you and {JSONData.authorname} may
						further restrict access by you to any areas of this Website, at any time, in its sole and
						absolute discretion. Any user ID and password you may have for this Website are confidential and
						you must maintain confidentiality of such information.
					</p>
					<h2 className={`${styles.headline}`}>Copyright</h2>
					<p>
						Except for material in the public domain under United States of America copyright law, all
						material contained on the Website (including all software, HTML code, and other code) is
						protected by United States of America and foreign copyright laws. Except as otherwise expressly
						provided in these terms and conditions, you may not copy, distribute, transmit, display,
						perform, reproduce, publish, license, modify, rewrite, create derivative works from, transfer,
						or sell any material contained on the Web site without the prior consent of the copyright owner.
					</p>
					<p>
						None of the material contained by {JSONData.authorname} may be reverse-engineered, disassembled,
						decompiled, transcribed, stored in a retrieval system, translated into any language or computer
						language, retransmitted in any form or by any means (electronic, mechanical, photo reproduction,
						recordation or otherwise), resold or redistributed without the prior written consent of{' '}
						{JSONData.authorname}. Violation of this provision may result in severe civil and criminal
						penalties.
					</p>
					<p>
						Your Content must be your own and must not be infringing on any third party’s rights.{' '}
						{JSONData.authorname} reserves the right to remove any of Your Content from this Website at any
						time, and for any reason, without notice.
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Terms;
