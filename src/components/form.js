import React from 'react';
import styles from './css/form.module.scss';

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: ''
		};
	}

	render() {
		const { status } = this.state;
		return (
			<div className={`${styles.form}`}>
				<form onSubmit={this.submitForm} action="https://formspree.io/mdogznyj" method="POST">
					<div className={`flex ${styles["form-group"]}`}>
						<input type="text" name="name" placeholder="Name" required />
						<input type="email" name="email" data-submit="giveashout-submit" placeholder="Email" required />
					</div>
					<div className={`flex ${styles["form-group"]}`}>
						<input type="text" name="phone" data-submit="giveashout-submit" placeholder="Phone" required />
						<input type="text" name="address" placeholder="Address" required />
					</div>
					<div className={`flex ${styles["form-group"]}`}>
						<textarea name="message" placeholder="Message" rows="10" required />
					</div>
					{status === 'SUCCESS' ? (
						<p>Thank you. We will get back to you as soon as possible.</p>
					) : (
						<button className={`btn ${styles.submit}`}>Submit</button>
					)}
					{status === 'ERROR' && <p>Ooops! There was an error.</p>}
				</form>
			</div>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: 'SUCCESS' });
			} else {
				this.setState({ status: 'ERROR' });
			}
		};
		xhr.send(data);
	}
}
