import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        margin: 30,
        color: '#878787',
        fontWeight: 'bold'
    }
}))

export default function Footer() {
    const classes = useStyles();
    
    return (
        <Grid container>
            <Grid item md={12}>
                <Typography variant='body1' align='center' className={classes.root}>&copy; Copyright 2021 - Quan Dao</Typography>
            </Grid>
        </Grid>
    )
}