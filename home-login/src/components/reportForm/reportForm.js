import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import { Cookies, useCookies } from "react-cookie";
require("dotenv").config();

function ReportForm() {
    const [cookie, setCookie]  = useCookies();
    const onSubmit = async values => {
        const API_URL = process.env.REACT_APP_API_URL;
        console.log(values);
        const report = {
          _id: cookie.userCookie._id,
          bloodPressure: {
              systolic: values.BloodPressure_Systolic,
              diastolic: values.BloodPressure_Diastolic,
           },
          bloodSugar: values.BloodSugar,
          temperature: values.Temperature,
          pulseRate: values.PulseRate
        }
        console.log(report);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(report)
        };
        fetch(`${API_URL}/patient/addreport`, requestOptions)
            .then((response) => response.json())
            .then((response) => {
            console.log(response);
            if(!response.ok){
                alert(response.err.msg);
            }
            })
            .catch(error => console.log(error));
      };
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Report Form
      </Typography>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="BloodPressure_Systolic"
                    component={TextField}
                    type="text"
                    label="Blood Pressure Systolic"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="BloodPressure_Diastolic"
                    component={TextField}
                    type="text"
                    label="Blood Pressure Diastolic"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="BloodSugar"
                    fullWidth
                    required
                    component={TextField}
                    type="text"
                    label="BloodSugar"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="Temperature"
                    fullWidth
                    required
                    component={TextField}
                    type="text"
                    label="Temperature(in Fahrenheit)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="PulseRate"
                    fullWidth
                    required
                    component={TextField}
                    type="text"
                    label="Pulse Rate"
                  />
                </Grid>
                
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}

export default ReportForm;
