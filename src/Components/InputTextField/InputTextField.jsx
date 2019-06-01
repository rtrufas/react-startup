import React from "react";
import TextField from "@material-ui/core/TextField";
import "./InputTextField.scss";

function InputTextField(props) {
  return (
    <TextField
      id={props.id}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      margin="normal"
      placeholder={props.placeholder}
      variant="outlined"
      fullWidth
    />
  );
}

export default InputTextField;
