import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
// import ReactDOM from "react-dom";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export class FormCheckOut extends Component {
	continute = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const { values, handleChange } = this.props;
		// rfUnit,	userID,	status,	checkIn, inCondition, checkOut, outCondition, comments
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title={values.rfUnit} />
					<TextField
						hintText="RF Unit"
						floatingLabelText="RF Unit"
						onChange={handleChange("rfUnit")}
						defaultValue={values.rfUnit}
					/>
					<br />
					<TextField
						hintText="User"
						floatingLabelText="User Name"
						onChange={handleChange("userID")}
						defaultValue={values.userID}
					/>
					<br />
					<TextField
						hintText="Current Status"
						floatingLabelText="Status"
						onChange={handleChange("status")}
						defaultValue={values.status}
					/>
					<br />
					<br />
					<FormControl>
						<InputLabel shrink htmlFor="condition-label-placeholder">
							Checkout Condition
						</InputLabel>
						<Select
							value={values.outCondition}
							onChange={handleChange("outCondition")}
							input={
								<Input name="outCondition" id="condition-label-placeholder" />
							}
							displayEmpty
							name="Checkout Condition"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={"Excellent"}>Excellent</MenuItem>
							<MenuItem value={"Good"}>Good</MenuItem>
							<MenuItem value={"Fair"}>Fair</MenuItem>
							<MenuItem value={"Poor"}>Poor</MenuItem>
							<MenuItem value={"Bad"}>Bad</MenuItem>
						</Select>
						{/* <FormHelperText>Checkout Condition</FormHelperText> */}
					</FormControl>

					<br />
					<TextField
						hintText="Comments"
						floatingLabelText="Comments"
						onChange={handleChange("comments")}
						defaultValue={values.comments}
					/>
					<br />
					<RaisedButton
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continute}
					/>
					<RaisedButton
						label="Back"
						primary={true}
						style={styles.button}
						onClick={this.back}
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

export default FormCheckOut;
