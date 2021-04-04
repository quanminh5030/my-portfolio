import { createMuiTheme, Divider, Grid, Link, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './style/homeStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Home() {
    const classes = useStyles();
    const icons = [
        { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/qu%C3%A2n-%C4%91%C3%A0o-7a8356195/' },
        { icon: GitHubIcon, href: 'https://github.com/quanminh5030' }
    ]

    return (
        <Grid container className={classes.container}>
            <Grid container justify='center' item md={12}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h1' align='center' style={{ color: 'white' }} >
                        Hello! I'm Quan Dao
                </Typography>
                </ThemeProvider>
            </Grid>

            <Grid item md={12}>
                <Typography variant='body2' align='center' className={classes.info}>
                    I'm a student living in Helsinki now. At this moment, I am looking for an internship as a web developer.
                </Typography>
            </Grid>

            <Grid item md={12} style={{ margin: 'auto' }}>
                <Divider variant='middle' style={{ backgroundColor: '#494a4a' }} />
            </Grid>

            <Grid container justify='center' item md={12} style={{ marginBottom: 400 }}>
                {icons.map((item, index) =>
                    <Grid container justify='center' key={index}>
                        <Link href={item.href} className={classes.link}>
                           <item.icon fontSize='large' className={classes.icon} />
                        </Link>
                    </Grid>
                )}
            </Grid>
        </Grid>

    );

}
