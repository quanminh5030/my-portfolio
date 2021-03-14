import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Divider, Grid, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Skills from './Skills';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },

  title: {
    // width: theme.spacing(20),
    height: theme.spacing(5),
    marginTop: 100,
    marginRight: 200,
    fontSize: 25,
    borderBottomStyle: 'solid',
    borderBottomColor: '#248591',
    BorderBottomWidth: 5
  },

  heading: {
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 20,
    color: 'black'
  },

  divider: {
    color: 'red'
  }
}))

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container item md={5} justify='flex-end'>
        <Typography variant='h3' className={classes.title}>EDUCATION</Typography>
      </Grid>

      <Grid item md={4} style={{ color: '#757474' }}>
        <Typography variant='h5' className={classes.heading}>Häme University of Applied Sciences</Typography>
        <Typography variant='h6'><i>Bachelor of Business Administration, Computer Applications</i></Typography>
        <Typography variant='h6' >
          <FiberManualRecordIcon style={{ fontSize: 10 }} /> 09.2019 - 05.2020
        </Typography>

        <Typography variant='subtitle1' style={{ marginTop: 10 }}>
          After the first year, I got the excellent GPA 5.0. During this time, I have participated in 3 different projects, one of them as Project Manager.
        </Typography>
      </Grid>

      <Grid item md={5}></Grid>

      <Grid item md={4} style={{ color: '#757474' }} direction>
        <Typography variant='h5' className={classes.heading}>Haaga-Helia University of Applied Sciences</Typography>
        <Typography variant='h6'><i>Bachelor of Business Administration, Business Information Technology</i></Typography>
        <Typography variant='h6' >
          <FiberManualRecordIcon style={{ fontSize: 10 }} /> 09.2020 - Currently
        </Typography>

        <Typography variant='subtitle1' style={{ marginTop: 10, marginBottom: 50 }}>
          After transferring my study to Helsinki, I keep my GPA up to 4.78 out of 5.
        </Typography>
      </Grid>

      <Grid item md='12' style={{ margin: 'auto' }}>
        <Divider variant='middle' classes={{ root: classes.divider }} />
      </Grid>

      <Skills />

    </Grid>
  );
}