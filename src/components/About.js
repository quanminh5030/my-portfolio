import React from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { Avatar, Grid, ThemeProvider, Typography } from '@material-ui/core';
import mypicture from '../images/myPicture.jpg'
import useStyles from './style/aboutStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function About() {
    const classes = useStyles();

    return (
        <Grid container style={{ backgroundColor: '#303030', }}>
            <Grid item md={1}></Grid>
            <Grid container item md={4} justify='center'>
                <Avatar alt='my picture' className={classes.mypic} src={mypicture} />
            </Grid>

            <Grid item md={5} className={classes.content}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h5' className={classes.title} >About me</Typography>
                    <Typography className={classes.text}>Everyone has his or her own story to tell, and for me, it is about programming. I love developing attractive and friendly websites by writing down few lines of code. The way of creating, organizing and restructuring the codes is truly my passion.</Typography>
                    <Typography className={classes.text}>I have worked with many projects during my study, and step by step, I improve myself as a good and professional team member as much as possible. I believe in this "development world", teamwork is one of the most important skill. </Typography>

                    <Typography variant='h5' className={classes.title} >Contact details</Typography>
                    <Typography className={classes.text}>Quan Dao</Typography>
                    <Typography className={classes.text}>Helsinki, Finland</Typography>
                    <Typography className={classes.text}>(+358) 40 817 0755</Typography>
                    <Typography className={classes.text}>quan.dao912@gmail.com</Typography>
                </ThemeProvider>
            </Grid>
        </Grid>
    );
}