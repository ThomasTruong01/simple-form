import React, { Component } from "react";
import FormRFUnit from "./FormRFUnit";
import FormCheckOut from "./FormCheckOut";

export class UserForm extends Component {
	state = {
		step: 1,
		rfUnit: "",
		userID: "",
		status: "",
		checkIn: "",
		inCondition: "",
		checkOut: "",
		outCondition: "",
		comments: ""
	};

	//proceed to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	// Go back to prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	// handle field change
	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	};
	render() {
		const { step } = this.state;
		const {
			rfUnit,
			userID,
			status,
			checkIn,
			inCondition,
			checkOut,
			outCondition,
			comments
		} = this.state;
		const values = {
			rfUnit,
			userID,
			status,
			checkIn,
			inCondition,
			checkOut,
			outCondition,
			comments
		};
		switch (step) {
			case 1:
				return (
					<FormRFUnit
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 2:
				return (
					<FormCheckOut
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return <h1>Confirm</h1>;
			case 4:
				return <h1>Success</h1>;
			default:
				return <h1>Default</h1>;
		}
	}
}

export default UserForm;
