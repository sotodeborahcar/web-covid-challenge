import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const SwitchAge = ({ queryParams, setQueryParams }) => {
  const [state, setState] = React.useState({
    age: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    queryParams ? setQueryParams("") : setQueryParams(`?orderBy=age`);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Order by age</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={state.age} onChange={handleChange} name="age" />
          }
          label="Age"
        />
      </FormGroup>
    </FormControl>
  );
};
export default SwitchAge;
