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
import clsx from 'clsx';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { SnackbarProvider, useSnackbar } from 'notistack';
require("dotenv").config();

function MedicineForm({args}) {
    const [cookie, setCookie]  = useCookies();
    const { enqueueSnackbar } = useSnackbar();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const onSubmit = async values => {
        const API_URL = process.env.REACT_APP_API_URL;
        const report = {
          _id: args,
          medicine: values.medicine,
          doctorName: cookie.userCookie.name,
          date: new Date(selectedDate),
          time: {
              morning: values.morning != undefined,
              afternoon: values.afternoon != undefined,
              night: values.night != undefined,
          } 
        }
        console.log(report);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(report)
        };
        enqueueSnackbar('Medicine Added');
        fetch(`${API_URL}/doctor/addmedical`, requestOptions)
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
        Medicine Prescription
      </Typography>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    not-required
                    name="medicine"
                    component={TextField}
                    type="text"
                    label="Medicine"
                  />
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={12}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Prescribed Till"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </Grid>
                </MuiPickersUtilsProvider>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Medicine Time</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        label="Morning"
                        control={
                          <Field
                            name="morning"
                            component={Checkbox}
                            type="checkbox"
                            value="morning"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Afternoon"
                        control={
                          <Field
                            name="afternoon"
                            component={Checkbox}
                            type="checkbox"
                            value="afternoon"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Night"
                        control={
                          <Field
                            name="night"
                            component={Checkbox}
                            type="checkbox"
                            value="night"
                          />
                        }
                      />
                    </FormGroup>
                  </FormControl>
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

export default MedicineForm;
