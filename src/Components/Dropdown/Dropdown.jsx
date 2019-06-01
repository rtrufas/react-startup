import React, { Component } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./Dropdown.scss";
import Spinner from "Components/Spinner/Spinner";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelWidth: 0
    };
  }

  componentDidMount() {
    this.setState({
      labelWidth: this.props.label ? this.InputLabelRef.offsetWidth : 0
    });
  }

  render() {
    const { id, label, value, onChange, items, disabled, loading } = this.props;
    let spinner = loading ? <Spinner /> : null;
    return (
      <FormControl
        variant="outlined"
        className="dropdown"
        disabled={disabled || loading}
      >
        {spinner}
        <InputLabel
          htmlFor={id}
          ref={ref => {
            this.InputLabelRef = ref;
          }}
        >
          {label}
        </InputLabel>
        <Select
          value={value}
          onChange={e => {
            onChange(e.target.value);
          }}
          input={
            <OutlinedInput
              id={id}
              name={id}
              labelWidth={this.state.labelWidth}
            />
          }
        >
          {items.map(item => (
            <MenuItem value={item.value} key={item.label}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default Dropdown;
