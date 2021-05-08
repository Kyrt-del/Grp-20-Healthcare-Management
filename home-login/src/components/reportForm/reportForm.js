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
import { SnackbarProvider, useSnackbar } from 'notistack';
import i13 from '../../images/i13.png';

require("dotenv").config();

function ReportForm() {
    const [cookie, setCookie]  = useCookies();
    const { enqueueSnackbar } = useSnackbar();
    const API_URL = process.env.REACT_APP_API_URL;
    const onSubmit = async values => {
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
        var sendMail = sendmail(report);
        console.log(report);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(report)
        };
        enqueueSnackbar('Data Successfully sent');
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

      const sendmail = (report) => {
        var txt = "";
        var sendMail = false;
        txt = txt + `Patient ${cookie.userCookie.name} (email id: ${cookie.userCookie.email}) has been showing some unusual traits. \nPlease look into the report below and take actions as you see fit.\n\n`;
        if(report.bloodPressure.systolic !== undefined && (report.bloodPressure.systolic > 140 || report.bloodPressure.systolic < 90)){
          txt = txt + `Systolic Blood Pressure: ${report.bloodPressure.systolic}mmHg\n`;
          sendMail = true;
        }
        if(report.bloodPressure.diastolic !== undefined && (report.bloodPressure.diastolic > 100 || report.bloodPressure.diastolic < 60)){
          txt = txt + `Diastolic Blood Pressure: ${report.bloodPressure.diastolic}mmHg\n`;
          sendMail = true;
        }
        if(report.pulseRate !== undefined && (report.pulseRate > 100 || report.pulseRate < 60)){
          txt = txt + `Pulse Rate: ${report.pulseRate}beats per minute\n`;
          sendMail = true;
        }
        if(report.bloodSugar !== undefined && (report.bloodSugar > 180 || report.bloodSugar < 70)){
          txt = txt + `Blood Sugar: ${report.bloodSugar} mg/dl\n`;
          sendMail = true;
        }
        if(report.temperature !== undefined && (report.temperature > 101 || report.temperature < 95)){
          txt = txt + `Temperature: ${report.temperature} F\n`;
          sendMail = true;
        }
        
        if(sendMail == true){
          console.log("Send Mail");
        }
        else{
          enqueueSnackbar('Voila, you seem to be Healthy');
          return sendMail;
        }
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: cookie.userCookie.doctor_email,
            txt: txt,
          })
        };
        fetch(`${API_URL}/patient/sendmail`, requestOptions)
        enqueueSnackbar('Gaffer, you need to see your doctor');
        return sendMail;
      }

  return (
    <React.Fragment>
      <Grid container alignContent='center' alignItems='center' justify='flex-start'>
                <div style={{margin: "auto"}}>
                  <img src = {i13} alt = "" style = {{width: 382, height: "auto", display: "block",marginLeft: "auto",marginRight: "auto"}}></img>
                </div>
              </Grid>
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
                    not-required
                    name="BloodPressure_Systolic"
                    component={TextField}
                    type="text"
                    label="Blood Pressure Systolic"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    not-required
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
                    not-required
                    component={TextField}
                    type="text"
                    label="BloodSugar"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="Temperature"
                    fullWidth
                    not-required
                    component={TextField}
                    type="text"
                    label="Temperature(in Fahrenheit)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="PulseRate"
                    fullWidth
                    not-required
                    component={TextField}
                    type="text"
                    label="Pulse Rate"
                  />
                </Grid>
                
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ background: '#D2042D' }}
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
    </React.Fragment>
  );
}

export default ReportForm;
