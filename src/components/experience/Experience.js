import React from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { Divider, Grid, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Skills from './Skills';
import useStyles from '../style/expStyle';
import { ThemeProvider } from 'react-bootstrap';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Portfolio() {
  const classes = useStyles();
  const mySchool = [
    { name: 'Häme University of Applied Sciences', degree: 'Bachelor of Business Administration, Computer Applications', time: '09.2019 - 05.2020', description: ' After the first year, I got the excellent GPA 5.0. During this time, I have participated in many different projects, one of them as Project Manager.' },
    { name: 'Haaga-Helia University of Applied Sciences', degree: 'Bachelor of Business Administration, Business Information Technology', time: '09.2020 - Currently', description: ' After transferring my study to Helsinki, I keep my GPA up to 4.78 out of 5.' }
  ]

  return (
    <Grid container>
      <Grid item md={1}></Grid>
      <Grid container item md={4} justify='center'>
        <ThemeProvider theme={theme}>
          <Typography variant='h4' className={classes.title}>EDUCATION</Typography>
        </ThemeProvider>
      </Grid>

      <Grid container item md={5} className={classes.container}>
        {mySchool.map((item, index) =>
          <Grid container key={index}>
            <ThemeProvider theme={theme}>
              <Typography variant='h5' className={classes.heading}>{item.name}</Typography>
              <Typography variant='h6'><i>{item.degree}</i></Typography>
              <Typography variant='h6' >
                <FiberManualRecordIcon style={{ fontSize: 10 }} /> {item.time}
              </Typography>
              <Typography variant='subtitle1' style={{ marginTop: 10 }}>
                {item.description}
              </Typography>
            </ThemeProvider>
          </Grid>
        )}
      </Grid>

      <Grid item md={12}>
        <Divider variant='middle' />
      </Grid>

      <Skills />

    </Grid>
  );
}