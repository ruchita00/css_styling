import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';

export default function FormControlLabelPlacement() {
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" fontSize="small" >
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="Self"
          labelPlacement="rightside"
        />   
                <FormControlLabel value="end" control={<Radio color="primary" />} fontSize="small" label="Other" />
                
                <FormControlLabel
          value="top"
          control={<Checkbox color="primary" />}
          labelPlacement="side" label="I agree " /> 

        
             </RadioGroup>
    </FormControl>
  );
}
