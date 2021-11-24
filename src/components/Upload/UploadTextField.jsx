import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const UploadTextField = ({name, label}) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render = {({ field })=> (
          <TextField
              {...field}
              key={field.id}
              fullWidth
              label={label}
              required
          />
        )}
      />
    </Grid>
  );
}

export default UploadTextField
