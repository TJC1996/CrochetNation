import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function FormInput({ name, label, required, pattern, helperText }) {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
          pattern: pattern ? {
            value: pattern,
            message: helperText || 'Invalid value',
          } : undefined,
        }}
        render={({ field }) => 
          <TextField 
            {...field}
            label={label}
            fullWidth
            required={required}
            error={!!errors[name]}
            helperText={errors[name] ? errors[name].message : null}
          />
        }
      />
    </Grid>
  );
}

export default FormInput;
