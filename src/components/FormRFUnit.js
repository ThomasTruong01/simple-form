import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
	continute = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;
		// rfUnit,	userID,	status,	checkIn, inCondition, checkOut, outCondition, comments
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter RF Unit ID and User ID" />
					<TextField
						hintText="Enter RF Unit ID"
						floatingLabelText="RF Unit ID"
						onChange={handleChange("rfUnit")}
						defaultValue={values.rfUnit}
					/>
					<br />
					<TextField
						hintText="Enter Your User ID"
						floatingLabelText="User ID"
						onChange={handleChange("userID")}
						defaultValue={values.userID}
					/>
					<br />
					<RaisedButton
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continute}
					/>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15
	}
};

export default FormUserDetails;
