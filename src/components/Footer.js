import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    text: {
        margin: 30,
        color: '#878787',
        fontWeight: 'bold'
    }
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <Grid container item md={12} justify='center'>
            <Typography variant='h5' className={classes.text}>
                &copy; Copyright 2021 - Quan Dao
            </Typography>
        </Grid>
    )
}