import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './css/reviews.module.scss';
import JSONData from '../contents/textcontents.json';

export default class Reviews extends React.Component {
	render() {
		var settings = {
			infinite: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<div className={`${styles['review-container']}`}>
				<Slider {...settings}>
					{JSONData.reviews.map((data) => {
						return (
							<div className={`${styles['review-item']}`}>
								<div className={`${styles['review-content']}`}>
									<p>
										<span className={`${styles.quote}`}>“</span>
										{data.content}
									</p>
									<div className={`flex`}>
										<span className={`${styles.stars} ${styles['stars-' + data.rating]}`} />
										<span className={`${styles.reviewer}`}>{data.reviewer}</span>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		);
	}
}
