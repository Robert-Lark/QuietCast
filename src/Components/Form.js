import React from "react";
import { useForm } from "../Hooks/FormHook";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({}));

function Form(props) {
	const classes = useStyles();
	const handleSubmit = (e) => {
		e.preventDefault();
    };

	const [signUpValues, handleChanges, clearForm] = useForm(
        {
            name: "",
            email: "",
        }
    );

	return (
		<form
			onSubmit={handleSubmit}
			className={classes.root}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="standard-basic"
				label="input"
				className={classes.form}
				value={signUpValues.name}
				onChange={handleChanges}
                margin="normal"
                name="name"
			/>
            <TextField
                id="standard-basic"
                label="email"
                className={classes.form}
                value={signUpValues.email}
                onChange={handleChanges}
                margin="normal"
                name="email"
            />
		</form>
	);
}

export default Form;
