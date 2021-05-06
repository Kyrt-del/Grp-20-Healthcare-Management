import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { AreaChart , CartesianGrid, Tooltip, ReferenceLine, Area } from 'recharts';
import Title from './Title';
import { useEffect, useState } from "react";
const API_URL = process.env.REACT_APP_API_URL;

export default function Chart(props) {
  const theme = useTheme();

  const [items, setItems] = useState([]);
  let data = [];
  useEffect(async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email : props.email }),
    };
    const ac = new AbortController();
    await fetch(`${API_URL}/patient/getreports`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        data = response.report_list;
      })
      .catch(error => console.log(error));
    setItems(data);
    console.log(data);
    return () => ac.abort();
  }, []);

  return (
    <React.Fragment>

    <LineChart width={500} height={250} data={items}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="bloodPressure.systolic"/>
        <Tooltip />
        <Line type="monotone" dataKey="bloodPressure.systolic" stroke="#8884d8" />
      </LineChart>

    <LineChart width={500} height={250} data={items}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="bloodPressure.diastolic"/>
        <Tooltip />
        <Line type="monotone" dataKey="bloodPressure.diastolic" stroke="#8884d8" />
      </LineChart>
      
      <LineChart width={500} height={250} data={items}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="bloodPressure.diastolic" stroke="#8884d8" />
      </LineChart>

      <LineChart width={500} height={250} data={items}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="bloodSugar" stroke="#8884d8" />
      </LineChart>

      <LineChart width={500} height={250} data={items}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>

      <LineChart width={500} height={250} data={items}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pulseRate" stroke="#8884d8" />
      </LineChart>

      <AreaChart width={500} height={250} data={items}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="pulseRate" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
      </React.Fragment>
  );
}